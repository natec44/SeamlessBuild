import React from 'react';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import NotificationsPanel from './components/NotificationsPanel';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/notifications" element={<NotificationsPanel />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
