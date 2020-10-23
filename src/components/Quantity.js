import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'


const Quantity = (props) => {
  const {max, onChange, selected, title, error} = props;

  const handleUp = () => {
    selected + 1 <= max && onChange(selected + 1)
  };

  const handleDown = () => {
    selected - 1 >= 0 && onChange(selected - 1)
  };

  return (
    <div
      className="quantity"
    >
      <h4>{title}</h4>
      <div className={`selector ${error && 'error'}`}>
        <span
          className="value"
        >
          {selected}
        </span>
        <span
          className="value-arrow top"
          onClick={() => handleUp()}
        >
          <FontAwesomeIcon icon={faCaretUp} />
        </span>
        <span
          className="value-arrow bottom"
          onClick={() => handleDown()}
        >
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </div>

    </div>
  );
}

export default Quantity;