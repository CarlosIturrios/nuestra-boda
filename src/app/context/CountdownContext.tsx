// src/app/context/CountdownContext.tsx
// Este es el contexto de la cuenta regresiva, que representa el codigo para actualizar cuenta regresiva y validar/ocultar/mostrar algunos componentes que dependen de esta cuenta regresiva.
'use client';

import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Definición de los tipos para el contexto Countdown
interface CountdownContextType {
  isEventReached: boolean; // Indica si el evento ya ha llegado
  timer: string; // El valor de la cuenta regresiva
}

// Propiedades del proveedor del contexto, específicamente los hijos que se pasarán al proveedor
interface CountdownProviderProps {
  children: ReactNode;
}

// Se crea el contexto Countdown, el valor por defecto es 'undefined'
const CountdownContext = createContext<CountdownContextType | undefined>(undefined);

// Proveedor del contexto Countdown, que envuelve a los componentes hijos y les proporciona los valores del contexto
export const CountdownProvider: React.FC<CountdownProviderProps> = ({ children }) => {
  const [timer, setTimer] = useState(''); // Estado para almacenar el valor de la cuenta regresiva
  const [isEventReached, setIsEventReached] = useState(false); // Estado para saber si el evento ha llegado

  useEffect(() => {
    // Fecha objetivo para la cuenta regresiva (día y hora del evento)
    const fechaObjetivo = new Date('November 22, 2025 17:00:00 GMT-7').getTime();

    // Función para actualizar la cuenta regresiva cada segundo
    const actualizarCuentaRegresiva = () => {
      const ahora = new Date().getTime(); // Obtiene la hora actual
      const diferencia = fechaObjetivo - ahora; // Calcula la diferencia entre la fecha objetivo y la actual

      if (diferencia > 0) {
        // Si la diferencia es positiva, actualiza la cuenta regresiva
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24)); // Días restantes
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Horas restantes
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60)); // Minutos restantes
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000); // Segundos restantes

        // Actualiza el estado del temporizador con el formato correcto
        setTimer(`${dias} ${dias === 1 ? 'día' : 'días'}, ${horas} ${horas === 1 ? 'hora' : 'horas'}, ${minutos} ${minutos === 1 ? 'minuto' : 'minutos'}, ${segundos} ${segundos === 1 ? 'segundo' : 'segundos'}`);
        setIsEventReached(false); // El evento aún no ha llegado
      } else {
        // Si la diferencia es negativa o 0, el evento ya ha llegado
        setTimer("¡El gran día ha llegado! 🎉");
        setIsEventReached(true); // Indica que el evento ya ha ocurrido
      }
    };

    // Establece un intervalo para actualizar la cuenta regresiva cada segundo
    const interval = setInterval(actualizarCuentaRegresiva, 1000);

    // Ejecuta inmediatamente la función para mostrar el valor inicial
    actualizarCuentaRegresiva();

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []); // El efecto solo se ejecuta una vez cuando el componente se monta

  // Proporciona el valor del contexto (isEventReached y timer) a los componentes hijos
  return (
    <CountdownContext.Provider value={{ isEventReached, timer }}>
      {children}
    </CountdownContext.Provider>
  );
};

// Hook personalizado para consumir el contexto Countdown
export const useCountdown = (): CountdownContextType => {
  // Accede al contexto Countdown
  const context = useContext(CountdownContext);

  // Si el contexto no está disponible (probablemente porque el hook se usa fuera del proveedor), lanza un error
  if (!context) {
    throw new Error('useCountdown debe ser usado dentro de CountdownProvider');
  }

  // Retorna el valor del contexto
  return context;
};
