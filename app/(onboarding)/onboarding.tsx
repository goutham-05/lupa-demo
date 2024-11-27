import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

const onboardingData = [
  {
    id: 1,
    image: require("@/assets/images/splash-new.png"),
    title: "Welcome to Pet Haven",
    description:
      "Your one-stop solution for finding the best services for your furry friends."
  },
  {
    id: 2,
    image: require("@/assets/images/screen-1.png"),
    title: "Caring for Every Pet",
    description:
      "From grooming to vet care, we provide services tailored to your pet's needs."
  },
  {
    id: 3,
    image: require("@/assets/images/screen-2.jpg"),
    title: "Book Anytime, Anywhere",
    description:
      "Easily book appointments and discover the nearest services with just a few taps."
  }
];

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      (flatListRef.current as FlatList<any>).scrollToIndex({
        index: currentIndex + 1
      }); // Scroll programmatically
    } else {
      router.replace("/"); // Navigate to the HomeScreen
    }
  };

  const flatListRef = React.useRef<FlatList>(null); // Reference to the FlatList

  const renderItem = ({
    item
  }: {
    item: { id: number; image: any; title: string; description: string };
  }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />

      {/* Pagination */}
      <View style={styles.pagination}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              currentIndex === index && styles.activeDot
            ]}
          />
        ))}
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>
          {currentIndex === onboardingData.length - 1 ? "Get Started" : "Next"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  slide: {
    width,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    resizeMode: "contain",
    marginBottom: 32
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 16
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 16
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 24
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#DDD",
    marginHorizontal: 5
  },
  activeDot: {
    backgroundColor: "#6C63FF"
  },
  nextButton: {
    backgroundColor: "#6C63FF",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 40
  },
  nextButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600"
  }
});
