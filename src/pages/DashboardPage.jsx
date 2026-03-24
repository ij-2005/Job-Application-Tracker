import '../App.css'
import { useNavigate } from "react-router-dom";

function DashboardPage(){
    const navigate = useNavigate();
    
    const loginSite = () => {
        navigate("/");
    }
    return(
        <>
        <section id="center">
        <div className="dashboard-container">
            <div className="titleHeader"> 
                <h1>Job Tracker 101</h1>
            </div>

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