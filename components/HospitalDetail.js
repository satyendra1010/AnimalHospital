import { StyleSheet, ImageBackground, View, Text } from "react-native";

const HospitalDetail = () => {
  return (
    <View style={style.container}>
      <View style={style.reactangle}></View>
      <View style={style.clinicName}>
        <Text>Animal Hospital</Text>
      </View>
      <View style={style.clinicAdd}>
        <Text>268 Park Ave,Town</Text>
      </View>
      <ImageBackground
        source={require("../assets/star.png")}
        resizeMode="contain"
        style={style.clinicRating}
      />
      <View style={style.clinicReview}>
        <Text>(426)</Text>
      </View>
      <ImageBackground
        source={require("../assets/location.png")}
        resizeMode="contain"
        style={style.clinicLoc}
      />
      <View style={style.clinicDistance}>
        <Text>1.5km</Text>
      </View>
      <View style={style.innerContainer}>
        <ImageBackground
          source={require("../assets/headphones.png")}
          style={style.headphones}
          resizeMode="contain"
        />
        <Text style={style.services}>Services Provides</Text>
        <ImageBackground
          source={require("../assets/bookAnAppointment.png")}
          style={style.book}
          resizeMode="contain"
        />
        <Text style={style.bookText}>Book an Appointment</Text>
        <ImageBackground
          source={require("../assets/map.png")}
          resizeMode="contain"
          style={style.map}
        />
      </View>
    </View>
  );
};

export default HospitalDetail;

const style = StyleSheet.create({
  container: {
    left: 14,
    top: 170,
    width: 363,
    height: 267,
    border: "1px solid white",
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  reactangle: {
    width: 88,
    height: 88,
    left: 40,
    top: 20,
    position: "absolute",
    backgroundColor: "#DADADA",
  },
  clinicName: {
    left: 168,
    top: 20,
    width: 160,
    height: 21,
  },
  clinicAdd: {
    left: 167,
    top: 20,
    width: 142,
    height: 21,
  },
  clinicRating: {
    left: 167,
    top: 30,
    width: 80,
    height: 14,
  },
  clinicReview: {
    left: 253,
    top: 14,
    width: 42,
    height: 17,
  },
  clinicLoc: {
    width: 25,
    height: 25,
    left: 161,
    top: 25,
  },
  clinicDistance: {
    left: 187,
    top: 10,
  },
  innerContainer: {
    left: 25,
    top: 20,
    width: 309,
    height: 102,
    borderRadius: 8,
    border: "1px solid #d2cfcf",
  },
  headphones: {
    left: 30,
    top: 20,
    width: 30,
    height: 30,
  },
  services: {
    left: 70,
  },
  book: {
    top: 18,
    left: 32,
    width: 25,
    height: 25,
  },
  bookText: {
    left: 70,
  },
  map: {
    width: 43,
    height: 20,
    left: 250,
    top: -50,
  },
});
