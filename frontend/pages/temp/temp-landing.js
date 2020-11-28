import styled from 'styled-components'
import Layout from '../../components/layout'

export default function LandingPage() {
	return (
	  <Layout title="Temporary Landing Page">
	  	<Header>This is where the temporary landing page will be to test out various styling options!</Header>
	  </Layout>
	);
  }

  const Header = styled.h1`
	color: #293241;
	text-align: center;
  `;