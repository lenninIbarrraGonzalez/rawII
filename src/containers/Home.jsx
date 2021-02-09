import React from 'react';
import BannerHome from '../components/BannerHome';
import Films from '../components/Films'
import Search from '../components/Search';

const Home = () => (
  <>
    <Search />
    <BannerHome />
    <h1>Esto es el home</h1>
    <Films />
  </>
)

export default Home;