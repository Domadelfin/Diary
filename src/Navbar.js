import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Dominic's Diary</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Entries</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;