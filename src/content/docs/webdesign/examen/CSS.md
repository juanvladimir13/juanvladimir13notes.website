---
title: Examen de CSS
description: Ejercicios de CSS
---

### Ejercicio 1
> Dar estilo a un elemento **h1** con las siguientes propiedades, color blue, color de fondo gray, tamano de fuente 32px y alineado al centro

### Solucion
Archivo `index.html`
```html
<h1>Hola mundo</h1>
```
Archivo `base.css`
```css
h1 {
  color: blue;
  background-color: gray;
  font-size: 32px;
  text-align: center;
}
```

### Ejercicio 2
> Dar estilo a un elemento **p** con las siguientes propiedades, margenes 0px, tamano de fuente 24px, color de fondo gray y texto en mayusculas

### Solucion
Archivo `index.html`
```html
<p>Hola mundo</p>
```
Archivo `base.css`
```css
p {
  margin: 0px;
  font-size: 24px;
  background-color: gray;
  text-transform: uppercase;
}
```

### Ejercicio 3
> Dar estilo a un elemento **header** con las siguientes propiedades, alto 75px, ancho 320px, border radius de 16px y el color de fondo green

### Solucion
Archivo `index.html`
```html
<header> Hola mundo </header>
```
Archivo `base.css`
```css
header {
  height: 75px;
  width: 320px;
  border-radius: 16px;
  background-color: green;
}
```

### Ejercicio 4
> Utilizando un selector de **clase** llamado **fs-16**, aplicar las siguientes propiedades, margenes 0px, tamano de fuente 24px, color de fondo gray

### Solucion
Archivo `index.html`
```html
<p>Texto sin estilo</p>
<p class="fs-16">Texto con estilo</p>
```
Archivo `base.css`
```css
.fs-16 {
  margin: 0px;
  font-size: 24px;
  background-color: gray;
}
```

### Ejercicio 5
> Utilizando un selector de **ID** llamado **container-fluid**, aplicar las siguientes propiedades, color blue, altura de 320px, color de fondo gray y un border radius de 32px

### Solucion
Archivo `index.html`
```html
<main id="container-fluid"></main>
```
Archivo `base.css`
```css
.container {
  color: blue;
  height: 320px;
  background-color: gray;
  border-radius: 32px;
}
```