import Head from "next/head";
import { useEffect, useState, createRef } from "react";
import Link from "next/link";
import Card from "../../../components/ui/card";

export default function VotingRoomEmpty() {
  const [roomID, setRoomID] = useState("");
  const onChange = (e) => {
    e.persist();
    setRoomID(e.target.value);
  };

  useEffect(() => {
    console.log(roomID);
  }, [roomID]);

  return (
    <Card>
      <Head>
        <title>Voting Room Not Found</title>
      </Head>
      <p>
        This index.js page handles the route if no room ID was passed to the URL
      </p>
      <div>
        <input type="text" onChange={onChange} />
        <Link href={`voting-room/${roomID}`}>
            <a>Take me to the room!</a>
          </Link>
      </div>
    </Card>
  );
}
