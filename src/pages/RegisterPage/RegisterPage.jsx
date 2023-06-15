import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/auth/authOperations';
import { Box, Button, FormBox, Input, Label } from './RegisterPage.styled';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = ({ target: { name, value } }) => {
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUserThunk(form));
    setForm(initialState);
  };

  return (
    <Box>
      <FormBox onSubmit={handleSubmit}>
        <h2>Registration</h2>
        <Label>
          <p>Name</p>
          <Input
            type="text"
            name="name"
            value={form.name}
            placeholder="Enter your name..."
            onChange={handleChange}
          />
        </Label>
        <Label>
          <p>Email</p>
          <Input
            type="email"
            name="email"
            value={form.email}
            placeholder="Enter your email..."
            onChange={handleChange}
            autoComplete="off"
          />
        </Label>
        <Label>
          <p>Password</p>
          <Input
            type="password"
            name="password"
            value={form.password}
            placeholder="Enter your password..."
            onChange={handleChange}
            autoComplete="off"
          />
        </Label>
        <Button>Sign up</Button>
      </FormBox>
    </Box>
  );
};

export default RegisterPage;
