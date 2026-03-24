import '../App.css'
import { useNavigate } from "react-router-dom";

import Navbar from '../components/Navbar';

function DashboardPage(){
    const navigate = useNavigate();
    
    const loginSite = () => {
        navigate("/");
    }
    return(
        <>
        <section id="center">
        <div className="dashboard-container">
            <Navbar />

            <div className="componentsBar">
                
            </div>

            <div className="applicationList">

            </div>
            
        </div>

        </section>

        <p>Hello this is the dashboard page.</p>
        <button onClick={loginSite}>Back home.</button>
        </>
    )
}

export default DashboardPage