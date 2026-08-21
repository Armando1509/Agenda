import { StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Spacing } from "@/constants/theme";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="default">
        Bienvenido ¿Qué haremos el dia de hoy?
      </ThemedText>
      <Button
        title="Calendario"
        onPress={() => router.push("/calendario")}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.two,
    padding: Spacing.four,
  },
});
