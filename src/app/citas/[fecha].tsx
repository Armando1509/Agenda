import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function CitasScreen() {
  const { fecha } = useLocalSearchParams<{ fecha: string }>();
  const citas = [
    {
      id: 1,
      title: "Cita con el doctor",
      time: "10:00 AM",
      description: "Consulta médica de rutina",
      date: "2026-08-01",
    },

    {
      id: 2,
      title: "Cita con el dentista",
      time: "2:00 PM",
      description: "Limpieza dental programada",
      date: "2026-08-02",
    },
  ];

  const citasDelDia = citas.filter((cita) => cita.date === fecha);
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">{fecha}</ThemedText>
      <ThemedText type="default">
        Aquí puedes ver tus citas para la fecha seleccionada.
      </ThemedText>
      {citasDelDia.length === 0 && (
        <ThemedText type="subtitle" style={{ marginTop: 20 }}>
          No tienes citas para esta fecha.
        </ThemedText>
      )}
      {citasDelDia.map((cita, index) => (
        <View key={index} style={styles.citaContainer}>
          <ThemedText type="subtitle">{cita.title}</ThemedText>
          <ThemedText type="default">{cita.time}</ThemedText>
          <ThemedText type="default">{cita.description}</ThemedText>
        </View>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  citaContainer: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
  },
});
