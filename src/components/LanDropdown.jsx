import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropdownItemTags() {
  return (
    <DropdownButton variant="Secondary" id="dropdown-item-button" title="English">
      <Dropdown.Item as="button">English</Dropdown.Item>
      <Dropdown.Item as="button">French</Dropdown.Item>
      <Dropdown.Item as="button">Spanish</Dropdown.Item>
    </DropdownButton>
    
  );
}

export default DropdownItemTags;