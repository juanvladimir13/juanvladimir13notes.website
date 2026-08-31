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
          {
            label: 'Array',
            collapsed: true, items: [{ autogenerate: { directory: 'programacion/codelabs/array' } }],
          },
        ],
      },
      {
        label: 'Modelos de examen',
        collapsed: true, items: [{ autogenerate: { directory: 'programacion/examen' } }],
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
          {
            label: 'Flexbox CSS',
            collapsed: true, items: [{ autogenerate: { directory: 'webdesign/codelabs/flexbox-css' } }],
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
  },
  {
    label: 'Herramientas',
    collapsed: true,
    items: [
      { label: 'Inicio', link: '/tools' },
      {
        label: 'Contenidos',
        collapsed: false,
        items: [
          {
            label: 'Git',
            collapsed: true,
            items: [{ autogenerate: { directory: 'tools/git' } }],
          },
          {
            label: 'OpenCode',
            collapsed: true,
            items: [{ autogenerate: { directory: 'tools/opencode' } }],
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
