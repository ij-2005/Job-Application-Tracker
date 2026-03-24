import '../App.css';

function Navbar({user}){


    return(
        <nav className="navbar">
            <h1>Job Tracker 101</h1>
            <p>{user ? `Welcome ${user}!` : "Welcome, Guest!"}</p>
        </nav>
    );

}

export default Navbar;