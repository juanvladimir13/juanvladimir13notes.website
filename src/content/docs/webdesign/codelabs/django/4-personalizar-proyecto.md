---
title: '4. Personalizar proyecto'
description: 'Personaliza modelos de Django con el método __str__ y configura el panel de administración usando ModelAdmin con list_display, búsquedas y fieldsets.'

head:
  - tag: meta
    attrs:
      property: og:title
      content: '4. Personalizar proyecto'
  - tag: meta
    attrs:
      property: og:description
      content: 'Personaliza modelos de Django con el método __str__ y configura el panel de administración usando ModelAdmin con list_display, búsquedas y fieldsets.'
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
      content: '4. Personalizar proyecto'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Personaliza modelos de Django con el método __str__ y configura el panel de administración usando ModelAdmin con list_display, búsquedas y fieldsets.'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---

## Personalizar models

- Agregar los `campos o columnas` que se desean mostrar al **panel de administracion**
- Agregar esta funcion en cada `clase` del `models.py` para que se muestren los campos en el panel de administracion

```python title="models.py"
def __str__(self):
    return "%s | %s" %(self.ci, self.nombres)
```

Verificar proyecto Django no tenga errores
```bash
python manage.py check
```

## Activar models en Django Admin

Modificar el archivo `admin.py`

```python title="admin.py"
from django.contrib.admin import ModelAdmin, register, TabularInline, StackedInline

from .models import *
```
### Ejemplo de registro de models

Registrar el modelo `Vehiculo` que se encuentra en el archivo `models.py`

Configuracion basica y con datos predeterminados
```python title="admin.py"  
@register(Vehiculo)
class VehiculoAdmin(ModelAdmin):
    pass
```

### Otro ejemplo con mas configuraciones

Configurar formulario personalizando campos y visualizacion

```python title="admin.py"

@register(Vehiculo)
class VehiculoAdmin(ModelAdmin):
    list_display = ('codigo', 'nombre')
    list_display_links = ('codigo')
    search_fields = ['codigo', 'nombre']
    ordering = ['codigo', 'nombre']
    fieldsets = [
        ('', {'fields': [('codigo'), ('cultivo_id', 'nro_dias_cultivo',)]}),
        ('', {'fields': [('nombre'), ('propietario')]}),
]
```
