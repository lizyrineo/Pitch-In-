import { useState } from 'react';
import './Register.css';

export default function Register(props) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  })
  const { first_name, last_name, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e)=> {
      e.preventDefault();
      handleRegister(formData);
    }}>
      <h3>Register</h3>
      <label>First Name:
        <input
          type='text'
          name='first_name'
          placeholder='First Name'
          value={first_name}
          onChange={handleChange}
        />
      </label>
<br />
      <label>Last Name:
        <input
          type='text'
          name='last_name'
          placeholder='Last Name'
          value={last_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Email:
        <input
          type='text'
          name='email'
          placeholder='Email'
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Password:
        <input
          type='password'
          name='password'
          placeholder='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  )
}
