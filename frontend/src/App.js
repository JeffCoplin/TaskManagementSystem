import React, { useState } from 'react';
import KanbanBoard from './components/KanbanBoard'; 
import Register from './components/Register';
import Login from './components/Login';
import './general.css'; 

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

 
  const handleLogin = () => {
    setIsAuthenticated(true); 
  };

  const handleLogout = () => {
    setIsAuthenticated(false); 
  };

  return (
    <div className="App">
      <header>
        <h1>Task Management System</h1>
      </header>

      
      {!isAuthenticated ? (
        <section className="auth-section">
          <Register /> 
          <Login onLogin={handleLogin} /> 
        </section>
      ) : (
        <section className="kanban-section">
          <KanbanBoard /> 
          <button onClick={handleLogout}>Logout</button> 
        </section>
      )}
    </div>
  );
}

export default App;
