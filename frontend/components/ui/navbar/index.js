import Link from 'next/link'

const Navbar = () => {
	return (
	  <nav className="navbar">
		<Link  href="/"><a>Home</a></Link>
		{/* Next.js uses Link to wrap an <a> tag which allows for users to navigate between pages - The code above will return the user to the home page located at localhost:3000/ */}
		<Link  href="/"><a>Start a Vote</a></Link> 
		{/* Temp href for the time being until pages are set up */}
		<Link  href="/temp/temp-landing"><a>Temp Landing</a></Link>
	  </nav>
	);
  };
  
  export default Navbar;
  