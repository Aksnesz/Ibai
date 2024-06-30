// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import AuctionsList from './components/AuctionsList';
import AuctionDetails from './components/AuctionDetails';
import CreateAuction from './components/CreateAuction';
import EarningsChart from './components/EarningsChart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auctions" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auctions" element={<AuctionsList />} />
        <Route path="/auction/:id" element={<AuctionDetails />} />
        <Route path="/create-auction" element={<CreateAuction />} />
        <Route path="/earnings" element={<EarningsChart />} />
      </Routes>
    </Router>
  );
};

export default App;
