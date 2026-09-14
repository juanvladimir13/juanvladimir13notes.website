---
title: '6. Prompt para Django Admin'
description: 'Prompt profesional para generar el archivo admin.py a partir de modelos Django con ModelAdmin, filtros, búsquedas, fieldsets y paneles inlines.'

head:
  - tag: meta
    attrs:
      property: og:title
      content: '6. Prompt para Django Admin'
  - tag: meta
    attrs:
      property: og:description
      content: 'Prompt profesional para generar el archivo admin.py a partir de modelos Django con ModelAdmin, filtros, búsquedas, fieldsets y paneles inlines.'
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
      content: '6. Prompt para Django Admin'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Prompt profesional para generar el archivo admin.py a partir de modelos Django con ModelAdmin, filtros, búsquedas, fieldsets y paneles inlines.'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---

El panel de administración de Django (`Django Admin`) es una de las herramientas más potentes del framework. Sin embargo, registrar los modelos únicamente con `admin.site.register(Modelo)` produce interfaces básicas y poco funcionales.

A continuación, encontrarás un **prompt optimizado** para proporcionarle a un modelo de Inteligencia Artificial tu archivo `models.py` y recibir a cambio una configuración completa para `admin.py` que incluye: columnas clave, filtros, búsquedas, agrupaciones visuales con `fieldsets`, campos de solo lectura, edición rápida e inserciones tabulares (`inlines`).

---

## Plantilla del Prompt para Copiar

Copia el siguiente bloque de texto, pega tu código de `models.py` al final y envíalo a tu asistente de IA:

```markdown title="Prompt: Generador de Django Admin"
Actúa como un Desarrollador Senior especializado en Django.
A partir de los modelos proporcionados a continuación, genera el código completo, profesional y limpio para el archivo `admin.py`.

### Código de mis Modelos (models.py):
```python
[PEGA AQUÍ EL CÓDIGO DE TU ARCHIVO models.py]
```

### Directrices y Buenas Prácticas para admin.py:
1. **Registro con Decoradores**: Utilizar `@admin.register(NombreModelo)` en lugar de `admin.site.register()`.
2. **Listado de Registros (Vista Tabla)**:
   - `list_display`: Mostrar las columnas más relevantes para la gestión diaria.
   - `list_display_links`: Definir qué columnas abren el formulario de detalle.
   - `list_filter`: Filtros laterales dinámicos para fechas, estados, choices y relaciones ForeignKey.
   - `search_fields`: Búsquedas rápidas por texto, códigos, nombres o relaciones (`relacion__campo`).
   - `ordering`: Ordenación por defecto coherente.
   - `list_per_page`: Paginación fijada en 20 o 25 elementos.
   - `list_editable`: Si hay un campo booleano de estado (como activo o disponible), permitir su edición directa desde la tabla (cuidando que no esté en `list_display_links`).
3. **Formulario de Edición y Creación**:
   - `fieldsets`: Agrupar los campos en secciones lógicas con títulos descriptivos.
   - Usar tuplas dentro de `fields` para colocar campos cortos en una misma fila horizontal `('campo1', 'campo2')`.
   - Incluir la clase `'classes': ('collapse',)` en bloques secundarios o de auditoría.
   - `readonly_fields`: Incluir campos automáticos que no deben alterarse (fechas auto_now, IDs o cálculos).
4. **Relaciones en Línea (Inlines)**:
   - Si existen relaciones 1 a N (ForeignKey dependientes), implementar `admin.TabularInline` con `extra = 1` dentro del modelo principal.
5. **Columnas Calculadas**:
   - Si amerita, crear métodos con el decorador `@admin.display(description="...", boolean=True)` para mostrar insignias o valores formateados.
6. **Personalización del Sitio**:
   - Agregar al inicio la personalización de títulos: `admin.site.site_header`, `admin.site.site_title` e `admin.site.index_title`.
```

---

## Ejemplo Práctico de Aplicación

Tomando como base un modelo `Vehiculo` y su relación secundaria `Mantenimiento`, veamos qué genera el prompt.

### Modelos de Entrada (`models.py`):

```python title="models.py" showLineNumbers
from django.db import models
from django.core.validators import MinValueValidator

class Vehiculo(models.Model):
    placa = models.CharField('Placa', max_length=8, unique=True)
    marca = models.CharField('Marca', max_length=50)
    modelo = models.CharField('Modelo', max_length=50)
    anio = models.PositiveIntegerField('Año')
    precio = models.DecimalField('Precio USD', max_digits=10, decimal_places=2)
    kilometraje = models.PositiveIntegerField('Kilometraje', default=0)
    disponible = models.BooleanField('Disponible', default=True)
    fecha_registro = models.DateTimeField('Fecha de registro', auto_now_add=True)

    class Meta:
        verbose_name = 'Vehículo'
        verbose_name_plural = 'Vehículos'

    def __str__(self):
        return f"{self.placa} - {self.marca} {self.modelo}"

class Mantenimiento(models.Model):
    vehiculo = models.ForeignKey(Vehiculo, on_delete=models.CASCADE, related_name='mantenimientos')
    fecha = models.DateField('Fecha de servicio')
    descripcion = models.CharField('Trabajo realizado', max_length=200)
    costo = models.DecimalField('Costo (USD)', max_digits=8, decimal_places=2)

    class Meta:
        verbose_name = 'Mantenimiento'
        verbose_name_plural = 'Mantenimientos'
```

---

### Código Generado por la IA (`admin.py`):

```python title="admin.py" showLineNumbers
from django.contrib import admin
from django.utils.html import format_html
from .models import Vehiculo, Mantenimiento

# 1. Personalización de la interfaz general del panel
admin.site.site_header = "Panel de Control - Concesionaria"
admin.site.site_title = "Administración Vehicular"
admin.site.index_title = "Gestión del Sistema"


# 2. Relación en línea para visualizar y agregar mantenimientos dentro del vehículo
class MantenimientoInline(admin.TabularInline):
    model = Mantenimiento
    extra = 1
    fields = ('fecha', 'descripcion', 'costo')


# 3. Administración principal del modelo Vehiculo
@admin.register(Vehiculo)
class VehiculoAdmin(admin.ModelAdmin):
    # Columnas visibles en la lista
    list_display = (
        'placa',
        'marca',
        'modelo',
        'anio',
        'precio_formateado',
        'kilometraje',
        'disponible',
        'fecha_registro'
    )

    # Enlaces para abrir el detalle
    list_display_links = ('placa', 'marca')

    # Edición directa desde la tabla
    list_editable = ('disponible',)

    # Filtros en la barra lateral derecha
    list_filter = (
        'disponible',
        'marca',
        'anio',
        ('fecha_registro', admin.DateFieldListFilter)
    )

    # Búsqueda por texto (placa, marca o modelo)
    search_fields = ('placa', 'marca', 'modelo')

    # Ordenación por defecto
    ordering = ('-fecha_registro',)

    # Paginación
    list_per_page = 20

    # Campos que no pueden modificarse manualmente
    readonly_fields = ('fecha_registro',)

    # Paneles en línea
    inlines = [MantenimientoInline]

    # Organización de los campos del formulario en secciones
    fieldsets = (
        ('Identificación del Vehículo', {
            'fields': (
                ('placa', 'disponible'),
                ('marca', 'modelo'),
                ('anio', 'kilometraje'),
            )
        }),
        ('Información Comercial', {
            'fields': ('precio',),
        }),
        ('Auditoría del Sistema', {
            'classes': ('collapse',),  # Sección plegable
            'fields': ('fecha_registro',),
        }),
    )

    # Método para formatear la moneda en la lista
    @admin.display(description='Precio', ordering='precio')
    def precio_formateado(self, obj):
        return f"${obj.precio:,.2f}"


# 4. Administración individual para Mantenimientos
@admin.register(Mantenimiento)
class MantenimientoAdmin(admin.ModelAdmin):
    list_display = ('vehiculo', 'fecha', 'descripcion', 'costo')
    list_filter = ('fecha', 'vehiculo__marca')
    search_fields = ('vehiculo__placa', 'descripcion')
    date_hierarchy = 'fecha'
```

---

## Verificación en el Navegador

Una vez que guardes tu archivo `admin.py`:

1. **Valida que no existan errores de sintaxis o referencias:**
   ```bash title="Terminal" showLineNumbers
   python manage.py check
   ```

2. **Crea un superusuario si aún no lo tienes:**
   ```bash title="Terminal" showLineNumbers
   python manage.py createsuperuser
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash title="Terminal" showLineNumbers
   python manage.py runserver
   ```

4. **Accede al panel en tu navegador:**
   Ingresa a [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/) e inicia sesión con tus credenciales de superusuario.

:::caution Regla de Oro en Django Admin
Un mismo campo **nunca** debe estar en `list_display_links` y en `list_editable` a la vez. Si intentas hacer editable un campo que a su vez es el enlace para abrir el formulario, Django lanzará un error de validación del sistema al iniciar el servidor (`admin.E123`).
:::
