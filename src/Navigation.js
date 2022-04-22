import { useState, useEffect } from 'react';

const Navigation = function () {
  const [theme, setTheme] = useState('dark-theme');

  const togglehandler = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.classList = theme;
  }, [theme]);
  return (
    <nav>
      <div className='nav-flex'>
        <h1 className='site-title'>Overreacted</h1>
        <h3 className='btn' onClick={togglehandler}>
          Toggle
        </h3>
      </div>
      <div className='description'>
        <img
          src='https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg'
          alt='dan abramov'
        />
        <div className='description-text'>
          <p>
            Personal blog by{' '}
            <a href='#' className='name'>
              {' '}
              Dan Abramov.
            </a>
          </p>
          <p>I explain with words and code.</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
