import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import './Layout.css'

export default function Layout(props) {
  
  return (
    <div className='layout'>
      <div className='nav'>
        <Nav user={props.user} />
      </div>
      {props.children}
        <Footer />
        
    </div>
  )
}
