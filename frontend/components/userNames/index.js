import names from "./userNames.json";
import styled from "styled-components";

const NameGenerator = () => {
    // testing
    // testing 2
	const animals = names.a;
	const adjectives = names.b;
	const animalsLength = Math.floor(Math.random() * animals.length);
    const adjectivesLength = Math.floor(Math.random() * adjectives.length);
    
    // in the userNames.json there is two arrays, one of animal names and one of adjectives.
    // They are imported here as seperate arrays, and have respective Random functions based of their length
    // Below, it's inputing an adjective at adjectivesLength (random number based on length), same for animals
    // In turn is creates a random username 

	return (
		<Container>
			<h1>Name Generator</h1>
			<h2>{adjectives[adjectivesLength] + " " + animals[animalsLength]}</h2>
		</Container>
	);
};

export default NameGenerator;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 15px;
    padding: 15px;

    .h1 {
        font-size: 22px;
    }

    .h2 {
        font-size: 18px;       
    }
`;
