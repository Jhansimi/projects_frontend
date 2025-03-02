import React, { useContext } from 'react';
import  ThemeContext  from './context/ThemeContexts';

const Title = ({ name, title }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1
          className={
            theme
              ? 'text-capitalize font-weight-bold text-light'
              : 'text-capitalize font-weight-bold text-dark'
          }
        >
          {name}{' '}
          <strong
            className={theme ? 'text-primary' : 'text-blue'}
          >
            {title}
          </strong>
        </h1>
      </div>
    </div>
  );
};

export default Title;
