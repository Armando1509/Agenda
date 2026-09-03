# Progreso del curso — App "Agenda" (Expo SDK 57)

> Archivo de estudio para retomar sesiones con el tutor. Actualizado al: 26/08/2026

## Rol del asistente
Tutor: NO dar código resuelto de la app; guiar con preguntas, conceptos y revisión
de tareas. El estudiante escribe el código.

## Estado actual
- [x] Proyecto creado (Expo + expo-router, estructura `src/app`)
- [x] Pantalla Inicio (`src/app/index.tsx`) con botón → /calendario
- [x] Navegación Stack en `src/app/_layout.tsx`
- [x] Calendario visible con `react-native-calendars` (`src/app/calendario.tsx`)
- [x] Tipo `Cita` definido por el estudiante en `src/types/cita.ts`:
      id, title, person, place, date (string), time (string), description
      Fechas/hora como TEXTO porque el calendario entrega `dateString` ya en texto.
- [x] Navegación desde calendario a pantalla de citas (`src/app/citas/[fecha].tsx`)
      usando `router.push` con `Href` y `useLocalSearchParams` para recibir la fecha
- [x] Pantalla de citas muestra fecha recibida por URL
- [x] Citas hardcodeadas con `filter` para mostrar solo las del día seleccionado
- [x] Mensaje condicional "No tienes citas para esta fecha" usando `&&`
- [ ] Modal de agregar cita (creado pero pendiente: corregir `visible` y agregar formulario)

## Conceptos vistos
- type/interface = contrato o formato en blanco (NO transforma datos)
- objeto = instancia llena según ese formato
- El calendario entrega dateString (texto) y timestamp (Número); usamos dateString
- useState para estados locales (fechas, modales)
- Array.filter() para seleccionar elementos por condición
- Array.map() para convertir datos en componentes JSX
- Renderizado condicional con `&&` (si hay citas, mostrarlas; si no, mostrar mensaje)
- Rutas dinámicas en expo-router: `[parametro].tsx` con corchetes
- `useLocalSearchParams` para obtener parámetros de la URL
- `router.push()` con tipo `Href` para navegación imperative
- Template literals para construir rutas: `` `/citas/${day.dateString}` ``

## Próximo paso (donde nos quedamos)
Corregir y completar el Modal de nueva cita:
1. Cambiar `visible={!modal}` por `visible={modal}` en el Modal
2. Agregar formulario dentro del Modal (TextInput para título, persona, lugar, hora, descripción)
3. Crear función para agregar nueva cita al array
4. Mover las citas hardcodeadas a un useState<Cita[]> para poder agregar nuevas

## Notas del entorno
- AGENTS.md exige consultar docs v57 de Expo antes de escribir código
- Servidor Metro: logs en `.expo/dev/logs/start.log`
