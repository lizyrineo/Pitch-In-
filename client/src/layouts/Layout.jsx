import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <h1>Pitch-In!</h1>
        {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to='/login'>Login/Register</Link>
        )}
      </header>
      <hr />
      {currentUser && (
        <>
          <Link to='/organizations'>Organizations</Link>
          <Link to='/opportunities'>Opportunities</Link>
        </>
      )}
      {props.children}
    </div>
  )
}
