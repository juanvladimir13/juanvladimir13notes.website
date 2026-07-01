---
title: Propiedades CSS
description: Propiedades basicas de CSS

head:
  - tag: meta
    attrs:
      property: og:title
      content: 'Propiedades CSS'
  - tag: meta
    attrs:
      property: og:description
      content: 'Propiedades basicas de CSS'
  - tag: meta
    attrs:
      property: og:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
  - tag: meta
    attrs:
      property: og:image:width
      content: '1200'
  - tag: meta
    attrs:
      property: og:image:height
      content: '630'
  - tag: meta
    attrs:
      property: og:locale
      content: 'es_BO'
  - tag: meta
    attrs:
      property: og:type
      content: 'article'
  - tag: meta
    attrs:
      property: twitter:card
      content: 'summary_large_image'
  - tag: meta
    attrs:
      property: twitter:title
      content: 'Propiedades CSS'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Propiedades basicas de CSS'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---

### Color y fondo

| Propiedad | Descripcion |
| --- | ---- |
| color | Color de texto |
| background-color | Color de fondo |

#### Ejemplo
```css
body {
  color: darkgreen;
}

h1 {
  background-color: gainsboro;
}
```

### Fuente
| Propiedad | Descripcion |
| --- | ---- |
|font-size | Tamaño de la fuente|
|font-family | Familias de fuentes|
|font-style | Estilo de la fuente|

#### Ejemplo
```css
h1 {
  font-size: 32px;
  font-family: Arial;
  font-style: italic;
}
```

### Texto
| Propiedad | Descripcion |
| --- | ---- |
|text-align | Alineamiento del texto |
|text-transform |Transformación a mayúsculas / minúsculas |
|vertical-align | Alineación vertical |


#### Ejemplo
```css
h1 {
  text-align: center;
  text-transform: uppercase;
  vertical-align: baseline;
}
```

### Margenes
| Propiedad | Descripcion |
| --- | ---- |
| margin  |  Ancho de los margenes |
| padding | Tamaño del relleno|
| border-radius | Curvatura del borde|

#### Ejemplo resumido
```css
h1 {
  margin: 16px;
  padding: 8px;
  border-radius: 16px;
}
```

#### Ejemplo extendido
```css
h1 {
  margin: 16px 10px 8px 5px;
  padding: 8px 16px 4px 16px;
  border-radius: 32px 20px 40px 16px;
}
```
#### Ejemplo extendido detallado
```css
h1 {
  margin-top: 16px;
  margin-right: 10px;
  margin-top: 8px;
  margin-left: 5px;

  padding-top: 8px;
  padding-right: 16px;
  padding-bottom: 4px;
  padding-left: 16px;
  
  border-top-left-radius: 32px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 16px;
}
```

### Tamaño de elementos
| Propiedad | Descripcion |
| --- | ---- |
|height | Establece el alto del área de contenido de un elemento|
|min-height | Establece el alto mínimo que debe tener un elemento|
|max-height | Establece el alto máximo que puede tener un elemento|
|width | Establece el ancho del área de contenido de un elemento|
|min-width | Establece el ancho mínimo que debe tener un elemento|
|max-width | Establece el ancho máximo que puede tener un elemento|

#### Ejemplo
```css
h1 {
  width: 450px;
  min-width: 320px;
  max-width: 500px;

  height: 50px;
  min-height: 40px;
  max-height: 75px;
}
```

> Fuentes:
> https://carontestudio.com/blog/listado-de-propiedades-css/
> https://www.eniun.com/resumen-tabla-propiedades-css-valores/
> https://lenguajecss.com/css/introduccion/guia-css/
> https://www.mclibre.org/consultar/htmlcss/css/css-propiedades.html