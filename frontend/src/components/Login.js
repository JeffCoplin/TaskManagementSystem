import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

     
      if (response.status === 200) {
        alert('Inicio de sesión exitoso');
        console.log(response.data);

       
        onLogin();
      }
    } catch (error) {
      alert('Error al iniciar sesión');
      console.error(error);
    }
  };

  return (
    <div>
  <h1>Iniciar sesión</h1>
  <form id="login-form" onSubmit={handleSubmit}>
    <div>
      <label>Email:</label>
      <input
        id="login-email" // Identificador único
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
    <div>
      <label>Contraseña:</label>
      <input
        id="login-password" // Identificador único
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </div>
    <button id="login-submit" type="submit">Iniciar sesión</button>
  </form>
</div>

  );
}

export default Login;
