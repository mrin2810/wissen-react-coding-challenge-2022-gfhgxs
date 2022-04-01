import React, { useEffect, useState } from 'react';

export default ({ name }) => {
  const [userData, setUserData] = useState([]);
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
      setUserData(res.data);
    };

    fetchUrl();
  }, []);

  return (
    <React.Fragment>
      <h1>Hello {name}!! </h1>
      {userData.length && (
        <table border={1} cellPadding={3} cellSpacing={0}>
          <tr>
            <th>Name</th>
            <th>Year</th>
          </tr>
          {userData.map((user, index) => {
            return (
              <tr key={index}>
                <td style={{ color: user.color, fontWeight: bold }}>
                  {user.name}
                </td>
                <td style={{ color: user.color, fontWeight: bold }}>
                  {user.year}
                </td>
              </tr>
            );
          })}
        </table>
      )}
    </React.Fragment>
  );
};
