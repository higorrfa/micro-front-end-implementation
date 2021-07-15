import React from 'react';
import Main from './components/Main';

import './App.css';

export default function App({ name }) {
  return (
    <>
      <h1>{name}</h1>
      <Main />
    </>
  )
}
