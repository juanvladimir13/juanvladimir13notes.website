---
title: '8. Prompt para Plantillas del Panel CRUD'
description: 'Prompt para generar plantillas HTML responsivas del panel paralelo en Django: tablas con list_display, búsqueda, paginación y formularios fieldsets.'

head:
  - tag: meta
    attrs:
      property: og:title
      content: '8. Prompt para Plantillas del Panel CRUD'
  - tag: meta
    attrs:
      property: og:description
      content: 'Prompt para generar plantillas HTML responsivas del panel paralelo en Django: tablas con list_display, búsqueda, paginación y formularios fieldsets.'
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
      content: '8. Prompt para Plantillas del Panel CRUD'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Prompt para generar plantillas HTML responsivas del panel paralelo en Django: tablas con list_display, búsqueda, paginación y formularios fieldsets.'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---

Una vez que cuentas con los formularios (`forms.py`) y las vistas basadas en clases (`views.py`), necesitas las **plantillas HTML** que darán vida a la interfaz de usuario del panel paralelo.

El objetivo de este prompt es generar plantillas modernas, responsivas y accesibles (compatibles con Bootstrap 5 o Tailwind CSS) que reproduzcan las comodidades del panel de administración: listados tipo tabla con las columnas de `list_display`, filtros desplegables, barra de búsqueda, paginación y formularios organizados en bloques que emulan los `fieldsets`.

---

## Plantilla del Prompt para Copiar

Copia el siguiente bloque de texto, añade tus archivos de referencia y envíalo a tu asistente de IA:

```markdown title="Prompt: Generador de Plantillas HTML para Panel CRUD"
Actúa como un Diseñador y Desarrollador Frontend especializado en Django y Bootstrap 5.
A partir del código de mis modelos (`models.py`), configuración de administración (`admin.py`) y vistas (`views.py`), genera las plantillas HTML completas para el panel de gestión paralelo.

### Archivos de referencia:
[Pega aquí tus modelos, admin y vistas]

### Plantillas requeridas:
1. **`nombre_list.html` (Vista de Listado)**:
   - Encabezado con título claro y botón destacado "Nuevo Registro".
   - Barra superior con formulario de búsqueda (parámetro `q`) y filtros desplegables (parámetros de `list_filter`).
   - Tabla responsiva (`table table-hover table-striped`) con las columnas de `list_display`.
   - Badges de colores para estados booleanos (ej. verde para activo/disponible, rojo para inactivo).
   - Columna final de "Acciones" con botones o enlaces con iconos para Ver detalle, Editar y Eliminar.
   - Paginador con botones "Anterior", números de página y "Siguiente" conservando los filtros en la URL.
   - Mensaje amigable cuando no existan registros o la búsqueda no devuelva resultados.

2. **`nombre_form.html` (Vista de Creación y Edición)**:
   - Tarjeta (`card`) con título dinámico ("Registrar nuevo..." o "Editar...").
   - Organización de campos por secciones o tarjetas replicando la estructura de `fieldsets` del `admin.py`.
   - Renderizado individual de campos con etiquetas (`{{ field.label_tag }}`), widgets, textos de ayuda (`{{ field.help_text }}`) y mensajes de error específicos con clases de alerta de Bootstrap.
   - Botones de acción: "Guardar Cambios" (submit) y "Cancelar" (enlace a la lista).

3. **`nombre_confirm_delete.html` (Confirmación de Borrado)**:
   - Tarjeta de advertencia clara informando qué registro se va a eliminar.
   - Botón rojo de confirmación y botón secundario de cancelación.

4. **Estándares Técnicos**:
   - Todas las plantillas deben extender de `{% extends 'base.html' %}` y usar bloques `{% block content %}`.
   - Incluir soporte para mostrar mensajes flash de Django (`{% if messages %}`).
```

---

## Ejemplo Práctico de Plantillas Generadas

Tomando como referencia el modelo `Vehiculo`, veamos las plantillas generadas para el panel paralelo:

### 1. Plantilla de Listado (`vehiculo_list.html`)

```html title="templates/panel/vehiculo_list.html" showLineNumbers
{% extends 'base.html' %}

{% block title %}Inventario de Vehículos | Panel de Control{% endblock %}

{% block content %}
<div class="container py-4">
  <!-- Encabezado con botón de acción -->
  <div class="d-flex justify-content-between align-items-center mb-4">
    <div>
      <h1 class="h3 mb-0 text-gray-800">Inventario de Vehículos</h1>
      <p class="text-muted small mb-0">Gestión de unidades disponibles y comercialización.</p>
    </div>
    <a href="{% url 'panel:vehiculo_create' %}" class="btn btn-primary">
      <i class="bi bi-plus-circle me-1"></i> Registrar Vehículo
    </a>
  </div>

  <!-- Barra de Filtros y Búsqueda -->
  <div class="card shadow-sm mb-4">
    <div class="card-body">
      <form method="get" class="row g-3">
        <div class="col-md-5">
          <input type="text" name="q" value="{{ q }}" class="form-control" placeholder="Buscar por placa, marca o modelo...">
        </div>
        <div class="col-md-3">
          <select name="disponible" class="form-select">
            <option value="">-- Todos los estados --</option>
            <option value="true" {% if disponible == 'true' %}selected{% endif %}>Solo Disponibles</option>
            <option value="false" {% if disponible == 'false' %}selected{% endif %}>No Disponibles</option>
          </select>
        </div>
        <div class="col-md-4 d-flex gap-2">
          <button type="submit" class="btn btn-secondary flex-grow-1">Filtrar</button>
          {% if q or disponible %}
            <a href="{% url 'panel:vehiculo_list' %}" class="btn btn-outline-secondary">Limpiar</a>
          {% endif %}
        </div>
      </form>
    </div>
  </div>

  <!-- Tabla de Registros -->
  <div class="card shadow-sm">
    <div class="table-responsive">
      <table class="table table-hover align-middle mb-0">
        <thead class="table-light">
          <tr>
            <th>Placa</th>
            <th>Marca y Modelo</th>
            <th>Año</th>
            <th>Precio (USD)</th>
            <th>Kilometraje</th>
            <th>Estado</th>
            <th class="text-end">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {% for vehiculo in vehiculos %}
          <tr>
            <td class="fw-bold">
              <a href="{% url 'panel:vehiculo_detail' vehiculo.pk %}" class="text-decoration-none">
                {{ vehiculo.placa }}
              </a>
            </td>
            <td>{{ vehiculo.marca }} {{ vehiculo.modelo }}</td>
            <td>{{ vehiculo.anio }}</td>
            <td class="fw-semibold text-success">${{ vehiculo.precio }}</td>
            <td>{{ vehiculo.kilometraje }} km</td>
            <td>
              {% if vehiculo.disponible %}
                <span class="badge bg-success-subtle text-success border border-success-subtle">Disponible</span>
              {% else %}
                <span class="badge bg-danger-subtle text-danger border border-danger-subtle">Vendido / Reservado</span>
              {% endif %}
            </td>
            <td class="text-end">
              <div class="btn-group btn-group-sm">
                <a href="{% url 'panel:vehiculo_detail' vehiculo.pk %}" class="btn btn-outline-secondary" title="Ver detalle">
                  👁️
                </a>
                <a href="{% url 'panel:vehiculo_update' vehiculo.pk %}" class="btn btn-outline-primary" title="Editar">
                  ✏️
                </a>
                <a href="{% url 'panel:vehiculo_delete' vehiculo.pk %}" class="btn btn-outline-danger" title="Eliminar">
                  🗑️
                </a>
              </div>
            </td>
          </tr>
          {% empty %}
          <tr>
            <td colspan="7" class="text-center py-5 text-muted">
              <p class="mb-0">No se encontraron vehículos registrados con los criterios seleccionados.</p>
            </td>
          </tr>
          {% endfor %}
        </tbody>
      </table>
    </div>

    <!-- Paginador -->
    {% if is_paginated %}
    <div class="card-footer bg-white d-flex justify-content-between align-items-center py-3">
      <span class="small text-muted">
        Página {{ page_obj.number }} de {{ page_obj.paginator.num_pages }}
      </span>
      <ul class="pagination pagination-sm mb-0">
        {% if page_obj.has_previous %}
          <li class="page-item">
            <a class="page-link" href="?page={{ page_obj.previous_page_number }}&q={{ q }}&disponible={{ disponible }}">Anterior</a>
          </li>
        {% endif %}
        <li class="page-item active">
          <span class="page-link">{{ page_obj.number }}</span>
        </li>
        {% if page_obj.has_next %}
          <li class="page-item">
            <a class="page-link" href="?page={{ page_obj.next_page_number }}&q={{ q }}&disponible={{ disponible }}">Siguiente</a>
          </li>
        {% endif %}
      </ul>
    </div>
    {% endif %}
  </div>
</div>
{% endblock %}
```

---

### 2. Plantilla de Formulario (`vehiculo_form.html`)

Replicando la estructura por secciones de los `fieldsets`:

```html title="templates/panel/vehiculo_form.html" showLineNumbers
{% extends 'base.html' %}

{% block title %}
  {% if object %}Editar Vehículo {{ object.placa }}{% else %}Nuevo Vehículo{% endif %} | Panel
{% endblock %}

{% block content %}
<div class="container py-4" style="max-width: 800px;">
  <div class="card shadow-sm">
    <div class="card-header bg-white py-3">
      <h1 class="h4 mb-0">
        {% if object %}✏️ Editar Vehículo: {{ object.placa }}{% else %}➕ Registrar Nuevo Vehículo{% endif %}
      </h1>
    </div>

    <div class="card-body p-4">
      <form method="post" novalidate>
        {% csrf_token %}

        {% if form.non_field_errors %}
          <div class="alert alert-danger mb-4">
            {{ form.non_field_errors }}
          </div>
        {% endif %}

        <!-- Sección 1: Identificación -->
        <h5 class="border-bottom pb-2 mb-3 text-secondary">Identificación del Vehículo</h5>
        <div class="row g-3 mb-4">
          <div class="col-md-6">
            <label class="form-label fw-semibold">{{ form.placa.label }}</label>
            {{ form.placa }}
            {% if form.placa.help_text %}<div class="form-text">{{ form.placa.help_text }}</div>{% endif %}
            {% if form.placa.errors %}<div class="text-danger small mt-1">{{ form.placa.errors }}</div>{% endif %}
          </div>
          <div class="col-md-6 d-flex align-items-center pt-3">
            <div class="form-check">
              {{ form.disponible }}
              <label class="form-check-label fw-semibold" for="{{ form.disponible.id_for_label }}">
                {{ form.disponible.label }}
              </label>
            </div>
          </div>
          <div class="col-md-6">
            <label class="form-label fw-semibold">{{ form.marca.label }}</label>
            {{ form.marca }}
            {% if form.marca.errors %}<div class="text-danger small mt-1">{{ form.marca.errors }}</div>{% endif %}
          </div>
          <div class="col-md-6">
            <label class="form-label fw-semibold">{{ form.modelo.label }}</label>
            {{ form.modelo }}
            {% if form.modelo.errors %}<div class="text-danger small mt-1">{{ form.modelo.errors }}</div>{% endif %}
          </div>
        </div>

        <!-- Sección 2: Especificaciones Técnicas y Precio -->
        <h5 class="border-bottom pb-2 mb-3 text-secondary">Especificaciones y Precio</h5>
        <div class="row g-3 mb-4">
          <div class="col-md-4">
            <label class="form-label fw-semibold">{{ form.anio.label }}</label>
            {{ form.anio }}
            {% if form.anio.errors %}<div class="text-danger small mt-1">{{ form.anio.errors }}</div>{% endif %}
          </div>
          <div class="col-md-4">
            <label class="form-label fw-semibold">{{ form.combustible.label }}</label>
            {{ form.combustible }}
            {% if form.combustible.errors %}<div class="text-danger small mt-1">{{ form.combustible.errors }}</div>{% endif %}
          </div>
          <div class="col-md-4">
            <label class="form-label fw-semibold">{{ form.kilometraje.label }}</label>
            {{ form.kilometraje }}
            {% if form.kilometraje.errors %}<div class="text-danger small mt-1">{{ form.kilometraje.errors }}</div>{% endif %}
          </div>
          <div class="col-md-12">
            <label class="form-label fw-semibold">{{ form.precio.label }}</label>
            {{ form.precio }}
            {% if form.precio.errors %}<div class="text-danger small mt-1">{{ form.precio.errors }}</div>{% endif %}
          </div>
        </div>

        <!-- Botones de Acción -->
        <div class="d-flex justify-content-end gap-2 pt-3 border-top">
          <a href="{% url 'panel:vehiculo_list' %}" class="btn btn-outline-secondary">Cancelar</a>
          <button type="submit" class="btn btn-primary px-4">Guardar Registro</button>
        </div>
      </form>
    </div>
  </div>
</div>
{% endblock %}
```

---

### 3. Plantilla de Confirmación de Borrado (`vehiculo_confirm_delete.html`)

```html title="templates/panel/vehiculo_confirm_delete.html" showLineNumbers
{% extends 'base.html' %}

{% block title %}Confirmar Eliminación | Panel{% endblock %}

{% block content %}
<div class="container py-5" style="max-width: 600px;">
  <div class="card border-danger shadow-sm">
    <div class="card-header bg-danger text-white">
      <h5 class="mb-0">⚠️ Confirmar Eliminación</h5>
    </div>
    <div class="card-body p-4 text-center">
      <p class="fs-5">
        ¿Estás seguro de que deseas eliminar permanentemente el vehículo con placa 
        <strong class="text-danger">{{ object.placa }}</strong>?
      </p>
      <p class="text-muted small">Esta acción no se puede deshacer y borrará los historiales asociados.</p>

      <form method="post" class="mt-4 d-flex justify-content-center gap-3">
        {% csrf_token %}
        <a href="{% url 'panel:vehiculo_list' %}" class="btn btn-outline-secondary px-4">Cancelar</a>
        <button type="submit" class="btn btn-danger px-4">Sí, eliminar definitivamente</button>
      </form>
    </div>
  </div>
</div>
{% endblock %}
```

:::tip Mensajes Flash en base.html
Para que los mensajes de confirmación de las vistas (`SuccessMessageMixin`) aparezcan automáticamente en la interfaz, incluye este fragmento en tu plantilla `base.html`:
```html title="templates/base.html"
{% if messages %}
  <div class="container mt-3">
    {% for message in messages %}
      <div class="alert alert-{{ message.tags|default:'info' }} alert-dismissible fade show" role="alert">
        {{ message }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    {% endfor %}
  </div>
{% endif %}
```
:::
