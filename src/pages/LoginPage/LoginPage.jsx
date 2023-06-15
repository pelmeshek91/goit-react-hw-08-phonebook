import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from 'redux/auth/authOperations';
import { Box, Button, FormBox, Input, Label } from './LoginPage.styled';

const initialState = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = ({ target: { name, value } }) => {
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUserThunk(form));
    setForm(initialState);
  };

  return (
    <Box>
      <FormBox onSubmit={handleSubmit}>
        <h2>Authorization</h2>
        <Label>
          <p>Email</p>
          <Input
            name="email"
            type="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
          />
        </Label>
        <Label>
          <p>Password</p>
          <Input
            name="password"
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">Login</Button>
      </FormBox>
    </Box>
  );
};

export default LoginPage;
