// Home.jsx
import React, { useState, useEffect } from 'react';

const Home = () => {
  // 1. Estado para almacenar el total de segundos transcurridos
  const [totalSeconds, setTotalSeconds] = useState(0);

  // Estado para controlar si el contador está corriendo (iniciado) o en pausa
  const [isRunning, setIsRunning] = useState(false);

  // 2. useEffect con setInterval para actualizar el contador cada segundo
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        // Se incrementa el total de segundos
        setTotalSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    // Limpiar el intervalo en caso de detenerse o al desmontar el componente
    return () => clearInterval(intervalId);
  }, [isRunning]);

  // 3. Convertir totalSeconds a horas, minutos y segundos
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Función para formatear los números con dos dígitos (por ejemplo, "01")
  const formatTime = (time) => time.toString().padStart(2, '0');

  // 4. Renderizado usando componentes de Bootstrap
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contador de Tiempo</h1>

      {/* Área que muestra el contador */}
      <div className="d-flex justify-content-center align-items-center mb-4">
        <span className="display-4">
          {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
        </span>
      </div>

      {/* Botones para controlar el contador */}
      <div className="d-flex justify-content-center">
        <button 
          className="btn btn-success m-2"
          onClick={() => setIsRunning(true)}
        >
          Iniciar
        </button>
        <button 
          className="btn btn-warning m-2"
          onClick={() => setIsRunning(false)}
        >
          Pausar
        </button>
        <button 
          className="btn btn-danger m-2"
          onClick={() => {
            setIsRunning(false);
            setTotalSeconds(0);
          }}
        >
          Resetear
        </button>
      </div>
    </div>
  );
};

export default Home;