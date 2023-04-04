import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hackathon from './pages/Hackathon';
import Home from './pages/Home';
import HackathonList from './pages/Hackathon/List';

function App() {
  axios
    .get('db/app.json')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return (
    <div className="w-full overflow-hidden">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/hackathon/:slug" element={<Hackathon />} />
        <Route path="*" element={<HackathonList />} />
      </Routes>
    </div>
  );
}

export default App;
