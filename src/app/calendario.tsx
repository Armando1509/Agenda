import { Calendar } from "react-native-calendars";
import { useState } from "react";
import { useRouter, Href } from "expo-router";

import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function CalendarioScreen() {
  const [selectedDate, setSelectedDate] = useState<{dateString: string}>({dateString: ""});
  const router = useRouter();
  
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="default">
        Aquí puedes ver tu calendario y tus eventos.
      </ThemedText>
      <Calendar
        onDayPress={(day) => {
          
          
          setSelectedDate(day)
          router.push(`/citas/${day.dateString}`as Href)
        }}
        
      />
      <ThemedText type="default">
        Aqui esta la fecha en objeto: {JSON.stringify(selectedDate)}
      </ThemedText>
      <ThemedText type="default"> Aqui esta la pura fecha: {selectedDate.dateString} </ThemedText>
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
