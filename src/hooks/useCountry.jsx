'use client'
import { useState, useEffect } from 'react';

export function useCountryData () {
  const [countries, setCountries] = useState([]);
  const apiUrl = 'https://restcountries.com/v3.1/all'; 

  useEffect(() => {
fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
       setCountries(data)
       
      })
      .catch((error) => console.error('Error fetching data: ', error));
  },[]);

  return {
    country : countries
  };
};


