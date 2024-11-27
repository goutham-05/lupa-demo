import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import {
  faBell,
  faMapMarkerAlt,
  faCog,
  faLink,
  faQuestionCircle,
  faInfoCircle,
  faTrashAlt,
  faSignOutAlt,
  faChevronRight,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "expo-router";

export default function Profile() {
  const navigation = useNavigation();

  const profileOptions = [
    {
      label: "Complete Profile",
      icon: faUserPlus
      //   onPress: () => navigation.navigate("/(user)/completeProfile/profileSummary")
    },
    { label: "Get Notifications", icon: faBell, onPress: () => {} },
    { label: "Location", icon: faMapMarkerAlt, onPress: () => {} },
    { label: "Account Setting", icon: faCog, onPress: () => {} },
    { label: "Linked Accounts", icon: faLink, onPress: () => {} },
    { label: "Help Center", icon: faQuestionCircle, onPress: () => {} },
    { label: "About Us", icon: faInfoCircle, onPress: () => {} },
    { label: "Delete Account", icon: faTrashAlt, onPress: () => {} },
    { label: "Logout", icon: faSignOutAlt, onPress: () => {} }
  ];

  const navigateToEditProfile = () => {
    // navigation.navigate("/(user)/EditProfile");
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/men/10.jpg"
            }}
            style={styles.brandLogo}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>John Doe</Text>
            <Text style={styles.userEmail}>johndoe@example.com</Text>
          </View>
        </View>

        {/* Edit Profile Button */}
        <TouchableOpacity
          style={styles.editProfileButton}
          onPress={navigateToEditProfile}
        >
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Options List */}
        <View style={styles.optionsContainer}>
          {profileOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={option.onPress}
              style={styles.option}
            >
              <View style={styles.optionLeft}>
                <FontAwesomeIcon
                  icon={option.icon}
                  size={20}
                  color="#03A9F4"
                  style={styles.optionIcon}
                />
                <Text style={styles.optionText}>{option.label}</Text>
              </View>
              <FontAwesomeIcon icon={faChevronRight} size={16} color="#999" />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#F9F9F9"
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40
  },
  brandLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
    borderWidth: 2,
    borderColor: "#03A9F4"
  },
  userInfo: {
    flex: 1
  },
  userName: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 4,
    color: "#333"
  },
  userEmail: {
    fontSize: 16,
    color: "#666"
  },
  editProfileButton: {
    backgroundColor: "#03A9F4",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 30
  },
  editProfileButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  },
  optionsContainer: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: "hidden"
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0"
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  optionIcon: {
    marginRight: 12
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333"
  }
});
