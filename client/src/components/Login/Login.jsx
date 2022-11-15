// import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      if (
        username === "" ||
        username === undefined ||
        password === "" ||
        password === undefined
      )
        alert("username or password cannot be empty");
      else if (err.response.status === 404)
        alert("username or password incorrect");
    }
    setUsername("");
    setPassword("");
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      <div className="log-in-container">
        <div className="login-1">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <h1>
            Travel Anywhere, <br />
          </h1>
          <h2>Hassle-Free</h2>
        </div>
        <div className="login-2">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                onChange={handleUsernameChange}
                value={username}
                placeholder="Enter username"
              />
              {/* <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={handlePasswordChange}
                value={password}
                placeholder="Password"
              />
            </Form.Group>
            {/* <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='Check me out' />
    </Form.Group> */}
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Login
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
