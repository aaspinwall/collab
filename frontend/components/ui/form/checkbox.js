import React from "react";
import styled from "styled-components";

const CheckboxForm = ({ voteOptions }) => {
	return (
		<Container>
			<form>
				{voteOptions.map((option, index) => {
					return (
						<div key={`vote-option-${index}`} className="vote-option">
							<label htmlFor={option}>{option}</label>
							<input type="radio" name="vote-options" value={option} />
						</div>
					);
				})}
			</form>
		</Container>
	);
};

export default CheckboxForm;

const Container = styled.div`
	background-color: ghostwhite;
	border: 2px solid black;
	border-radius: 10px;
	box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5);

	form {
		display: flex;
		flex-direction: column;
		padding: 35px;

		.vote-option {
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			label {
				padding-left: 10px;
				margin-bottom: 8px;
			}
		}
	}
`;
