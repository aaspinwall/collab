import styled from "styled-components";
import Layout from "../../components/layout";

export default function LandingPage() {
	return (
		<Layout title="Temporary Landing Page">
			<Container>
				<Header>
					Agora
				</Header>
			</Container>
		</Layout>
	);
}

const Container = styled.div`
	/* background-color: #eb5e28; */
    background: linear-gradient(to left top, #fff 50%, #eb5e28 50%);
	height: 100vh;
`;

const Header = styled.h1`
	color: #293241;
	text-align: center;
	margin-top: 0;
	padding-top: 15px;
	font-size: 3rem;
`;
