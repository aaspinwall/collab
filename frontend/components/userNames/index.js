import names from "./userNames.json";
import styled from "styled-components";

const NameGenerator = () => {
  const animals = names.a;
  const adjectives = names.b;
  const animalsIndexes = [];
  const adjectivesIndexes = [];
  const randomAnimals = [];
  const randomAdjectives = [];

  while (randomAnimals.length < 4 || randomAdjectives.length < 4) {
    const animalOption = Math.floor(Math.random() * animals.length);
    const adjectiveOption = Math.floor(Math.random() * adjectives.length);

    const isAnimalAlreadyIn = animalsIndexes.includes(animalOption);
    const isAdjectiveAlreadyIn = adjectivesIndexes.includes(adjectiveOption);

    if (!isAnimalAlreadyIn && randomAnimals.length !== 4) {
      animalsIndexes.push(animalOption);
      randomAnimals.push(animals[animalOption]);
    }
    if (!isAdjectiveAlreadyIn && randomAdjectives.length !== 4) {
      adjectivesIndexes.push(adjectiveOption);
      randomAdjectives.push(adjectives[adjectiveOption]);
    }
  }

  // in the userNames.json there is two arrays, one of animal names and one of adjectives.
  // They are imported here as seperate arrays, and have respective Random functions based of their length
  // Below, it's inputing an adjective at adjectivesLength (random number based on length), same for animals
  // In turn is creates a random username

  return (
    <Container>
      <h1>Welcome to</h1>
      <h2>your choosing room</h2>

      <p>Pick your name</p>

      <form>
        {
          randomAnimals.map((combo, index) => {
            return <NameChoice>{`${randomAdjectives[index]} ${combo}`}</NameChoice>
          })
        }
        <button>Shuffle again</button>
        <button>Next</button>
      </form>
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
  width: 400px;

  .h1 {
    font-size: 22px;
  }

  .h2 {
    font-size: 18px;
  }
`;

const NameChoice = styled.p`
  color: white;
`
