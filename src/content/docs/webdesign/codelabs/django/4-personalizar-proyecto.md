---
title: '4. Personalizar proyecto'
description: 'Personalizar models y admin para Django'
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
