import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { useState } from 'react';


import { StyleSheet } from 'react-native';
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function CalendarioScreen() {

  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="default">Aquí puedes ver tu calendario y tus eventos.</ThemedText>
      <Calendar
      onDayPress={day => {
        /* console.log('selected day', day); */
        setSelectedDate(day.dateString);
        console.log('esto es lo que me esta arrojando', selectedDate);
      }}
      />
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

