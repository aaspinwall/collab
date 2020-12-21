import React from "react";
import Timer from "../../components/timer";

import CopyToClipBoardButton from "../../components/ui/copytoclipboard";

export default function Development() {
  // Testing Copy to clipboard
  const [textToBeCopied, setTextToBeCopied] = React.useState("");

  //   const [text, setText] = React.useState(null);

  function handleChange(e) {
    console.log(e, "change");
    setTextToBeCopied(e.target.value);
  }

  return (
    <>
      <div>
        <form>
          <label>
            Text to be copied:
            <input type="text" value={textToBeCopied} onChange={handleChange} />
          </label>
          {/* <input type="submit" value="Set Copy State" /> */}
        </form>
      </div>
      <CopyToClipBoardButton text={textToBeCopied} />
      <Timer />
    </>
  );
}
