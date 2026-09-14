---
title: '7. Prompt para Panel CRUD (Forms y Vistas)'
description: 'Prompt profesional para generar un panel de gestión paralelo a admin.py con ModelForms, Vistas Basadas en Clases (CBV) y rutas URLs en Django.'

head:
  - tag: meta
    attrs:
      property: og:title
      content: '7. Prompt para Panel CRUD (Forms y Vistas)'
  - tag: meta
    attrs:
      property: og:description
      content: 'Prompt profesional para generar un panel de gestión paralelo a admin.py con ModelForms, Vistas Basadas en Clases (CBV) y rutas URLs en Django.'
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
      content: '7. Prompt para Panel CRUD (Forms y Vistas)'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Prompt profesional para generar un panel de gestión paralelo a admin.py con ModelForms, Vistas Basadas en Clases (CBV) y rutas URLs en Django.'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---

El panel de administración predeterminado (`admin.py`) está pensado para administradores técnicos y superusuarios. Sin embargo, en la mayoría de los proyectos web reales se requiere un **panel de gestión paralelo** (Back-Office o Dashboard) para operadores, clientes o personal de ventas, con interfaz personalizada, control estricto de roles y sin acceso a la raíz `/admin`.

El desafío habitual es **migrar y replicar** toda la lógica ya configurada en `models.py` y `admin.py` hacia componentes estándar de Django:
- **De `models.py`**: Validadores, mensajes de error, opciones `choices`, textos `help_text` y método `clean()`.
- **De `admin.py`**: Columnas `list_display`, filtros `list_filter`, buscador `search_fields`, orden `ordering`, paginación `list_per_page` y campos de solo lectura `readonly_fields`.

---

## Plantilla del Prompt para Copiar

Copia el siguiente bloque de texto, pega tu código de `models.py` y `admin.py`, y envíalo a tu asistente de IA (ChatGPT, Claude, Gemini, Antigravity):

```markdown title="Prompt: Generador de Backend para Panel Paralelo"
Actúa como un Desarrollador Senior especializado en Django.
Necesito crear un panel de gestión CRUD paralelo a `admin.py` para usuarios finales de mi aplicación web.
A partir del código de mis archivos `models.py` y `admin.py`, genera el código completo para `forms.py`, `views.py` y `urls.py`.

### Código de referencia:
**models.py**:
```python
[PEGA AQUÍ TU models.py]
```

**admin.py**:
```python
[PEGA AQUÍ TU admin.py]
```

### Reglas de Migración y Estándares de Código:

1. **Formularios (forms.py)**:
   - Crear un `ModelForm` para la entidad principal.
   - Migrar todos los campos respetando `verbose_name` y `help_text`.
   - Asignar clases CSS (como `form-control` o `form-select` de Bootstrap) a todos los widgets.
   - Si `admin.py` tiene `readonly_fields`, configurar esos campos con `disabled=True` en el formulario o excluirlos según corresponda.
   - Respetar las validaciones del modelo y añadir métodos `clean_<campo>()` si se requiere validación adicional en formularios.

2. **Vistas Basadas en Clases (views.py)**:
   - Implementar el ciclo CRUD completo utilizando Vistas Basadas en Clases (CBV):
     - `ListView`:
       * Replicar las columnas de `list_display`.
       * Replicar la búsqueda de `search_fields` mediante `Q()` en el método `get_queryset()`.
       * Replicar los filtros de `list_filter` capturando parámetros `GET`.
       * Configurar paginación con `paginate_by` según `list_per_page`.
       * Aplicar el orden definido en `ordering`.
     - `CreateView`: Con formulario vinculado, `success_url` y mensajes flash con `SuccessMessageMixin`.
     - `UpdateView`: Edición del registro con mensaje flash de éxito.
     - `DeleteView`: Eliminación con confirmación y mensaje flash.
     - `DetailView`: Vista de lectura de todos los datos del registro.
   - Proteger todas las vistas con `LoginRequiredMixin`.

3. **Rutas (urls.py)**:
   - Definir `app_name` para nombres de ruta con espacio de nombres (namespacing).
   - Crear las 5 rutas estándar: lista, crear, detalle, editar y eliminar con nombres semánticos.
```

---

## Ejemplo Práctico de Migración

Tomando como base el modelo `Vehiculo` y su configuración en `admin.py` de los pasos anteriores, veamos cómo se generan los archivos del backend del panel paralelo:

### 1. Formulario (`forms.py`)

```python title="forms.py" showLineNumbers
from django import forms
from .models import Vehiculo


class VehiculoForm(forms.ModelForm):
    class Meta:
        model = Vehiculo
        fields = [
            'placa',
            'marca',
            'modelo',
            'anio',
            'precio',
            'kilometraje',
            'combustible',
            'disponible',
        ]
        widgets = {
            'placa': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Ej: 3456XYZ',
                'style': 'text-transform: uppercase;'
            }),
            'marca': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Ej: Toyota'}),
            'modelo': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Ej: Corolla'}),
            'anio': forms.NumberInput(attrs={'class': 'form-control', 'min': 1990}),
            'precio': forms.NumberInput(attrs={'class': 'form-control', 'step': '0.01'}),
            'kilometraje': forms.NumberInput(attrs={'class': 'form-control', 'min': 0}),
            'combustible': forms.Select(attrs={'class': 'form-select'}),
            'disponible': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
        }

    def clean_placa(self):
        """Normalizar la placa a mayúsculas antes de guardar."""
        placa = self.cleaned_data.get('placa')
        return placa.upper() if placa else placa
```

---

### 2. Vistas del Panel (`views.py`)

```python title="views.py" showLineNumbers
from django.urls import reverse_lazy
from django.db.models import Q
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.messages.views import SuccessMessageMixin
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Vehiculo
from .forms import VehiculoForm


class VehiculoListView(LoginRequiredMixin, ListView):
    model = Vehiculo
    template_name = 'panel/vehiculo_list.html'
    context_object_name = 'vehiculos'
    paginate_by = 10  # Equivalente a list_per_page

    def get_queryset(self):
        queryset = super().get_queryset()

        # 1. Replicar search_fields ('placa', 'marca', 'modelo')
        buscar = self.request.GET.get('q', '').strip()
        if buscar:
            queryset = queryset.filter(
                Q(placa__icontains=buscar) |
                Q(marca__icontains=buscar) |
                Q(modelo__icontains=buscar)
            )

        # 2. Replicar list_filter ('disponible', 'combustible')
        disponible = self.request.GET.get('disponible')
        if disponible in ['true', 'false']:
            queryset = queryset.filter(disponible=(disponible == 'true'))

        combustible = self.request.GET.get('combustible')
        if combustible:
            queryset = queryset.filter(combustible=combustible)

        return queryset

    def get_context_data(self, **kwargs):
        """Mantiene los parámetros de búsqueda al paginar."""
        context = super().get_context_data(**kwargs)
        context['q'] = self.request.GET.get('q', '')
        context['disponible'] = self.request.GET.get('disponible', '')
        context['combustible'] = self.request.GET.get('combustible', '')
        return context


class VehiculoDetailView(LoginRequiredMixin, DetailView):
    model = Vehiculo
    template_name = 'panel/vehiculo_detail.html'
    context_object_name = 'vehiculo'


class VehiculoCreateView(LoginRequiredMixin, SuccessMessageMixin, CreateView):
    model = Vehiculo
    form_class = VehiculoForm
    template_name = 'panel/vehiculo_form.html'
    success_url = reverse_lazy('panel:vehiculo_list')
    success_message = "El vehículo %(placa)s fue registrado exitosamente."


class VehiculoUpdateView(LoginRequiredMixin, SuccessMessageMixin, UpdateView):
    model = Vehiculo
    form_class = VehiculoForm
    template_name = 'panel/vehiculo_form.html'
    success_url = reverse_lazy('panel:vehiculo_list')
    success_message = "El vehículo %(placa)s fue actualizado correctamente."


class VehiculoDeleteView(LoginRequiredMixin, SuccessMessageMixin, DeleteView):
    model = Vehiculo
    template_name = 'panel/vehiculo_confirm_delete.html'
    success_url = reverse_lazy('panel:vehiculo_list')
    success_message = "El registro vehicular fue eliminado satisfactoriamente."
```

---

### 3. Rutas del Panel (`urls.py`)

```python title="urls.py" showLineNumbers
from django.urls import path
from . import views

app_name = 'panel'

urlpatterns = [
    path('vehiculos/', views.VehiculoListView.as_view(), name='vehiculo_list'),
    path('vehiculos/nuevo/', views.VehiculoCreateView.as_view(), name='vehiculo_create'),
    path('vehiculos/<int:pk>/', views.VehiculoDetailView.as_view(), name='vehiculo_detail'),
    path('vehiculos/<int:pk>/editar/', views.VehiculoUpdateView.as_view(), name='vehiculo_update'),
    path('vehiculos/<int:pk>/eliminar/', views.VehiculoDeleteView.as_view(), name='vehiculo_delete'),
]
```

:::tip Vincular en el urls.py principal
Recuerda incluir las rutas de tu aplicación en el archivo `urls.py` de la raíz del proyecto Django:
```python title="mi_proyecto/urls.py"
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('panel/', include('tu_app.urls')),
]
```
:::
