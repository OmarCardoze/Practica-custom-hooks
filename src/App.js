import React from 'react';

import './App.css';
import { useGetCountry } from './hooks/useGetCountry';
import Countries from './components/Countries'


const App = () => {

  const {data:contries, loading} = useGetCountry('Americas')

  return (
    <div className="container">
      {loading && 'Cargando'}
       <Countries
          countries={contries}
       />
    </div>
  );
}

export default App;