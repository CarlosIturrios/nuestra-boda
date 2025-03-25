// src/app/page.tsx
import Layout from './layout';

// Este es el componente principal de la página, donde se renderiza el contenido de la página.
const Page: React.FC = () => {
    return (
        // Renderizamos el componente Layout que maneja el diseño de la página.
        <Layout />
    );
};

// Exportamos el componente Page para que pueda ser utilizado en otras partes de la aplicación.
export default Page;
