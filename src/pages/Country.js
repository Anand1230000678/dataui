import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Country() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
     
      const response = await axios.get('http://localhost:8080/data');
      
      setData(response.data);

      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {data.map((c, index) => (
            <tr data-index={index}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>Edit | Delete | View</td>
            </tr>
          ))
      }  

        </tbody>
      </table>
    </>
  )
}

export default Country
