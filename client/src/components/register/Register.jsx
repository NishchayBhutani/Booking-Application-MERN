// import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
  return (
    <>
    <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'
      />
      <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>
      <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'></script>
    <div className='register-container'>
      <div className='register-1'>
        <img
          src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
        />
        <h1>
          Travel Anywhere, <br />
        </h1>
        <h2>Hassle-Free</h2>
      </div>
      <div className='register-2'>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Username</Form.Label>
            <Form.Control type='text' placeholder='Enter username' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          {/* <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='Check me out' />
      </Form.Group> */}
          <Button
            variant='primary'
            //   type='submit'
          >
            Register
          </Button>
        </Form>
      </div>
    </div>
        </>
  );
};

export default Register;
