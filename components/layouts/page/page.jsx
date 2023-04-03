import Head from "next/head";

const Page = ({ children }) => {

	return (
		<div className="page">
			<Head>
				<title>SAYYES | Coming soon...</title>
			</Head>
			{ children }
		</div>
	)

};

export default Page;