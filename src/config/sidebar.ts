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
          { label: 'Estructura de archivos y directorios', link: '/programacion/material/archivos-directorios/' },
          { label: 'Creación de archivos y directorios', link: '/programacion/material/creacion-de-archivos-carpetas/' },
          { label: 'Lenguaje Typescript', link: '/programacion/material/lenguaje-typescript/' },
        ],
      },
      {
        label: 'Codelabs',
        collapsed: true,
        items: [
          {
            label: 'Contador de Likes',
            collapsed: true, items: [{ autogenerate: { directory: 'programacion/codelabs/contador-likes' } }],
          },
          {
            label: 'Funciones',
            collapsed: true, items: [{ autogenerate: { directory: 'programacion/codelabs/funciones' } }],
          },
        ],
      },
      {
        label: 'Modelos de examen',
        collapsed: true,
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
        collapsed: true,
        items: [
          {
            label: 'Maquetacion HTML y CSS',
            collapsed: true, items: [{ autogenerate: { directory: 'webdesign/codelabs/maquetacion-html-css' } }],
          },
        ],
      },
      {
        label: 'Modelos de examen',
        collapsed: true,
        items: [
          { label: 'CSS', link: '/webdesign/examen/css/' },
          { label: 'HTML y CSS', link: '/webdesign/examen/html-y-css/' },
          { label: 'Funciones PHP', link: '/webdesign/examen/funciones-php/' },
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
        collapsed: true,
        items: [
          {
            label: 'DDL Y DML',
            collapsed: true,
            items: [{ autogenerate: { directory: '/database/codelabs/ddl-dml' } }],
          },
        ],
      },
    ],
  }
];
// Puedes personalizar los items agregando propiedades como:
// - badge: { text: 'Nuevo', variant: 'success' }  // Para insignias ('note', 'danger', 'success', 'caution', 'tip')
// - collapsed: true o false                       // Para colapsar o expandir grupos por defecto
// - attrs: { target: '_blank', rel: 'noopener' }  // Atributos HTML adicionales para los enlaces
