import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCalendarAlt,
  faStar,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { professionals } from "@/constants/MockData";

export default function ProfessionalsScreen() {
  const { serviceName } = useLocalSearchParams();
  const router = useRouter();

  const handleSelect = (id: number) => {
    router.push({
      pathname: `/[trainer]`,
      params: { trainer: id.toString() }
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {professionals.map((professional) => (
          <TouchableOpacity
            key={professional.id}
            style={styles.cardWrapper}
            onPress={() => handleSelect(professional.id)}
            activeOpacity={0.8}
          >
            <View style={styles.card}>
              <Image
                source={{ uri: professional.image }}
                style={styles.avatar}
              />
              <View style={styles.info}>
                <Text style={styles.name}>{professional.name}</Text>
                <Text style={styles.role}>{professional.role}</Text>
                <View style={styles.ratingContainer}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FontAwesomeIcon
                      key={star}
                      icon={faStar}
                      size={14}
                      color="#FFD700"
                    />
                  ))}
                  <Text style={styles.ratingText}>
                    {professional.stats.rating}
                  </Text>
                </View>
                <View style={styles.availabilityContainer}>
                  <View style={styles.availability}>
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      size={14}
                      color="#4CAF50"
                    />
                    <Text style={styles.availabilityText}>
                      {professional.availability.days}
                    </Text>
                  </View>
                  <View style={styles.availability}>
                    <FontAwesomeIcon icon={faClock} size={14} color="#4CAF50" />
                    <Text style={styles.availabilityText}>
                      {professional.availability.time}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F0F4F8"
  },
  container: {
    padding: 16
  },
  cardWrapper: {
    marginBottom: 16
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#DDD"
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333"
  },
  role: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: "600",
    color: "#333"
  },
  availabilityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8
  },
  availability: {
    flexDirection: "row",
    alignItems: "center"
  },
  availabilityText: {
    fontSize: 14,
    color: "#333",
    marginLeft: 8
  }
});
