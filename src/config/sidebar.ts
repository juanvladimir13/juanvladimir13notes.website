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
          { autogenerate: { directory: 'programacion/material' } }
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
          { autogenerate: { directory: 'webdesign/material' } }
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
          {
            label: 'Django',
            collapsed: true, items: [{ autogenerate: { directory: 'webdesign/codelabs/django' } }],
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
          { autogenerate: { directory: 'database/material' } }
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
      { label: 'Avance de contenidos', link: '/tools' },
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
  }
];
