import { useState, useRef } from "react";

//NOTE: there is certainly a more optimal way to get the ui going.
// most of this I didn't code myself, just found solutions and
// tried to adapt to our needs/my toughts as much as possible. 





//for now we use dummy data to display the voting choices
//Once everything is wired up we will have to change some names in the return.
// ie: votingOptions will become => voteOptions
import votingOptions from "./dummydata.json";

import styled from "styled-components";

import Checkbox from "./checkbox";

import OptionName from "./OptionName";



const VotingForm = ({voteOptions, timeLimit})=>{
    const [checked, setChecked] = useState({})
    const [isOptionClicked, setIsOptionClicked] = useState(false)
    const [vote, setVote] = useState("");


    // On submit we will send the chosen voteOption and 
    // the timeLimit previously set by the room creator. 
    // For now we just have an alert with the voted option. 

    const handleSubmit =  (e, vote) =>{
        e.preventDefault()
         //graphql submit poutine goes here ?
        alert(vote)
    }

    // this is to handle wether the input is checked or not for the styling.
    // I can't seem to be able to wrap all the logic withing this onChange event
    // so I make onClick that gets other state business done as I intend. 
    const handleCheckBox = (index) =>{
            setChecked(checked =>({
                [index]: !checked[index]
            }))
    };



    //handleClick controls the OptionName css and sets the voteOption state
    // Behaviour is funky right now because I can't disable other options
    // Once it is resolved I think this


    const handleClick= (option, index)=>{
        console.log('checkedIndez', checked[index])
            setIsOptionClicked(!isOptionClicked)
           
                setVote(option) 
        

      
            
    };

    return(
        <>
    <form onSubmit={(e)=>handleSubmit(e, vote, timeLimit)}>

        <VotingOptions>
        {votingOptions.map((option, index) =>{
            return( 
            <OptionSelection key={index}>
                <label>
                <Checkbox
                value={option}
                checked={{...checked}}
                index={index}
                onChange={()=>handleCheckBox(index)}
                onClick={()=>handleClick(option, index)}
                />
                </label>
                <OptionName checked={{...checked}} 
                index={index}
                onChange={()=>handleCheckBox(index)}    
                
                >{option}</OptionName>
            </OptionSelection>
            )
        })}
        </VotingOptions>
        <SubmitButton type="submit"> SUBMIT
        </SubmitButton>
        </form>
        </>
        );
};

const VotingOptions = styled.ul`
list-style-type: none;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
`;

const OptionSelection = styled.li`
display:flex;
margin:5px;
width:200px;
justify-content: center;
align-items: center;
`;

const SubmitButton = styled.button`
border: none;
outline: none;
width:150px;
height:25px;
margin-left:70px;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
background-image: linear-gradient(to bottom right, #4a21bd, white);
`

export default VotingForm;