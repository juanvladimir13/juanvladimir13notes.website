---
title: Creacion de archivos y carpetas
description: Creacion de archivos y carpetas
---

### Ingresar a la consola de comandos (CMD)

1. Presionar la tecla `Windows`
2. Escribir `git bash` y presionar `Enter`

### Crear una carpeta

Este comando crea una carpeta `estudiante` en el directorio actual

```bash
mkdir estudiante
```

::: info
El comando se ejecuta sin mostrar mensajes en pantalla
:::

::: error
Si la carpeta `estudiante` ya existe, se mostrará un mensaje de error
:::

### Acceder a una carpeta

Permite ingresar a la carpeta `estudiante`

```bash
cd estudiante
```
::: success
El comando se ejecuta sin mostrar mensajes en pantalla
:::

::: error
Si el nombre de la carpeta está mal escrito o no existe, se mostrará un mensaje de error
:::

### Crear un archivo de texto plano

Crea un archivo vacío con el nombre especificado. Por ejemplo, `nombre-archivo.txt`

```bash
touch nombre-archivo.txt
```

::: success
El comando se ejecuta sin mostrar mensajes en pantalla
:::

::: error
Si el archivo ya existe o el comando está mal escrito, se mostrará un mensaje de error
:::

### Listado de archivos y directorios

Muestra un listado de todos los archivos y carpetas en el directorio actual.

```bash
ls
```

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

#### Ejemplo 1
Estructura de carpetas/directorios

```
Users
└── Juan
    └── Docs
```

Ubicados en la carpeta `Users`, acceder a la carpeta `Docs` que esta dentro de la carpeta `Juan`

```bash
/c/Users
cd ./Juan/Docs 
```

#### Ejemplo 2
Estructura de carpetas/archivos
```
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

[Ejercicios de examen](https://bthsanjulian.website:8021/index.php/s/YwMtCyxPgnR9p5m)
