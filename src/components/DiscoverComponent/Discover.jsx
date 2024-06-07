import BaseURL from "../../store/BaseURL";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LeftDiscover from './LeftDiscover';
import RightDiscover from './RightDiscover';

async function getData() {
	try {
		const res = await BaseURL.get("discover");
		const data = await res.data.data;
		return data;
	} catch (e) {
		console.log(e);
	}
}

export const revalidate = +process.env.revalidate


async function Discover() {
	const data = await getData()

	return (
		<article
			className="font text-white font"
			style={{
				margin: "100px 0",
			}}
		>
			<div className="container">
				<Typography
					variant="h3"
					component="h3"
					sx={{
						fontSize: { xs: "16px", md: "20px" },
						fontWeight: "400",
					}}
				>
					DISCOVER WORLDWIDE EXHIBITIONS
				</Typography>

				<div className="mt-5 ">
					<Grid container spacing={{ lg: 15, md: 5 }}>
						<LeftDiscover />
						<RightDiscover data={data} />
					</Grid>
				</div>
			</div>
		</article>
	);
}

export default Discover;
