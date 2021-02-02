
import './Spotlight.css';
import Organizations from '../Organizations/Organizations';
import CarouselComponentLa from '../Carousel/CarouselComponentLa'


export default function Spotlight(props) {
  const organization = {
    "org_name": "Luvin Arms Animal Sanctuary",
    "org_link": "https://www.luvinarms.org/",
    "org_phone": 720,
    "org_image": "https://www.luvinarms.org/wp-content/uploads/2021/01/Circle-Ahimsa-Final.png",
    "org_description": "Luvin' Arms is a nonprofit animal sanctuary for abused or neglected farmed animals.  They provide lifelong social, emotional and cognitive care to the animals they rescue.  Residents include cows, chickens, turkeys, ducks, goats, pigs, horses and sheep.  One of the many ways to get involved is to clean pens while spending time with the animals.  Donations are also accepted."
  }
  return (
    <div>
      
        <div className='spotlight'>
        <h1>This month's spotlight</h1>
        <h2 className="org_name">{organization.org_name}</h2>
        <h4 className="org_link">{organization.org_link}</h4>
        <h4 className="org_description">{organization.org_description}</h4>
      <CarouselComponentLa />

        </div>
      
    </div>
  )
}
