# Portafolio de Daniel Castañeda Tovar - React.js + Bootstrap

Portafolio personal desarrollado con **React.js** y **Bootstrap**, siguiendo la actividad
"Creación de un Portafolio Web con React.js y Bootstrap" del programa Análisis y
Desarrollo de Software (ADSO).

> Proyecto construido con **Create React App** (`react-scripts`), sin Vite, como lo permite
> la actividad. El diseño replica la imagen de referencia: navbar morado, tarjetas de
> habilidades, proyectos, recomendaciones y formulario.

## Tecnologías

- React 18 (componentes funcionales, props y estado)
- Bootstrap 5 y React-Bootstrap
- Bootstrap Icons
- Create React App (`react-scripts`)

## Cómo ejecutar el proyecto

```bash
npm install
npm start
```

La aplicación se abre en `http://localhost:3000`.

Para generar la versión de producción:

```bash
npm run build
```

## Estructura de componentes

```
src/
  components/
    Header.jsx                     -> Navbar con nombre, contacto y navegación
    Hero.jsx                       -> Presentación "Hi, I'm ..." con avatar y texto
    SkillsSection.jsx              -> Cuadrícula de habilidades
    SkillCard.jsx                  -> Tarjeta individual de habilidad (Card)
    ProjectsSection.jsx            -> Lista de proyectos
    ProjectItem.jsx                -> Proyecto individual (título + descripción)
    RecommendationsSection.jsx     -> Cuadrícula de recomendaciones
    RecommendationCard.jsx         -> Tarjeta individual de recomendación (Card)
    LeaveRecommendationForm.jsx    -> Formulario para dejar una recomendación (Form)
    Footer.jsx                     -> Botón flotante "scroll to top"
  data/
    portfolioData.js               -> Perfil, habilidades, proyectos y recomendaciones
  assets/
    avatar.svg                     -> Avatar del perfil
  App.jsx                          -> Orquesta todas las secciones y pasa los datos por props
  index.js                         -> Punto de entrada de React
  index.css                        -> Variables globales y estilos base
  App.css                          -> Estilos personalizados del portafolio
public/
  index.html                       -> Documento HTML principal
  favicon.svg                      -> Icono de la pestaña
```

## Funcionalidad

- Navegación por anclas con desplazamiento suave.
- Diseño responsivo con el sistema de grid de Bootstrap.
- Habilidades y proyectos renderizados desde datos mediante `props`.
- Formulario controlado que agrega nuevas recomendaciones al estado de `App`.
- Botón para volver al inicio de la página.

## Autor

Daniel Castañeda Tovar
