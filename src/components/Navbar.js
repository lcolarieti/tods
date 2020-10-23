import React, {useState} from 'react';
import Separator from './Separator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
  const {items} = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <button onClick={() => setIsActive(!isActive)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className={isActive ? 'in' : ''}>
          {
            items.map(item => <li key={item.label}>
              <a
                href={item.url}
                title={item.label}
              >
                {item.label}
              </a>
            </li>)
          }
        </ul>
        <Separator />
      </div>
    </div>
  );
}

export default Navbar;
