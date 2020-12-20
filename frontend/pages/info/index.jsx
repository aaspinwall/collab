import Card from "../../components/ui/card";
import Button from "../../components/ui/sample_button";
import { InfoStyles } from '../../styles/button';

export default function Home() {
  // This is called by the onClick event
  const handleClick = () => {
    alert("You clicked on the Button!");
  };

  return (
    /* Modify the page's content inside layout */

    /* Title is metadata, good for SEO  */

    <div className={"container"}>
      <Card>
        <main className={"main"}>
          <h1 className={"title"}>Welcome Collab-er!</h1>

          <div className={"description"}>
            <h2>Getting started</h2>
            <p>
              If you're familiar with react, you'll be up and running in no
              time.
            </p>
          </div>

          <div>
            <p>This is a regular react component</p>
            <p>
              Check <code>pages/index.jsx </code> to see what's going on
            </p>
            <Button children={'Click Me'} styles={InfoStyles} onClick={handleClick} />
          </div>

          <div className={"grid"}>
            <a href="https://nextjs.org/learn" className={"card"}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </div>
        </main>
      </Card>
    </div>
  );
}
