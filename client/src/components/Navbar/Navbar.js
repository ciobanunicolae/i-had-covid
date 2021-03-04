import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/map">Map</Link>
                <Link to="/create">Add new</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;