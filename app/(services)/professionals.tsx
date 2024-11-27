import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfessionalsScreen() {
  const { serviceName } = useLocalSearchParams();
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Select Trainer",
      headerTitleAlign: "center" // Centers the title in the app header
    });
  }, [navigation]);

  const professionals = [
    {
      id: 1,
      name: "John Doe",
      role: "Pet Trainer",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      availability: {
        days: "Mon-Fri",
        time: "8 a.m - 5 p.m"
      }
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Pet Walker",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      availability: {
        days: "Tue-Sat",
        time: "9 a.m - 6 p.m"
      }
    },
    {
      id: 3,
      name: "Jane Smith",
      role: "Pet Walker",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      availability: {
        days: "Tue-Sat",
        time: "9 a.m - 6 p.m"
      }
    },
    {
      id: 4,
      name: "Jane Smith",
      role: "Pet Walker",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      availability: {
        days: "Tue-Sat",
        time: "9 a.m - 6 p.m"
      }
    },
    {
      id: 5,
      name: "Jane Smith",
      role: "Pet Walker",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      availability: {
        days: "Tue-Sat",
        time: "9 a.m - 6 p.m"
      }
    },
    {
      id: 6,
      name: "Jane Smith",
      role: "Pet Walker",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      availability: {
        days: "Tue-Sat",
        time: "9 a.m - 6 p.m"
      }
    },
    {
      id: 7,
      name: "Jane Smith",
      role: "Pet Walker",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      availability: {
        days: "Tue-Sat",
        time: "9 a.m - 6 p.m"
      }
    },
    {
      id: 8,
      name: "Jane Smith",
      role: "Pet Walker",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      availability: {
        days: "Tue-Sat",
        time: "9 a.m - 6 p.m"
      }
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {professionals.map((professional) => (
          <View key={professional.id} style={[styles.card, styles.shadow]}>
            <Image source={{ uri: professional.image }} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.name}>{professional.name}</Text>
              <Text style={styles.role}>{professional.role}</Text>
              <View style={styles.availability}>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  size={16}
                  color="#4CAF50"
                />
                <Text style={styles.days}>
                  {professional.availability.days}
                </Text>
                <Text style={styles.time}>
                  {professional.availability.time}
                </Text>
              </View>
            </View>
          </View>
        ))}
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
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4
  },
  role: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8
  },
  availability: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  days: {
    fontSize: 14,
    color: "#333",
    marginLeft: 8,
    flex: 1
  },
  time: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333"
  }
});
