import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Dropdown from "react-dropdown";
import { getAllOrganizations } from "../../services/organizations";

export default function Organizations(props) {
  const [organizations, setOrganizations] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const fetchOrganizations = async () => {
      const orgData = await getAllOrganizations();
      setOrganizations(orgData);
    };
    fetchOrganizations();
  }, []);

  const options = organizations.map((organization) => {
    return { label: organization.org_name, value: organization.id };
  });
  function selectItem(e) {
    
    history.push(`/organizations/${e.target.value}/opportunities`);
  }
  return (
    <div>
      {/* <Dropdown
        options={options}
        type="button"
        placeholder="Select an Organization"
        onChange={selectItem}
      ></Dropdown> */}
      <select defaultValue='default' onChange={selectItem}>
        <option disabled value='default'>Organizations</option>
        {organizations.map((organization) => (
          <option value={organization.id}>{ organization.org_name}</option>
        ))}
      </select>
      {/* {organizations.map(organization => {
        
        return <div key={organization.id}>
          <p>{organization.org_name}</p>
          <Link to={`/organizations/${organizations.id}/select`}></Link>
        </div>
      })} */}

      {/* <Link to="/opportunities">Opportunities</Link>
      <button>Select</button> */}
    </div>
  );
}
