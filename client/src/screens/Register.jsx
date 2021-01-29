import { useState } from 'react';

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
          first_name='text'
          value={first_name}
          onChange={handleChange}
        />
      </label>
<br />
      <label>Last Name:
        <input
          type='text'
          last_name='text'
          value={last_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Email:
        <input
          type='text'
          name='username'
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  )
}
