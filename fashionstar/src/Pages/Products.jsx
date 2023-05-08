import React from 'react';
import { useState,useEffect } from "react";

const Products = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    let url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`
    
    setLoading(true);
    const root= `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`
    
    fetch(`${root}/books`)
    .then(res => res.json())
    .then(data =>{
      setBooks(data);
      setLoading(false);
    })
    .catch(error => console.error(error));
  },[]);

    
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      
    </div>
  );
};
  
export default Products;