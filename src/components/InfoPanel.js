import React, {useEffect, useRef, useState} from 'react';


const InfoPanel = (props) => {
  const {title, description, time} = props;
  const [show, setShow] = useState(false);

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }
  const prevTime = usePrevious(time);

  useEffect(() => {
    (time !== prevTime && !show) && setShow(true)
    setTimeout(() => setShow(false), 2000)

    // eslint-disable-next-line
  }, [title, description, time]);

  return (
    <div
      className={`info-panel ${show ? 'in' : ''}`}
    >
      <h4 title={title}>
        {title}
      </h4>
      <p title={description}>
        {description}
      </p>
    </div>
  );
}

export default InfoPanel;