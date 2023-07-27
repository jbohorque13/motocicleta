import React from 'react';

export default function Root () {
  
  const handleClick = React.useCallback(() => {
    console.log('log');
    window.location.href = '/game'
  }, []);

  return (
    <>
      <h1>Bienvenido</h1>
      <div className="main">
        <button onClick={() => handleClick()}>
          <p>
            Jugar
          </p>
        </button>
        <button>
          <p>
            Menu
          </p>
        </button>
      </div>
    </>
  )
}