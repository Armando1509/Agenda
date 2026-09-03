import { View, Modal, Pressable, Alert, TextInput } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function CitasScreen() {
  const { fecha } = useLocalSearchParams<{ fecha: string }>();
  const [modal, setModal] = useState(false);

  const [citas, setCitas] = useState([
    {
      id: "1",
      title: "Cita con el doctor",
      person: "Dr. Smith",
      place: "Clínica ABC",
      date: "2026-09-05",
      time: "10:00 AM",
      description: "Chequeo general",
    },
  ]);
  const [title, setTitle] = useState("");
  const [person, setPerson] = useState("");
  const [place, setPlace] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

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
      <Modal
        animationType="slide"
        visible={modal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModal(!modal);
        }}
      >
        <View>
          <Pressable onPress={() => setModal(!modal)}>
            <ThemedText type="link">Cerrar</ThemedText>
            <ThemedText
              type="title"
              style={{ alignSelf: "center", marginTop: 20 }}
            >
              Agregar cita
            </ThemedText>
            <ThemedText style={styles.label}>Titulo de la cita</ThemedText>
            <TextInput
              style={styles.input}
              placeholder="Ingrese el título de la cita"
              onChangeText={(text) => setTitle(text)}
              value={title}
            />
            <ThemedText style={styles.label}>Persona</ThemedText>
            <TextInput
              style={styles.input}
              placeholder="Ingrese el nombre de la persona"
              onChangeText={(text) => setPerson(text)}
              value={person}
            />
            <ThemedText style={styles.label}>Lugar</ThemedText>
            <TextInput
              style={styles.input}
              placeholder="Ingrese el lugar de la cita"
              onChangeText={(text) => setPlace(text)}
              value={place}
            />
            <ThemedText style={styles.label}>Fecha {fecha}</ThemedText>

            <ThemedText style={styles.label}>Hora</ThemedText>
            <TextInput
              style={styles.input}
              placeholder="Ingrese la hora de la cita"
              onChangeText={(text) => setTime(text)}
              value={time}
            />
            <ThemedText style={styles.label}>Descripcion</ThemedText>
            <TextInput
              style={styles.input}
              placeholder="Ingrese la descripción de la cita"
              onChangeText={(text) => setDescription(text)}
              value={description}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              const nuevaCita = {
                id: (citas.length + 1).toString(),
                title,
                person,
                place,
                date: fecha,
                time,
                description,
              };
              setCitas([...citas, nuevaCita]);
              setModal(false);
            }}
          >
            <ThemedText type="link">Guardar cita</ThemedText>
          </Pressable>
        </View>
      </Modal>

      <Pressable onPress={() => setModal(true)}>
        <ThemedText type="link">Agregar cita</ThemedText>
      </Pressable>
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
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    alignSelf: "center",
  },
});
