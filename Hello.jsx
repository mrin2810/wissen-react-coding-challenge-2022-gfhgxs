import React, { useEffect } from 'react';

export default ({ name }) => {
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const apiUrl = 'https://reqres.in/api/unknown';
    const myHeaders = {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    };

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    const fetchUrl = async () => {
      const data = await fetch(apiUrl, requestOptions);
      const res = await data.json();
      console.log(res.data);
    };

    fetchUrl();
  }, []);

  return <h1>Hello {name}!</h1>;
};
