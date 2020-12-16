import Head from "next/head";

export default function VotingRoomEmpty() {
  return (
    <div>
      <Head>
        <title>Voting Room Not Found</title>
      </Head>
      <p>
        This index.js page handles the route if no room ID was passed to the URL
      </p>
    </div>
  );
}
