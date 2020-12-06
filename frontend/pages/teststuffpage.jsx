import Layout from "../components/layout";

import CopyToClipBoardButton from "../components/ui/copytoclipboard.jsx"

// A temporary page to show case newly created components

export default function testStuff(){

    return(
        <Layout>

            <div className={"container"}>
        <main className={"main"}>
          <h1 className={"title"}>Test your awesome stuff here Collab-ers!</h1>

          <CopyToClipBoardButton text={"Every day I'm pasting!"}/>

          
        </main>
      </div>
        </Layout>
    )
}