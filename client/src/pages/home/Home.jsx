import React, { useEffect } from 'react';

import Navbar from '../../components/layouts/navbar/Navbar';
import { menuItems } from '../../data/MenuItems';
import Layout from '../../components/layouts/Layout';

const Home = () => {
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:5050/users`); // Cambia la ruta aquí
  //       if (!response.ok) {
  //         const errorMessage = await response.text();
  //         throw new Error(`Network response was not ok: ${errorMessage}`);
  //       }
  //       const data = await response.json();
  //       console.log('Lista de usuarios:', data);
  //     } catch (error) {
  //       console.error('Hubo un problema al obtener la lista de usuarios:', error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  // return <Navbar menuItems={menuItems} />;
  return <Layout />;
  
};

export default Home;
