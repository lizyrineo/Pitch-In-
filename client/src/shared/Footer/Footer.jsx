import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {faCopyright} from '@fortawesome/free-solid-svg-icons'

export default function Footer(props) {
  return (
    <div className="footer">
      <button onClick={props.handleLogout}>Logout</button>
      <div className="my-name">
        <FontAwesomeIcon icon={faCopyright} /> Liz Yrineo
      </div>
      <div className="social-icons">
        <FontAwesomeIcon className="facebook" icon={faFacebookSquare} />
        <FontAwesomeIcon className="instagram" icon={faInstagramSquare} />
        <FontAwesomeIcon className="twitter" icon={faTwitterSquare} />
      </div>
        
    </div>
  )
}
