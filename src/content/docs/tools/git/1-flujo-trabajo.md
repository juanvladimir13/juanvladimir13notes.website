---
title: Flujo de Trabajo Básico
description: 'Conoce el flujo de trabajo básico en Git, repositorios locales y remotos'
head:
  - tag: meta
    attrs:
      property: og:title
      content: 'Flujo de Trabajo Básico'
  - tag: meta
    attrs:
      property: og:description
      content: 'Conoce el flujo de trabajo básico en Git, repositorios locales y remotos'
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
      content: 'Flujo de Trabajo Básico'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Conoce el flujo de trabajo básico en Git, repositorios locales y remotos'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---
### Estados de los Archivos (Ciclo de vida)

Además de conocer las áreas de trabajo, es importante entender los **estados** en los que puede estar un archivo durante el desarrollo de tu proyecto. El siguiente diagrama de secuencia detalla cómo cambian los estados mediante los comandos de Git:

```mermaid
sequenceDiagram
    participant Untracked as Untracked<br/>(Sin seguimiento)
    participant Unmodified as Unmodified<br/>(Sin modificar)
    participant Modified as Modified<br/>(Modificado)
    participant Staged as Staged<br/>(Preparado)

    Note over Untracked, Staged: Ciclo de vida de un archivo en el proyecto
    Untracked->>Staged: git add <archivo>
    Unmodified->>Modified: Editar el archivo
    Modified->>Staged: git add <archivo>
    Staged->>Unmodified: git commit
    Unmodified->>Untracked: Eliminar el archivo
```

Para utilizar Git eficazmente, es crucial entender cómo gestiona **los estados de los archivos**. Git tiene tres áreas principales donde los archivos pueden residir localmente, más un entorno remoto:

**Directorio de Trabajo (Working Directory):** Es el directorio local donde estás modificando tus archivos actualmente. Aquí es donde agregas, editas o eliminas código.

**Área de Preparación (Staging Area):** Es un área intermedia donde "agrupas" y preparas los cambios que formarán parte de tu próximo *commit*.

**Repositorio Local (Local Repository):** Es la base de datos local de Git (la carpeta `.git`). Una vez que haces un *commit*, los cambios se guardan aquí de manera permanente como un nuevo punto en la historia.

**Repositorio Remoto (Remote Repository):** Es el servidor (como GitHub, GitLab o Bitbucket) donde compartes tu código con el resto del equipo.

### Representación Gráfica

El siguiente diagrama ilustra cómo interactúan estas áreas y qué comandos se utilizan para mover los archivos entre ellas:

```mermaid
graph LR
    subgraph Local
        WD[Directorio de Trabajo<br/>Working Directory]
        SA[Área de Preparación<br/>Staging Area]
        LR[Repositorio Local<br/>Local Repository]
    end
    
    subgraph Remoto
        RR[(Repositorio Remoto<br/>Remote Repository)]
    end

    WD -- "git add" --> SA
    SA -- "git commit" --> LR
    LR -- "git push" --> RR
    RR -- "git pull / fetch" --> LR
    LR -- "git checkout / merge" --> WD
    
    style WD fill:#f9f9f9,stroke:#333,stroke-width:2px
    style SA fill:#e1f5fe,stroke:#03a9f4,stroke-width:2px
    style LR fill:#c8e6c9,stroke:#4caf50,stroke-width:2px
    style RR fill:#fff9c4,stroke:#fbc02d,stroke-width:2px
```

### Comandos Clave del Flujo

#### `git status`
Revisa el estado actual de los archivos (cuáles están modificados, cuáles están en el área de preparación, etc.).

Verifica en qué estado están los archivos
```bash
git status
```
Salida de ejemplo:
```bash
On branch main
Changes not staged for commit:
  modified:   index.html
```

#### `git add`
Mueve un archivo modificado desde el Directorio de Trabajo al Área de Preparación.

Agregar un archivo específico
```bash
git add index.html
```

Agregar todos los archivos modificados o nuevos
```bash
git add .
```

#### `git commit`
Toma los archivos del Área de Preparación y los guarda definitivamente en el Repositorio Local.

Guardar los cambios con un mensaje descriptivo
```bash
git commit -m "Añadir estructura inicial de la página de inicio"
```

#### `git push`
Envía los *commits* locales al Repositorio Remoto.

Subir los cambios a la rama principal (main) del repositorio remoto (origin)
```bash
git push origin main
```

#### `git pull`
Trae los cambios del Repositorio Remoto y los fusiona en tu Directorio de Trabajo actual.

Actualizar tu entorno local con los últimos cambios de la nube
```bash
git pull origin main
```
