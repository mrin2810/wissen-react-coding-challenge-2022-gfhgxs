import React from 'react';
import { Route } from 'react-router/lib/components';
import Hello from './Hello';

export default function AppRoute() {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/dashboard" element={<Hello />} />
    </Routes>
  );
}
