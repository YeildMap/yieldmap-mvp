import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus('Error fetching API'));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>API Health Status: {status}</p>
    </div>
  );
}

export default Dashboard;
