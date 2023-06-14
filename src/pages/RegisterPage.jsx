import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/auth/authOperations';

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Enter your name..."
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Enter your email..."
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            placeholder="Enter your password..."
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default RegisterPage;
