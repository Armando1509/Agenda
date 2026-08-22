# Progreso del curso — App "Agenda" (Expo SDK 57)

> Archivo de estudio para retomar sesiones con el tutor. Actualizado al: 21/08/2026

## Rol del asistente
Tutor: NO dar código resuelto de la app; guiar con preguntas, conceptos y revisión
de tareas. El estudiante escribe el código.

## Estado actual
- [x] Proyecto creado (Expo + expo-router, estructura `src/app`)
- [x] Pantalla Inicio (`src/app/index.tsx`) con botón → /calendario
- [x] Navegación Stack en `src/app/_layout.tsx`
- [x] Calendario visible con `react-native-calendars` (`src/app/calendario.tsx`),
      actualmente solo hace console.log del día presionado
- [x] Tipo `Cita` definido por el estudiante en `src/types/cita.ts`:
      id, title, person, place, date (string), time (string), description
      Fechas/hora como TEXTO ("2026-08-21", "14:30") porque el calendario entrega
      `dateString` ya en texto. Sin conversiones.

## Conceptos vistos
- type/interface = contrato o formato en blanco (NO transforma datos)
- objeto = instancia llena según ese formato
- El calendario entrega dateString (texto) y timestamp (número); usamos dateString

## Próximo paso (donde nos quedamos)
Usar `useState` en calendario.tsx para guardar citas reales:
1. Estudiante debe investigar qué devuelve useState y cómo se actualiza su valor
2. Luego: al presionar un día, actualizar estado en vez de console.log
3. Después: mostrar las citas del día seleccionado en pantalla

## Notas del entorno
- AGENTS.md exige consultar docs v57 de Expo antes de escribir código
- Servidor Metro: logs en `.expo/dev/logs/start.log`
