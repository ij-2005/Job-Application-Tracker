import '../App.css'
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
function RegisterPage(){

    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    }

    const handleRegister = (event) => {
    event.preventDefault();
    console.log("Register Clicked.");
    // later: send form data to backend API
  };

    return (
        <>
        <section id="center">
        <div className="register-container">

          <div className="titleHeader"> 
            <h1>Nice to meet you!</h1>
            <p className="subTitle"><i>by IJ2005 <FaGithub /></i></p>
          </div>

          <form className="register-form" onSubmit={handleRegister}>
            <div className="register-inputs">
              <input type="text" name="name" placeholder="Enter name.." required />
              <input type="email" name="email" placeholder="Enter email.." required />
              <input type="password" name="password" placeholder="Enter password.." required />
              <input type="password" name="confirmPassword" placeholder="Confirm password.." required />
            </div>
            <div className="register-buttons">
              <button type="button" className="back-button" onClick={handleBack}>
                Back to Login Page
              </button>
              <button type="submit" className="register-button"> 
                Register
              </button>
            </div>
          </form>

        </div>
        </section>
        </>
    );
}

export default RegisterPage 