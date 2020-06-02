import React from 'react';

export default function About() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '75vh',
        fontSize: '30px',
        fontWeight: 'lighter',
      }}
    >
      <p>This app is used to search github users</p>
      <p>Version: 1.0.0</p>
      <p>Made with ❤ by Ishan Varshney</p>
    </div>
  );
}
