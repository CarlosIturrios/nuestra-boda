// src/app/components/CompartiendoRecuerdos.tsx
import { useCountdown } from '../context/CountdownContext';

// Componente que muestra secciones para compartir recuerdos después del evento
const CompartiendoRecuerdos: React.FC = () => {
    // Obtiene el estado 'isEventReached' desde el contexto Countdown
    const { isEventReached } = useCountdown();
    const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL;
  
    return (
      <>
        {/* Sección de subida de recuerdos, visible solo si el evento ha ocurrido */}
        <div id="page7" className="page7 photos" hidden={!isEventReached}>
          <h1>Comparte tu experiencia con nosotros</h1>
          <p>Si tienes algún recuerdo de nuestra boda que desees compartir, no dudes en subirlo.</p>
          <a href={whatsappUrl} target="_blank" className="button">
            <i className="fas fa-upload"></i> Subir fotos o videos
          </a>
        </div>

        {/* Sección de galería, también visible solo si el evento ha ocurrido */}
        <div id="page8" className="page8 photos" hidden={!isEventReached}>
          <h1>Galería</h1>
        </div>
      </>
    );
};

export default CompartiendoRecuerdos;
