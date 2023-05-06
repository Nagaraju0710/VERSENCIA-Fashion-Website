import {Link } from "react-router-dom";
// import Inspiration from "../Pages/Inspiration";

function Navbar(){
return (
<div className="Navbar" style={{margin:"10px", padding:'30px',boxShadow: '1px 2px 9px #F4AAB9',width:"95%"}}>
<Link style={{textDecoration: 'none',fontSize:"large",fontFamily:"serif",color:"deeppink"}} to="/">Dribbble</Link>
<Link style={{textDecoration: 'none',paddingLeft:"50px"}} to="/inspiration">Inspiration</Link>
<Link style={{textDecoration: 'none',paddingLeft:"50px"}} to="/findwork">Find Work</Link>
<Link style={{textDecoration: 'none',paddingLeft:"50px"}} to="/learndesign">Learn Design</Link>
<Link style={{textDecoration: 'none',paddingLeft:"50px"}} to="/gopro">Go Pro</Link>
<Link style={{textDecoration: 'none',paddingLeft:"50px"}} to="/hire">Hire Designers</Link>
<Link style={{textDecoration: 'none',marginLeft:"600px",background:"deeppink",color:"white",fontSize:"20px"}} to="/signup">Sign Up</Link>
</div>

)
}
export default Navbar;