import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import HospitalDetail from "../components/HospitalDetail";

const Hospital = ({ route, navigation }) => {
  console.log(navigation, route);
  return (
    <View>
      <View style={style.headingContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <ImageBackground
            source={require("../assets/ic-left.png")}
            style={style.icLeft}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={style.heading}>
          <Text style={style.headingText}>Vet Hospital List</Text>
        </View>
      </View>
      <View style={style.sectionTitle}>
        <Text style={style.sectionTitleText}>Find a Vet</Text>
        <TouchableOpacity>
          <ImageBackground
            source={require("../assets/mapVersion.png")}
            style={style.sectionTitleImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <View style={style.search}>
        <View style={style.searchBar}>
          <Text style={style.searchBarText}>Search for a vet</Text>
          <ImageBackground
            source={require("../assets/searchForVet.png")}
            style={style.searchBarImage}
            resizeMode="cover"
          />
        </View>
        <View style={style.searchBarDesc}>
          <Text style={style.searchBarDescText}>
            Enter a location or specific services
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          top: 115,
          gap: 4,
          left: 12,
        }}
      >
        <TouchableOpacity style={style.filterButtons}>
          <Text style={style.serviceText}>Sort by</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.filterButtons}>
          <Text style={style.serviceText}>Vet Hospital</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.filterButtons}>
          <Text style={style.serviceText}>Open Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.filterButtons}>
          <Text style={style.serviceText}>Distance</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "col", gap: 15 }}>
        <HospitalDetail />
        <HospitalDetail />
      </View>
    </View>
  );
};

export default Hospital;

const style = StyleSheet.create({
  headingContainer: {
    width: 390,
    height: 48,
    top: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  icLeft: {
    left: 8,
    top: 12,
    width: 24,
    height: 24,
    alignItems: "center",
    cursor: "Pointer",
  },
  heading: {
    position: "absolute",
    left: 40,
    top: 12,
    width: 310,
    height: 24,
  },
  headingText: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: 700,
  },
  sectionTitle: {
    left: 3,
    top: 77,
    width: 390,
    height: 40,
  },
  sectionTitleText: {
    fontFamily: "Roboto",
    fontSize: 18,
    lineHeight: 24,
    left: 12,
  },
  sectionTitleImage: {
    width: 94,
    height: 22,
    left: 284,
    top: -22,
  },
  search: {
    left: 3,
    top: 100,
    width: 390,
    height: 55,
  },
  searchBar: {
    left: 12,
    width: 366,
    height: 36,
    borderRadius: 6,
    border: "1px solid black",
  },
  searchBarText: {
    left: 12,
    top: 8,
    fontFamily: "Roboto",
    fontSize: 14,
    lineHeight: 20,
    color: "rgba(0, 0, 0, 0.50)",
  },
  searchBarImage: {
    left: 326,
    top: 3.5,
    width: 36,
    height: 28,
    position: "absolute",
  },
  searchBarDesc: {
    position: "absolute",
    left: 12,
    top: 40,
    width: 366,
    height: 16,
  },
  searchBarDescText: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.50)",
  },
  filterButtons: {
    cursor: "Pointer",
    width: 88,
    height: 28,
    borderRadius: 10,
    border: "1px solid rgba(0, 0, 0, 0.50)",
  },
  serviceText: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.50)",
    textAlign: "center",
    top: 3,
  },
});
