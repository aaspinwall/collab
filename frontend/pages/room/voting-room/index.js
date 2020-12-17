import Head from "next/head";
import Card from "../../../components/ui/card";

export default function VotingRoomEmpty() {
  return (
    <Card>
      <Head>
        <title>Voting Room Not Found</title>
      </Head>
      <p>
        This index.js page handles the route if no room ID was passed to the URL
      </p>
    </Card>
  );
}
