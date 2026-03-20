import '../App.css'
import { useNavigate } from "react-router-dom";

function DashboardPage(){
    const navigate = useNavigate();

    const loginSite = () => {
        navigate("/");
    }
    return(
        <>
        <p>Hello this is the dashboard page.</p>
        <button onClick={loginSite}>Back home.</button>
        </>
    )
}

export default DashboardPage