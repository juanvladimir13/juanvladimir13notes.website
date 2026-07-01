---
title: 5. Caso de estudio
description: 5. Caso de estudio
---
## Contacto de WhatsApp

### Vista de aplicacion
![Vista de aplicacion](./../../../../../assets/docs/flexbox/contact.jpg)

### Vista UX/UI
![Vista UX/UI](./../../../../../assets/docs/flexbox/design-contact-flex.png)

### Codigo HTML de la vista de la aplicacion

Agregar las siguientes lineas debajo de la etiqueta `nav`:

```html title="index.html" showLineNumbers
<header>
  <div id="avatar">
    <img src="." alt="logo" />
  </div>

  <h1>+591 71686105 (You)</h1>

  <div id="container">
    <section class="item-container">
      <img class="item-icon" src="." alt="." />
      <span class="item-text">juanvladimir13</span>
    </section>
    <section class="item-container">
      <img class="item-icon" src="." alt="." />
      <span class="item-text">Juan Vladimir</span>
    </section>
  </div>
</header>
```

```css title="app.css" showLineNumbers
#container {
  display: flex;
  justify-content: center;
  column-gap: 12px;
}

.item-icon {
  width: 24px;
  height: 24px;
}
```
### Resultado correcto 😎
![Resultado correcto](./../../../../../assets/docs/flexbox/contact-uno.png)

Alinear iconos con texto

```css title="app.css" showLineNumbers
.item-container {
  display: flex;
  align-items: center;
  column-gap: 8px;
}
```
### Resultado correcto 😎
![Resultado correcto](./../../../../../assets/docs/flexbox/contact-dos.png)

Estilos adiccionales

```css title="app.css" showLineNumbers
#avatar {
  text-align: center;
}

#avatar > img {
  width: 75px;
  height: 75px;
  border-radius: 50%;
}

h1 {
  text-align: center;
}
```

### Resultado correcto 😎
![Resultado correcto](./../../../../../assets/docs/flexbox/resultado-final.png)
