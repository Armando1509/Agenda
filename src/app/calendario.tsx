import { StyleSheet } from 'react-native';
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function CalendarioScreen() {

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Calendario</ThemedText>
      <ThemedText type="default">Aquí puedes ver tu calendario y tus eventos.</ThemedText>
    </ThemedView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
      },
  
});

