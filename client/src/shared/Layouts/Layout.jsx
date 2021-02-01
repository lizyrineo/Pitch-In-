import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  
  return (
    <div className='layout'>
      <Nav />
      
      {props.children}
      
      <Footer user={props.user} handleLogout={props.handleLogout} />
    </div>
  )
}
