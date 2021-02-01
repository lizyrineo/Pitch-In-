
import { Link } from 'react-router-dom';
import './Nav.css';


export default function Nav(props) {
  const { user } = props;
  

  const authUserLinks = (
    <>
      <Link className="user-link" to="/create-organization">
        Add Your Organization
      </Link>
      
    </>
  );

  const unAuthUserLinks = (
    <>
      <Link className="user-link" to="/login">
        Log In
      </Link>
      <Link className="user-link" to="/register">
        Register
      </Link>
    </>
  );
  return (
    <div>
      <header>
      <div className='logo'>
            <img src="https://i.imgur.com/o9YE92O.png"></img>
       </div>  

            {user ? <p>{user.username}</p> : null}
            
            
    
            <div className='login'>
              <Link to='/login'>Login</Link>
            </div>
            
            <div className='register'>
              <Link to='/register'>Register</Link>
            </div>

            <Link to='/organizations'>Organizations</Link>
            

    </header>

      {props.children}
    </div>
  )
}
