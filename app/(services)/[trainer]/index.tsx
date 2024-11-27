import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import { trainers } from "@/constants/MockData";

export default function TrainerDetailsScreen() {
  const { trainer } = useLocalSearchParams(); // Access trainer ID from route params
  const navigation = useNavigation();

  // Find the trainer based on the ID
  const trainerDetails = trainers.find((t) => t.id === trainer) || {
    name: "Trainer Not Found",
    role: "",
    image: "",
    bio: "We couldn't find details for this trainer.",
    stats: {
      years: "-",
      trainees: "-",
      rating: "-"
    },
    location: {
      address: "No Address Available",
      coordinates: null
    }
  };

  // Dynamically set the header options
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: trainerDetails.name, // Set the trainer's name as the header title
      headerTitleAlign: "center" // Center the header title
    });
  }, [navigation, trainerDetails.name]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={[styles.container, { paddingBottom: 100 }]} // Ensure padding for button visibility
        showsVerticalScrollIndicator={false}
      >
        {/* Trainer Info */}
        <View style={styles.infoContainer}>
          {trainerDetails.image ? (
            <Image
              source={{ uri: trainerDetails.image }}
              style={styles.avatar}
            />
          ) : (
            <Text style={styles.errorText}>No Image Available</Text>
          )}
          <Text style={styles.name}>{trainerDetails.name}</Text>
          <Text style={styles.role}>{trainerDetails.role}</Text>
          <Text style={styles.bio}>{trainerDetails.bio}</Text>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{trainerDetails.stats.years}</Text>
            <Text style={styles.statLabel}>Years</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>
              {trainerDetails.stats.trainees}
            </Text>
            <Text style={styles.statLabel}>Trainees</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{trainerDetails.stats.rating}</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>

        {/* Location Section */}
        <View style={styles.locationContainer}>
          <Text style={styles.sectionTitle}>Location</Text>
          <Text style={styles.address}>{trainerDetails.location.address}</Text>
          {trainerDetails.location.coordinates && (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: trainerDetails.location.coordinates.latitude,
                longitude: trainerDetails.location.coordinates.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
              }}
            >
              <Marker
                coordinate={trainerDetails.location.coordinates}
                title={trainerDetails.name}
                description={trainerDetails.role}
              />
            </MapView>
          )}
        </View>

        {/* Contact Section */}
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Book Appointment</Text>
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
    padding: 16,
    flexGrow: 1
  },
  infoContainer: {
    alignItems: "center",
    marginBottom: 24
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8
  },
  role: {
    fontSize: 18,
    color: "#666",
    marginBottom: 16
  },
  bio: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    lineHeight: 24
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24
  },
  stat: {
    alignItems: "center",
    flex: 1
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333"
  },
  statLabel: {
    fontSize: 14,
    color: "#666"
  },
  locationContainer: {
    marginBottom: 24
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8
  },
  address: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8
  },
  map: {
    height: 200,
    borderRadius: 8
  },
  contactButton: {
    backgroundColor: "#1E90FF",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 24
  },
  contactButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold"
  },
  errorText: {
    fontSize: 16,
    color: "#FF0000",
    marginBottom: 8
  }
});
