import BaseURL from "../../store/BaseURL";
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
		<div
			className="font text-white font"
			
		>
			<div className="container">
				<h3 className="md:text-xl">
					DISCOVER WORLDWIDE EXHIBITIONS
				</h3>
				<div className="mt-5 ">
					<div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
						<LeftDiscover />
						<RightDiscover data={data} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Discover;
