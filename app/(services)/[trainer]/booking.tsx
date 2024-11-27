import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar } from "react-native-calendars";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCheckCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

export default function BookingScreen() {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = [
    { time: "8:00 AM", status: "available" },
    { time: "9:00 AM", status: "booked" },
    { time: "10:00 AM", status: "available" },
    { time: "11:00 AM", status: "available" },
    { time: "12:00 PM", status: "booked" },
    { time: "1:00 PM", status: "available" },
    { time: "2:00 PM", status: "booked" },
    { time: "3:00 PM", status: "available" },
    { time: "4:00 PM", status: "available" }
  ];

  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time to confirm your booking.");
      return;
    }

    alert(`Booking confirmed for ${selectedDate} at ${selectedTime}`);
    navigation.goBack(); // Navigate back after booking
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Book Appointment",
      headerTitleAlign: "center" // Centers the header title
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Calendar Section */}
        <Text style={styles.sectionTitle}>Select Date</Text>
        <Calendar
          onDayPress={(day: {
            dateString: React.SetStateAction<string | null>;
          }) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate || ""]: {
              selected: true,
              selectedColor: "#1E90FF"
            }
          }}
          theme={{
            todayTextColor: "#FF6347",
            selectedDayBackgroundColor: "#1E90FF",
            selectedDayTextColor: "#FFF"
          }}
        />

        {/* Time Slots */}
        <Text style={styles.sectionTitle}>Select Time</Text>
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <FontAwesomeIcon icon={faCheckCircle} size={16} color="#4CAF50" />
            <Text style={styles.legendText}>Available</Text>
          </View>
          <View style={styles.legendItem}>
            <FontAwesomeIcon icon={faTimesCircle} size={16} color="#FF6347" />
            <Text style={styles.legendText}>Booked</Text>
          </View>
        </View>
        <View style={styles.timeSlotsContainer}>
          {timeSlots.map((slot) => (
            <TouchableOpacity
              key={slot.time}
              style={[
                styles.timeSlotChip,
                slot.status === "booked" && styles.bookedChip,
                selectedTime === slot.time &&
                  slot.status === "available" &&
                  styles.selectedChip
              ]}
              onPress={() =>
                slot.status === "available" && setSelectedTime(slot.time)
              }
              disabled={slot.status === "booked"} // Disable selection for booked slots
            >
              <FontAwesomeIcon
                icon={
                  slot.status === "available" ? faCheckCircle : faTimesCircle
                }
                size={14}
                color={slot.status === "available" ? "#4CAF50" : "#FF6347"}
                style={styles.icon}
              />
              <Text
                style={[
                  styles.chipText,
                  slot.status === "booked" && styles.bookedChipText,
                  selectedTime === slot.time &&
                    slot.status === "available" &&
                    styles.selectedChipText
                ]}
              >
                {slot.time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Confirm Booking */}
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleConfirmBooking}
        >
          <Text style={styles.confirmButtonText}>Confirm Booking</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9F9F9"
  },
  container: {
    padding: 16
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333"
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 12
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16
  },
  legendText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#333"
  },
  timeSlotsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  timeSlotChip: {
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    flexGrow: 1,
    alignItems: "center",
    marginHorizontal: 5,
    flexDirection: "row"
  },
  bookedChip: {
    backgroundColor: "#FFD6D6"
  },
  chipText: {
    color: "#333",
    fontSize: 14,
    marginLeft: 8
  },
  bookedChipText: {
    color: "#FF6347",
    fontWeight: "bold"
  },
  selectedChip: {
    backgroundColor: "#1E90FF"
  },
  selectedChipText: {
    color: "#FFF",
    fontWeight: "bold"
  },
  confirmButton: {
    backgroundColor: "#1E90FF",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20
  },
  confirmButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  },
  icon: {
    marginRight: 8
  }
});
