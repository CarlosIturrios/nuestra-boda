// src/app/components/CuentaRegresiva.tsx
'use client';

import { useCountdown } from '../context/CountdownContext';

const CuentaRegresiva = () => {
  // Obtiene el valor del temporizador (timer) desde el contexto CountdownContext.
  // Este valor es el que se va a mostrar en la interfaz como la cuenta regresiva.
  const { timer } = useCountdown();

  return (
    <div id="cuentaRegresiva" className="cuentaRegresiva">
      {/* Título que indica que esta sección es la cuenta regresiva */}
      <h1>Cuenta Regresiva</h1>

      {/* Muestra el valor del temporizador en un tamaño grande */}
      {/* El temporizador se actualiza automáticamente en tiempo real gracias al contexto */}
      <h1 id="timer" style={{ fontSize: '80px' }}>{timer}</h1>
    </div>
  );
};

export default CuentaRegresiva;
