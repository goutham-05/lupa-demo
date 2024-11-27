import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMapMarkerAlt,
  faStar,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";

const mockHospitals = [
  {
    id: 1,
    name: "Happy Paws Veterinary Clinic",
    image:
      "https://media.istockphoto.com/id/1958114126/photo/winter-sheep-flock.webp?a=1&b=1&s=612x612&w=0&k=20&c=tyz8x6kOgeEYzbRwuJFzw5sO0RsMxcUAvGrZTVVLkzc=",
    distance: "2.1 km",
    rating: "4.8",
    address: "123 Pet St, Petville, PV 56789",
    contact: "+1 234 567 890"
  },
  {
    id: 2,
    name: "Furry Friends Animal Hospital",
    image:
      "https://media.istockphoto.com/id/1214343887/photo/veterinarian-for-cattle-and-livestock.jpg?s=612x612&w=0&k=20&c=MV67Xdx6hTnCMrBNN2MvicLaC8aJQwS8ZkTb5UGka4g=",
    distance: "3.5 km",
    rating: "4.5",
    address: "456 Bark Ave, Barktown, BT 12345",
    contact: "+1 987 654 321"
  },
  {
    id: 3,
    name: "TailWaggers Vet Center",
    image:
      "https://media.istockphoto.com/id/1995860804/photo/vet-holds-happy-dog-for-checkup.jpg?s=612x612&w=0&k=20&c=QatXryr91b3YfdredBAUqk_nYqfn45Wf2iXSiZwSgrI=",
    distance: "4.0 km",
    rating: "4.7",
    address: "789 Meow Lane, CatCity, CC 56789",
    contact: "+1 345 678 901"
  },
  {
    id: 4,
    name: "Paws & Claws Animal Clinic",
    image:
      "https://media.istockphoto.com/id/2160346668/photo/red-haired-cat-with-sunglasses-at-the-table-looks-at-the-camera-red-juice-on-the-table-blue.jpg?s=612x612&w=0&k=20&c=_h8PNRwOQLaywrP4p5zX8_wM96LEPJZ-jCd2nmhGbTQ=",
    distance: "5.0 km",
    rating: "4.9",
    address: "789 Meow Lane, CatCity, CC 56789",
    contact: "+1 345 678 901"
  }
];

export default function ExploreScreen() {
  const renderHospitalCard = ({
    item
  }: {
    item: (typeof mockHospitals)[0];
  }) => (
    <View style={styles.card}>
      {/* Image */}
      <Image source={{ uri: item.image }} style={styles.hospitalImage} />

      {/* Details */}
      <View style={styles.cardContent}>
        {/* Name and Rating */}
        <View style={styles.cardHeader}>
          <Text style={styles.hospitalName}>{item.name}</Text>
          <View style={styles.ratingRow}>
            <FontAwesomeIcon icon={faStar} size={16} color="#FFD700" />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>

        {/* Address and Distance in one row */}
        <View style={styles.locationRow}>
          <FontAwesomeIcon icon={faMapMarkerAlt} size={16} color="#FB3640" />
          <Text style={styles.address} numberOfLines={1}>
            {item.address}
          </Text>
          <Text style={styles.distance}>{item.distance}</Text>
        </View>

        {/* Contact Button */}
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => {
            alert(`Calling ${item.contact}`);
          }}
        >
          <FontAwesomeIcon icon={faPhoneAlt} size={16} color="#FFF" />
          <Text style={styles.contactButtonText}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Veterinary Hospitals</Text>
      <FlatList
        data={mockHospitals}
        renderItem={renderHospitalCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 16,
    paddingTop: 16
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#333"
  },
  listContainer: {
    gap: 16
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  hospitalImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover"
  },
  cardContent: {
    padding: 16
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12
  },
  hospitalName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  rating: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12
  },
  address: {
    fontSize: 14,
    color: "#666",
    marginLeft: 8,
    flex: 1
  },
  distance: {
    fontSize: 14,
    color: "#247BA0",
    fontWeight: "bold",
    marginLeft: 8
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E90FF",
    borderRadius: 5,
    paddingVertical: 10
  },
  contactButtonText: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: 8
  }
});
