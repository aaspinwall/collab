import { createGlobalStyle } from "styled-components";
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
	
	* {
	  box-sizing: border-box;
	}`;

export default GlobalStyles;
