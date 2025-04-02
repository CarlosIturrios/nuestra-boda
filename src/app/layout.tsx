// src/app/layout.tsx

// Este es el componente Layout, que actúa como el contenedor principal
// para toda la estructura de la página. Aquí se manejan los elementos
// comunes, como el encabezado, los componentes, y el cuerpo de la página.

'use client';  // Indica que este archivo es para el cliente (no se ejecuta en el servidor).

import React, { useEffect, useRef } from 'react';
import { CountdownProvider } from './context/CountdownContext'; // Importamos el contexto para la cuenta regresiva.
import Nav from './components/Nav'; // Importamos el componente de navegación.
import HomePage from './components/Page'; // Importamos la página principal.
import CuentaRegresiva from './components/CuentaRegresiva'; // Importamos el componente de cuenta regresiva.
import CompartiendoRecuerdos from './components/CompartiendoRecuerdos'; // Importamos el componente para compartir recuerdos.

import '../styles/globals.css'; // Importamos los estilos globales.
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importamos los iconos de FontAwesome para usarlos en la página.

const Layout: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5; // de 0.1 a 1.0
      const playAudio = () => {
        audio.play().catch((err) => console.log("Reproducción bloqueada por el navegador", err));
      };
      document.addEventListener('click', playAudio, { once: true });
    }
  }, []);

  return (
    // El componente <html> define el lenguaje para la página.
    <html lang="en">
      <head>
        {/* Configuramos el archivo manifest y el color de tema para el PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fff9bf" />
        {/* Establecemos el icono de la página */}
        <link rel="icon" href="/favicon.ico" />
        {/* Establecemos el titulo que aparecera en la pestaña del navegador */}
        <title>Nuestra Boda - Gloria y Carlos</title>

        {/* Meta descripción (opcional, mejora el SEO) */}
        <meta name="description" content="Bienvenidos a nuestra boda, una celebración especial entre Gloria y Carlos. Comparte tus recuerdos con nosotros." />
      </head>
      <body>
        <audio ref={audioRef} src="/audios/musica_de_fondo.mp3" loop />
        {/* El CountdownProvider proporciona el contexto de cuenta regresiva a sus componentes hijos */}
        <CountdownProvider>
          {/* El componente Nav es la barra de navegación de la página */}
          <Nav />
          {/* HomePage es el componente que contiene la portada */}
          <HomePage />
          {/* Secciones con el detalle de la boda */}
          <div id="page2" className="page2"></div>
          <div id="page3" className="page3"></div>
          <div id="page4" className="page4"></div>
          <div id="page5" className="page5"></div>
          <div id="page6" className="page6"></div>
          {/* El componente CuentaRegresiva muestra la cuenta atrás hacia el evento */}
          <CuentaRegresiva />
          {/* CompartiendoRecuerdos es el componente que permite redirigir al usuario a la funcionalidad de compartir recuerdos */}
          <CompartiendoRecuerdos />
        </CountdownProvider>
      </body>
    </html>
  );
};

export default Layout;
