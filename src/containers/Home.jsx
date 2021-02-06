import React from 'react';
import initialState from '../../initialState';
import Events from '../components/Events';



const Home = () => (
  <Events events={initialState.events} />
)

export default Home;