---
title: '5. Prompt para Models con Validaciones'
description: 'Prompt profesional para generar modelos Django (models.py) con verbose_name, validaciones de campos, opciones choices, relaciones y clase Meta.'

head:
  - tag: meta
    attrs:
      property: og:title
      content: '5. Prompt para Models con Validaciones'
  - tag: meta
    attrs:
      property: og:description
      content: 'Prompt profesional para generar modelos Django (models.py) con verbose_name, validaciones de campos, opciones choices, relaciones y clase Meta.'
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
      content: '5. Prompt para Models con Validaciones'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Prompt profesional para generar modelos Django (models.py) con verbose_name, validaciones de campos, opciones choices, relaciones y clase Meta.'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---

Al construir aplicaciones con Django, diseñar modelos robustos en `models.py` es fundamental para garantizar la integridad de la base de datos y facilitar la interacción en formularios y en el panel de administración.

Puedes utilizar el siguiente **prompt estructurado** para solicitar a un modelo de Inteligencia Artificial (ChatGPT, Claude, Gemini, Antigravity, OpenCode) la creación de modelos Django con buenas prácticas de la industria: nombres legibles (`verbose_name`), validaciones estrictas, opciones enumeradas (`choices`), métodos auxiliares y clase `Meta`.

---

## Plantilla del Prompt para Copiar

Copia el siguiente bloque de texto, personaliza la sección de **Requisitos del Modelo** y envíalo a tu asistente de IA:

```markdown title="Prompt: Generador de Models Django"
Actúa como un Desarrollador Senior de Python y Django.
Genera el código completo y profesional para el archivo `models.py` de una aplicación Django según los siguientes requerimientos:

### Requisitos del Modelo:
- Nombre de la Entidad/Modelo: [Ejemplo: Vehiculo, Producto, Estudiante, etc.]
- Descripción del negocio: [Breve descripción de para qué sirve este modelo]
- Campos requeridos y reglas:
  1. [Campo 1: tipo de dato, restricciones, si es único o requerido]
  2. [Campo 2: valor mínimo/máximo o expresión regular]
  3. [Campo 3: opciones predefinidas tipo choices]
  4. [Campo 4: relación ForeignKey con otro modelo si aplica]

### Estándares Obligatorios de Código:
1. **verbose_name y help_text**: Cada campo debe incluir `verbose_name` en español claro y un `help_text` explicativo para el usuario.
2. **Validaciones**:
   - Usar validadores estándar de Django (`MinValueValidator`, `MaxValueValidator`, `RegexValidator`) cuando corresponda.
   - Definir `blank=False` / `null=False` para campos obligatorios y `blank=True` / `null=True` únicamente donde esté justificado.
3. **Opciones (Choices)**: Usar clases enumeradas basadas en `models.TextChoices` o `models.IntegerChoices`.
4. **Método __str__**: Retornar una representación legible y descriptiva del objeto (evitar IDs solos).
5. **Clase Meta**:
   - Definir `verbose_name` (singular) y `verbose_name_plural` (plural) en español.
   - Configurar `ordering` predeterminado.
   - Definir `db_table` con el nombre formal de la tabla.
6. **Método clean()**: Incluir validación personalizada a nivel de modelo para comprobar coherencia entre campos si es necesario.
7. **Imports**: Incluir todos los imports necesarios (`django.db.models`, `django.core.validators`, `django.core.exceptions.ValidationError`).
```

---

## Ejemplo Práctico de Aplicación

A continuación, se muestra cómo utilizar el prompt con un caso real de un concesionario vehicular.

### Entrada al Asistente de IA:

> *"Genera el modelo `Vehiculo` con placa única (formato boliviano: 3 o 4 números seguidos de 3 letras), marca, modelo, año (entre 1990 y el año actual + 1), precio (positivo), kilometraje y tipo de combustible (Gasolina, Diésel, Eléctrico, Híbrido, GNV)."*

---

### Código Generado (`models.py`):

```python title="models.py" showLineNumbers
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator, RegexValidator
from django.core.exceptions import ValidationError
from datetime import date


class TipoCombustible(models.TextChoices):
    GASOLINA = 'GAS', 'Gasolina'
    DIESEL = 'DIE', 'Diésel'
    ELECTRICO = 'ELE', 'Eléctrico'
    HIBRIDO = 'HIB', 'Híbrido'
    GNV = 'GNV', 'Gas Natural Vehicular (GNV)'


class Vehiculo(models.Model):
    # Expresión regular para validar formato de placa vehicular (Ej: 1234ABC o 123ABC)
    validador_placa = RegexValidator(
        regex=r'^\d{3,4}[A-Z]{3}$',
        message='La placa debe tener 3 o 4 números seguidos de 3 letras mayúsculas (Ej: 3456XYZ).'
    )

    placa = models.CharField(
        verbose_name='Número de placa',
        max_length=8,
        unique=True,
        validators=[validador_placa],
        help_text='Identificador único del vehículo según registro oficial.'
    )

    marca = models.CharField(
        verbose_name='Marca del vehículo',
        max_length=50,
        help_text='Nombre del fabricante (Ej: Toyota, Nissan, Ford).'
    )

    modelo = models.CharField(
        verbose_name='Modelo',
        max_length=50,
        help_text='Línea o versión del vehículo (Ej: Hilux, Corolla).'
    )

    anio = models.PositiveIntegerField(
        verbose_name='Año de fabricación',
        validators=[
            MinValueValidator(1990, message='El vehículo no puede ser anterior al año 1990.'),
            MaxValueValidator(date.today().year + 1, message='El año no puede ser superior al año entrante.')
        ],
        help_text='Año en que fue fabricado el vehículo.'
    )

    precio = models.DecimalField(
        verbose_name='Precio de venta (USD)',
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(0.01, message='El precio debe ser un valor positivo.')],
        help_text='Precio fijado para la comercialización en dólares.'
    )

    kilometraje = models.PositiveIntegerField(
        verbose_name='Kilometraje recorrido (km)',
        default=0,
        help_text='Lectura actual del odómetro en kilómetros.'
    )

    combustible = models.CharField(
        verbose_name='Tipo de combustible',
        max_length=3,
        choices=TipoCombustible.choices,
        default=TipoCombustible.GASOLINA,
        help_text='Selecciona el combustible principal que utiliza el motor.'
    )

    disponible = models.BooleanField(
        verbose_name='¿Está disponible para la venta?',
        default=True,
        help_text='Desmarca esta casilla si el vehículo ya fue vendido o reservado.'
    )

    fecha_registro = models.DateTimeField(
        verbose_name='Fecha de registro en el sistema',
        auto_now_add=True
    )

    class Meta:
        db_table = 'vehiculos'
        verbose_name = 'Vehículo'
        verbose_name_plural = 'Vehículos'
        ordering = ['-fecha_registro', 'marca']

    def __str__(self):
        return f"{self.placa} | {self.marca} {self.modelo} ({self.anio})"

    def clean(self):
        """Validaciones de lógica de negocio cruzada entre campos."""
        super().clean()
        if self.combustible == TipoCombustible.ELECTRICO and self.kilometraje > 500000:
            raise ValidationError({
                'kilometraje': 'Verifica el kilometraje ingresado para vehículos 100% eléctricos.'
            })
```

---

## Pasos para Aplicar los Cambios

Cada vez que agregues o modifiques modelos en `models.py`, ejecuta los siguientes comandos en tu terminal:

1. **Verificar que no existan errores sintácticos:**
   ```bash title="Terminal" showLineNumbers
   python manage.py check
   ```

2. **Crear el archivo de migración:**
   ```bash title="Terminal" showLineNumbers
   python manage.py makemigrations
   ```

3. **Aplicar la migración a la base de datos:**
   ```bash title="Terminal" showLineNumbers
   python manage.py migrate
   ```

:::tip Diferencia entre null y blank en Django
- **`null=True`**: Aplica a nivel de **Base de Datos**. Permite que la columna almacene valores `NULL`. Se utiliza comúnmente en campos numéricos, fechas o claves foráneas opcionales.
- **`blank=True`**: Aplica a nivel de **Validación de Formularios**. Permite que el campo quede vacío al llenarlo desde un formulario web o el panel de Django Admin.
:::
