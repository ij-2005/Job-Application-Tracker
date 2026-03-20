import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import '../App.css'

function LoginPage() {

  const navigate = useNavigate();

  const HandleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(`"Email: ${email}`);
    console.log(`Password: ${password}`);
    navigate("/dashboard"); //DELETE RIGHTAWAY WHEN BACKEND LOGIC IS HERE.
  };

  const handleRegister = () => {
    navigate("/register");
  }

  return (
    <>
      <section id="center">

        <div className="login-container">

          <div className='titleHeader'> 
          <h1>Job Application Tracker</h1>
          <p className='subTitle'><i>by IJ2005 <FaGithub /></i></p>
        </div>
        <form className="login-form" onSubmit={HandleLogin}>
          <div className="login-inputs">
            <input type="email" name="email" placeholder="Enter email.." required />
            <input type="password" name="password" placeholder="Enter password.." required />
          </div>
          <div className="login-buttons">
            <button type="submit" className="signIn-button">Sign In</button>
            <button type="button" className="register-button" onClick={handleRegister}>
              Register
            </button>
          </div>
        </form>

        </div>
        
      </section>
    </>
  )
}

export default LoginPage
