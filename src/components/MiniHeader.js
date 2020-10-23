import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const MiniHeader = () => {

  const [collapsed, setCollapse] = useState(false);

  const collapseMiniHeader = (e) => {
    e.preventDefault();
    setCollapse(true);
  }

  return (
    <div className={`mini-header ${collapsed && 'collapsed'}`}>
      <div className="container">
        <span title="start selling your products or buy them from anywhere!">
          start selling your products or buy them from anywhere!
        </span>
        <button
          onClick={(e) => collapseMiniHeader(e)}
          title="Close"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
}

export default MiniHeader;
