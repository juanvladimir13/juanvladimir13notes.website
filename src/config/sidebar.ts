export const sidebar = [
  {
    label: 'Programación',
    collapsed: true,
    items: [
      { label: 'Avance de contenidos', link: '/programacion' },
      {
        label: 'Material de apoyo',
        collapsed: false,
        items: [
          { label: 'Creación de archivos y carpetas', link: '/programacion/material/creacion-de-archivos-y-carpetas/' },
          { label: 'Lenguaje Typescript', link: '/programacion/material/lenguaje-typescript/' },
        ],
      },
      {
        label: 'Codelabs',
        collapsed: false,
        items: [
          { label: 'Contador HTML JS', link: '/programacion/codelabs/contador-html-js/' },
          { label: 'Estructuras de control', link: '/programacion/codelabs/estructuras-de-control/' },
        ],
      },
      {
        label: 'Modelos de examen',
        collapsed: false,
        items: [
          { label: 'Creación de archivos y carpetas', link: '/programacion/examen/creacion-de-archivos-y-carpetas/' },
          { label: 'Declaración de funciones', link: '/programacion/examen/declaracion-de-funciones/' },
          { label: 'Estructura de control if', link: '/programacion/examen/estructura-de-control-if/' },
          { label: 'Preguntas propuestas de funciones', link: '/programacion/examen/preguntas-propuestas-de-funciones/' },
          { label: 'Array de datos', link: '/programacion/examen/array-de-datos/' },
        ],
      },
    ],
  },
  {
    label: 'Base de datos',
    collapsed: true,
    items: [
      { label: 'Avance de contenidos', link: '/database' },
      {
        label: 'Material de apoyo',
        collapsed: false,
        items: [
          { label: 'Comandos de sesión interactiva', link: '/database/material/comandos-de-sesion-interactiva/' },
          { label: 'Creación de tablas y registro de datos', link: '/database/material/creacion-de-tablas-y-registro-de-datos/' },
        ],
      },
      {
        label: 'Codelabs',
        collapsed: false,
        items: [
          { label: 'CRUD DDL Y DML', link: '/database/codelabs/crud-ddl-y-dml/' },
        ],
      },
    ],
  },
  {
    label: 'Web design',
    collapsed: true,
    items: [
      { label: 'Avance de contenidos', link: '/webdesign' },
      {
        label: 'Material de apoyo',
        collapsed: false,
        items: [
          { label: 'Lenguaje PHP', link: '/webdesign/material/lenguaje-php/' },
          { label: 'Propiedades CSS', link: '/webdesign/material/propiedades-css/' },
        ],
      },
      {
        label: 'Codelabs',
        collapsed: false,
        items: [

        ],
      },
      {
        label: 'Modelos de examen',
        collapsed: false,
        items: [
          { label: 'CSS', link: '/webdesign/examen/css/' },
          { label: 'HTML y CSS', link: '/webdesign/examen/html-y-css/' },
          { label: 'Funciones PHP', link: '/webdesign/examen/funciones-php/' },
        ],
      },
    ],
  },
];

// Puedes personalizar los items agregando propiedades como:
// - badge: { text: 'Nuevo', variant: 'success' }  // Para insignias ('note', 'danger', 'success', 'caution', 'tip')
// - collapsed: true o false                       // Para colapsar o expandir grupos por defecto
// - attrs: { target: '_blank', rel: 'noopener' }  // Atributos HTML adicionales para los enlaces
