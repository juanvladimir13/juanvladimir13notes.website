---
title: '2. Crear proyecto Django'
description: 'Crear proyecto Django'
---

```bash
django-admin startproject project_name .
```

:::note
 **Nota:** Reemplazar **"project_name"** por el nombre del proyecto que se esta creando
:::

## Abrir el proyecto con VS Code
```bash
code .
```

## Configuraciones

Editar el archivo `settings.py`

### Configurar idioma, zona horaria, formato de fecha y moneda
```python title="settings.py"
LANGUAGE_CODE = 'es'
TIME_ZONE = 'America/La_Paz'

DATE_FORMAT = 'd/m/Y'
DATE_INPUT_FORMATS = ['%d/%m/%Y']

USE_THOUSAND_SEPARATOR = False
DECIMAL_SEPARATOR = '.'

CURRENCY_SYMBOL = 'Bs.'
```

### Verificar que el proyecto no tenga errores
```bash
python manage.py check
```

### Crear el modulo principal del sistema

```bash
django-admin startapp modulo_nombre
```

:::note
**Nota:** Reemplazar **"modulo_nombre"** por el nombre del modulo que se esta creando
:::

### Registrar el modulo en el archivo `settings.py`

```python
INSTALLED_APPS = [
    'modulo_nombre',
]
```

:::note
**Nota:** Reemplazar **"modulo_nombre"** por el nombre del modulo que se esta creando
:::

## Ejecutar el servidor

### Verificar que el proyecto no tenga errores
```bash
python manage.py check
```

### Iniciar servidor

```bash
python manage.py runserver
```

Abrir en un navegador web el enlace [http://localhost:8000](http://localhost:8000)

:::note
**Nota:** Para detener el servidor, presiona `Ctrl + C`
:::
