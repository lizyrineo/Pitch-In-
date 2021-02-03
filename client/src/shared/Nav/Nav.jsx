
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
      
        <div className='all-nav'>
          <Link className="home-link" to="/">
          <img className='logo' src="https://i.imgur.com/JyarWfe.png"></img>
          </Link>
          <div className='text'>
              <h2>Discover ways you can have an impact on your community</h2>
          </div>
        

            {user ? <p>{user.username}</p> : null}
 
        <div className='login'>
          <button>
            <Link to='/login'>Login</Link>
            </button>
          </div>
          
        
        <div className='register'>
        <button>
            <Link to='/register'>Register</Link>
            </button>
          </div>
          </div>  
         
          <div className='orgs'>
          <Organizations />
        </div>
      

      {props.children}

    </div>
  )
}
