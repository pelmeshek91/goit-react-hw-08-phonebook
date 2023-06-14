import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from 'redux/auth/authOperations';

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Enter your email..."
            onChange={handleChange}
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
        <button>Log in</button>
      </form>
    </div>
  );
};

export default LoginPage;
