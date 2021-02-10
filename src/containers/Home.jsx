import React from 'react';
import BannerHome from '../components/BannerHome';
import Films from '../components/Films'
import Search from '../components/Search';

const Home = () => (
  <>
    <Search />
    <BannerHome />

    <Films />
  </>
)

export default Home;