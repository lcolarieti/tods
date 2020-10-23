import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


const Dropdown = (props) => {
  const {items, itemKey, placeholder, title, id, onChange, selected, error} = props;
  const [active, setActive] = useState(false);

  return (
    <div
      className="dropdown"
    >
      <h4>{title}</h4>
      <div
        className={`selector ${error && 'error'}`}
        onClick={() => setActive(!active)}
      >
        <span className="value">
          {
            selected ? selected[itemKey].toLowerCase() : <span className="placeholder">{placeholder}</span>
          }
        </span>
        <FontAwesomeIcon icon={faCaretDown} />
        <ul className={active ? 'active' : ''}>
          {
            items.map((item, i) => (
              <li
                key={id ? item[id] : i}
                onClick={() => {
                  setActive(false);
                  onChange(item);
                }}
              >
                {item[itemKey].toLowerCase()}
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  );
}

export default Dropdown;