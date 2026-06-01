---
title: Estructura de archivos y directorios
description: Estructura de archivos y directorios
---

## Archivos y directorios
### Directorio actual y directorio superior

Toda carpeta tiene referencia al directorio actual y directorio superior

| Signo | Descripcion |
| --------- | ------------------- |
| `.`  | Directorio actual |
| `..`  | Directorio superior |

### Rutas absolutas

Es la ruta completa **desde la raíz del sistema de archivos** hasta un archivo o carpeta

```bash
cd /c/Users/Dev/Documents
cd /d/Materias/Informatica
```

### Rutas relativas

Es la ruta a un archivo o carpeta en **relación con el directorio actual** en el que te encuentras

**Ejemplo 1**. Estructura de carpetas/directorios

```bash
Users
└── Juan
    └── Docs
```

Ubicados en la carpeta `Users`, acceder a la carpeta `Docs` que esta dentro de la carpeta `Juan`

```bash
/c/Users
cd ./Juan/Docs 
```

**Ejemplo 2**. Estructura de carpetas/archivos
```bash
D
├── Docs
└── Mat
    └── Inf
```

Ubicados en la carpeta `Docs`, acceder a la carpeta `Inf` que esta dentro de la carpeta `Mat`

```bash
/d/Docs 
cd ../Mat/Inf
```
