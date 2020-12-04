import { useState }  from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


// Added  copytoclipboard** and material-ui dependencies 
// we pass the text string as  props to the child component CopyToClipBoardButton
// so in a parent component we would do <CopyToClipboardButton text={someText}/>
//and that will copy the string to the clipboard
//Paste away!! 

// onCopy, we change the intial state of copy to true. 
//That will allow us to let the user know stuff is copied with a button style change or an alert. 
//Right now I'm unable to "bundle" props in the text value of <CopyToClipboard/>, 
//will do more testing/research.

//** this one looked good, although I want to check if theres a better one out there
//this reaches our mvp goal for now.

//TODO: finetune styling. 

const CopyToClipBoardButton =({text})=>{
    const [copy, setCopy] = useState(false)
    return(<div>
        <CopyToClipboard text={text}
          onCopy={() => setCopy(true)}>
          <AssignmentOutlinedIcon/>
        </CopyToClipboard>
        {copy?(
        <CheckCircleOutlineIcon
        color="primary"
        />):<></>}
    </div>)
};
export default CopyToClipBoardButton;