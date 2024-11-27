import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import {
  faBaby,
  faBone,
  faCar,
  faCut,
  faGraduationCap,
  faHome,
  faShoppingBag,
  faStethoscope,
  faWalking,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.headerBackground, styles.shadow]}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.userIcon}>
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/men/32.jpg"
                }}
                style={styles.avatarImage}
              />
            </TouchableOpacity>

            <View style={styles.locationContainer}>
              <Text style={styles.locationTitle}>Your Location</Text>
              <View style={styles.locationDetails}>
                <FontAwesomeIcon icon={faHome} size={16} color="#4CAF50" />
                <Text style={styles.locationText}>Edinburgh, UK</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.searchIcon}>
              <FontAwesomeIcon icon={faSearch} size={24} color="#6C63FF" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.servicesContainer, styles.shadow]}>
          <View style={styles.messageRow}>
            <View style={styles.messageText}>
              <Text style={styles.messageTitle}>
                Pet services at your fingertips
              </Text>
              <Text style={styles.description}>
                Find the best services for your furry friends, all in one place.
              </Text>
            </View>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop"
              }}
              style={styles.petImage}
            />
          </View>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contact Us</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.servicesContainer, styles.shadow]}>
          <Text style={styles.sectionTitle}>Our Services</Text>
          <View style={styles.servicesGrid}>
            {[
              { id: 1, name: "Grooming", icon: faCut, color: "#F57C00" },
              {
                id: 2,
                name: "Vet Care",
                icon: faStethoscope,
                color: "#0288D1"
              },
              { id: 3, name: "Walking", icon: faWalking, color: "#8E24AA" },
              {
                id: 4,
                name: "Training",
                icon: faGraduationCap,
                color: "#388E3C"
              },
              { id: 5, name: "Boarding", icon: faHome, color: "#6A1B9A" },
              { id: 6, name: "Pet Sitting", icon: faBaby, color: "#D32F2F" },
              { id: 7, name: "Pet Taxi", icon: faCar, color: "#FBC02D" },
              { id: 8, name: "Pet Food", icon: faBone, color: "#03A9F4" },
              {
                id: 9,
                name: "Accessories",
                icon: faShoppingBag,
                color: "#FF9800"
              }
            ].map((service) => (
              <TouchableOpacity
                key={service.id}
                style={[
                  styles.actionCard,
                  { backgroundColor: service.color + "22" }
                ]}
              >
                <FontAwesomeIcon
                  icon={service.icon}
                  size={32}
                  color={service.color}
                />
                <Text
                  style={styles.actionText}
                  numberOfLines={2} // Limits to 2 lines
                  adjustsFontSizeToFit // Dynamically adjusts font size if text overflows
                  minimumFontScale={0.8} // Sets a minimum scale for font resizing
                >
                  {service.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={[styles.myPetsContainer, styles.shadow]}>
          <Text style={styles.sectionTitle}>My Pets</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              {
                name: "Buddy",
                details: "Male • 2 years • 5 kg",
                image:
                  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974&auto=format&fit=crop"
              },
              {
                name: "Luna",
                details: "Female • 3 years • 4 kg",
                image:
                  "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=2187&auto=format&fit=crop"
              },
              {
                name: "Max",
                details: "Male • 1 year • 3 kg",
                image:
                  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop"
              }
            ].map((pet, index) => (
              <View key={index} style={styles.petCard}>
                <Image
                  source={{ uri: pet.image }}
                  style={styles.petCardImage}
                />
                <Text style={styles.petName}>{pet.name}</Text>
                <Text style={styles.petDetails}>{pet.details}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  messageTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8
  },
  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22
  },
  contactButton: {
    alignSelf: "flex-start",
    backgroundColor: "#6C63FF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2
  },
  contactButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
    textTransform: "uppercase"
  },

  safeArea: {
    flex: 1,
    backgroundColor: "#F9F9F9"
  },
  container: {
    flexGrow: 1,
    padding: 16
  },
  servicesContainer: {
    marginBottom: 32,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20, // Ensures equal padding on all sides
    elevation: 2 // Shadow for a subtle elevation
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16
  },
  messageText: {
    flex: 2,
    paddingRight: 16
  },

  petImage: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "cover"
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4
  },
  headerBackground: {
    backgroundColor: "#6C63FF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center"
  },
  avatarImage: {
    width: 46,
    height: 46,
    borderRadius: 23
  },
  locationContainer: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 8
  },
  locationTitle: {
    fontSize: 12,
    color: "#FFF",
    marginBottom: 4
  },
  locationDetails: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12
  },
  locationText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#FFF"
  },
  searchIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center"
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333"
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  actionCard: {
    width: "32%", // Consistent width
    aspectRatio: 1, // Maintains square shape
    borderRadius: 12,
    justifyContent: "center", // Centers items vertically
    alignItems: "center", // Centers items horizontally
    marginBottom: 16, // Space between cards
    padding: 12 // Ensures equal padding on all sides
  },
  actionText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    flexWrap: "wrap", // Ensures text wraps within available space
    width: "100%", // Ensures text stays within card bounds
    lineHeight: 16 // Consistent line height
  },

  myPetsContainer: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 20
  },
  petCard: {
    width: width * 0.4,
    marginRight: 16,
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 16,
    padding: 16
  },
  petCardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8
  },
  petName: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4
  },
  petDetails: {
    color: "#6C6C6C",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20
  }
});
