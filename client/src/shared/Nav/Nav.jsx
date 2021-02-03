
import { Link } from 'react-router-dom';
import './Nav.css';
import Spotlight from '../../screens/Spotlight/Spotlight'
import Organizations from '../../screens/Organizations/Organizations'

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
        <div className='all-nav'>
          <Link className="home-link" to="/">
          <img className='logo' src="https://i.imgur.com/FkA0Zdp.png"></img>
          </Link>
          <div className='text'>
              <h2>Discover ways you can have an impact on your community</h2>
          </div>
        </div>  

            {user ? <p>{user.username}</p> : null}
 
          <div className='login'>
            <Link to='/login'>Login</Link>
          </div>
          
          <div className='register'>
            <Link to='/register'>Register</Link>
          </div>
         
          <div className='orgs'>
          <Organizations />
        </div>
      </header>

      {props.children}

    </div>
  )
}
