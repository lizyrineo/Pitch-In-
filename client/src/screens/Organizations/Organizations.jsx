import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
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
      <select defaultValue='default' onChange={selectItem}>
        <option disabled value='default'>Organizations</option>
        {organizations.map((organization) => (
          <option value={organization.id}>{ organization.org_name}</option>
        ))}
      </select>
    </div>
  );
}
