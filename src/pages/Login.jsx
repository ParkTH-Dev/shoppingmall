import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled(Container)`
  max-width: 450px;
  margin: 50px auto;
`;

const LoginForm = styled(Form)`
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  .form-control {
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #e9ecef;

    &:focus {
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }
  }

  .btn-primary {
    width: 100%;
    padding: 12px;
    border-radius: 10px;
    font-weight: 600;
    margin-top: 20px;
    background: linear-gradient(45deg, #007bff, #6610f2);
    border: none;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
    }
  }
`;

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <LoginContainer>
      <LoginForm onSubmit={loginUser}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
          <Form.Text className="text-muted">
            {/* We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
