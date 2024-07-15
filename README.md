# Resumen del Proyecto

## Tecnologías Utilizadas

1. **Expo CLI**: Para la configuración inicial del proyecto y facilidad en el desarrollo.
2. **TypeScript**: Para una mejor tipificación y seguridad en el código.
3. **Styled Components**: Para estilizar los componentes de manera modular y reutilizable.
4. **Redux Toolkit**: Para la gestión del estado global de la aplicación.
5. **RTK Query**: Para manejar llamadas a API y datos asíncronos.
6. **React Navigation**: Para la navegación entre pantallas en la aplicación.

## Patrones de Diseño

1. **MVVM (Model-View-ViewModel)**: Para la separación de la lógica de presentación y los datos.
2. **Factory Method**: Crear componentes de manera dinámica.
3. **Adapter**: Transformar datos para que se adapten a la interfaz de los componentes.
4. **Observer**: Utilizar Redux para notificar cambios en el estado.
5. **Composición**: Favorecer la composición de componentes en lugar de la herencia.

## Metodologías y Principios

1. **Atomic Design**: Para estructurar los componentes en átomos, moléculas, organismos, plantillas y páginas.
2. **BEM/BEMIT**: Para la nomenclatura y organización de estilos con Styled Components.
3. **Principios SOLID y DRY**: Aplicar principios SOLID y DRY para mantener un código modular, limpio y reutilizable.
4. **Clean Architecture**: Dividir la aplicación en capas como Presentación, Dominio y Datos, asegurando que las dependencias siempre apunten hacia el dominio y no hacia la presentación.
5. **Micro Frontends**: Considerar la escalabilidad y la posibilidad de dividir la aplicación en micro frontends.

## Pasos Realizados

1. **Configuración del Proyecto de Expo:**
   - Creación del proyecto de Expo con TypeScript.
   - Instalación de las dependencias necesarias (Redux Toolkit, Styled Components, React Navigation).

2. **Implementación de Mocks y API:**
   - Creación de mocks para simular los endpoints usando los archivos JSON proporcionados.
   - Configuración de RTK Query para manejar las llamadas a la API utilizando los mocks.

3. **Desarrollo de la UI y Funcionalidad:**
   - Implementación de los componentes, hooks, modelos y pantallas siguiendo la estructura definida.
   - Desarrollo de la interfaz de búsqueda de vuelos y los resultados de búsqueda.
   - Implementación de la pantalla de detalles del vuelo.

4. **Configuración de Redux:**
   - Configuración de la store y los slices para manejar el estado global de la aplicación.
   - Implementación de la lógica para agregar y eliminar vuelos favoritos.

5. **Configuración de Navegación:**
   - Configuración de React Navigation para manejar la navegación entre pantallas.
   - Implementación de la navegación entre la búsqueda de vuelos, los resultados y los detalles del vuelo.

## Próximos Pasos

1. **Pruebas y Validación:**
   - Realizar pruebas unitarias y de integración para asegurar el correcto funcionamiento de la aplicación.
   - Validar la navegación y el flujo de datos entre pantallas.

2. **Optimización y Mejora:**
   - Optimizar el rendimiento de la aplicación.
   - Mejorar la interfaz de usuario basándose en feedback.

3. **Documentación:**
   - Documentar el código y los componentes.
   - Crear guías de uso y configuración para futuros desarrolladores.

## Retos y Limitaciones

1. **Paso de Datos entre Pantallas:**
   - Hubo desafíos al pasar datos entre pantallas utilizando React Navigation.
   - Se resolvió utilizando Redux para manejar el estado global y compartir datos entre componentes.

2. **Tiempo y Alcance:**
   - Debido a limitaciones de tiempo, algunas funcionalidades planificadas no se implementaron completamente.
   - La interfaz de usuario puede beneficiarse de mejoras y optimizaciones adicionales.

## Problemas con la Instalación de Dependencias

Si encuentras problemas al instalar las dependencias del repositorio, puedes utilizar **npm** o **yarn** para instalar los paquetes necesarios.

### Usando npm:

```sh
npm install
```
### Contacto:

**José Guadalupe Montiel Vargas**

- Página web: [https://josemontiel.netlify.app/](https://josemontiel.netlify.app/)
- HackerRank: [https://www.hackerrank.com/profile/josemontielv_96](https://www.hackerrank.com/profile/josemontielv_96)
