import '../App.css'
import { useNavigate } from "react-router-dom";
function RegisterPage(){

    const navigate = useNavigate();

    const BackButton = () => {
        navigate("/");
    }
    return (
        <>
        <p>Hello this is register.</p>
        <button onClick={BackButton}>Back</button>
        </>
    );
}

export default RegisterPage 