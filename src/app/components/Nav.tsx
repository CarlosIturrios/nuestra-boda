// src/app/components/Nav.tsx
// Este es el componente Nav, que representa el menu de navegacion.
'use client';

import React, { useState, useEffect } from 'react';
import { useCountdown } from '../context/CountdownContext';

const Nav: React.FC = () => {
  // Accede al valor de isEventReached desde el contexto CountdownContext.
  // Esto se utiliza para determinar si el evento ha llegado y, por lo tanto, mostrar enlaces específicos en el menú.
  const { isEventReached } = useCountdown();
  // Estado para controlar la visibilidad del menú de navegación (toggle).
  const [isNavVisible, setNavVisible] = useState(false);
  // Función para alternar la visibilidad del menú de navegación.
  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  // useEffect se usa para manejar el cierre del menú cuando el usuario hace clic fuera del menú.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Obtiene los elementos del menú y el botón de alternar menú.
      const nav = document.querySelector(".nav");
      const menuToggle = document.querySelector(".menu-toggle");
      // Si el clic ocurre fuera del menú y del botón de alternar, se cierra el menú.
      if (nav && menuToggle && !nav.contains(event.target as Node) && !menuToggle.contains(event.target as Node)) {
        setNavVisible(false);
      }
    };

    // Añade el evento de clic al documento para detectar clics fuera del menú.
    document.addEventListener("click", handleClickOutside);

    // Limpieza del evento al desmontar el componente para evitar fugas de memoria.
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* 
        Botón para alternar la visibilidad del menú de navegación.
        Este botón se muestra en dispositivos móviles y cambia la clase 'show' para mostrar u ocultar el menú.
      */}
      <div className="menu-toggle" onClick={toggleNav}>
        <i className="fas fa-bars"></i>
      </div>
      {/* 
        Menú de navegación: 
        Si el estado isNavVisible es true, se agrega la clase 'show' para hacer visible el menú.
        De lo contrario, el menú permanece oculto.
      */}
      <div className={`nav ${isNavVisible ? 'show' : ''}`}>
        {/* Enlaces de navegación a diferentes secciones de la página */}
        <a href="#home">Inicio</a>
        <a href="#page2">Familiares</a>
        <a href="#page3">Nosotros</a>
        <a href="#page4">Fecha</a>
        <a href="#page5">Cronograma</a>
        <a href="#page6">Recepción</a>
        <a href="#cuentaRegresiva">Cuenta regresiva</a>
        <a href="#page7" className="photos" hidden={!isEventReached}>Recordemos juntos</a>
        <a href="#page8" className="photos" hidden={!isEventReached}>Galería</a>
      </div>
    </>
  );
};

export default Nav;
