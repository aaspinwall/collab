import { createGlobalStyle } from "styled-components";
import { COLORS } from "./colors";
const GlobalStyles = createGlobalStyle`
	html,
	body {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		// setting the font size 10px globally so that we can use rem to change font-size elsewhere
		font-size: 10px;
		
	}
	
	a {
	  color: inherit;
	  text-decoration: none;
	}

	button, input {
	// 	background-color: ${COLORS.PURPLES.LIGHT};
	// 	border: 2px solid ${COLORS.PURPLES.MAIN};
	// 	padding: 10px 18px;
	// 	border-radius: 8px;
	// 	color: ${COLORS.PURPLES.MAIN};
		font-weight: bold;
		letter-spacing: 0.15rem;
	}

	// button {
	// 		:before{margin: 8px;
	// 		height: 100%;
	// 		width: 100%;
	// 		content: "";
	// 		opacity: 0.8;
	// 		cursor: pointer;
	// 		border-radius: 10px;
	// 		color: ${COLORS.SHADES.OFFWHITE};
	// 		background: ${COLORS.PURPLES.LIGHT};
	// 		background: linear-gradient(
	// 			135deg,
	// 			${COLORS.PURPLES.MAIN} 60%,
	// 			${COLORS.PURPLES.LIGHT} 150%
	// 		);
	// 		transition: all 0.2s ease-in-out;}
		
	// 	:hover,
	// 	:focus {
	// 		opacity: 1;
			
	// 	}
	// 	:disabled {
	// 		visibility: hidden;
	// 	}
	// }

	input[type="text"]{ padding: 20px 10px; line-height: 18px; }

	::placeholder {
		color: black;
		font-style: italic;

	}
	
	* {
	  box-sizing: border-box;
	}`;

export default GlobalStyles;
