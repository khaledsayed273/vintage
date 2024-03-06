
import BaseURL from "../../store/BaseURL";

import dynamic from 'next/dynamic'
const DiscoverTitle = dynamic(() => import('./DiscoverTitle'), { ssr: false })
const ParentDiscover = dynamic(() => import('./ParentDiscover'), { ssr: false })

async function getData() {
	try {
		const res = await BaseURL.get("discover");
		const data = await res.data.data;
		return data;
	} catch (e) {
		console.log(e);
	}
}

async function Discover() {
	const data = await getData()

	console.log(data);

	return (
		<article
			className="font text-white font"
			style={{
				margin: "100px 0",
			}}
		>
			<div className="container">
				<DiscoverTitle />

				<div className="mt-5 ">
					<ParentDiscover data={data} />
				</div>
			</div>
		</article>
	);
}

export default Discover;
