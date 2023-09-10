import {
  StyleSheet,
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { useState } from "react";
import FilterIcons from "../components/FilterIcons";
import DetailCard from "../components/DetailCard";
import Navbar from "./Navbar";

const Home = ({ navigation }) => {
  const [filter, setFilter] = useState(false);
  const [detail, setDetail] = useState(false);

  return (
    <View style={style.background}>
      <Navbar />
      <View style={{ top: 90 }}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <TouchableOpacity style={style.filters}>
            <Text style={style.filtersText}>Sort by</Text>
            <Image
              source={require("../assets/gridicons_dropdown.png")}
              resizeMode="contain"
              style={{ height: 19, width: 19 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={style.filters} >
            <Text style={style.filtersText}>Vet Hospital</Text>
            <Image
              source={require("../assets/gridicons_dropdown.png")}
              resizeMode="contain"
              style={{ height: 19, width: 19 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={style.filters}>
            <Text style={style.filtersText}>Open</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.filters}>
            <Text style={style.filtersText}>Distance</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View
        style={detail ? { display: "None" } : { display: "block" }}
        onClick={() => setFilter(!filter)}
      >
        <TouchableOpacity onPress={() => setFilter(!filter)}>
          {filter ? (
            <View style={style.openFilter}>
              <FilterIcons navigation={navigation} />
              <View style={style.searchEllipse1}></View>
              <View style={style.searchEllipse2}></View>
              <View style={style.searchEllipse3}></View>
              <View style={style.searchEllipse4}></View>
              <View>
                <ImageBackground
                  source={require("../assets/downArrow.png")}
                  resizeMode="cover"
                  style={style.downArrow}
                />
              </View>
            </View>
          ) : (
            <View style={style.leftSideBar}>
              <View style={style.leftInnerBar}></View>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View onClick={() => setDetail(!detail)}>
        <TouchableOpacity onPress={() => setDetail(!detail)}>
          {detail ? (
            <DetailCard
              top={398}
              topLeftRadius={30}
              topRightRadius={30}
              bottomLeftRadius={0}
              bottomRightRadius={0}
              navigation={navigation}
            />
          ) : (
            <>
              <ImageBackground
                source={require("../assets/location.png")}
                style={style.locationIcon}
                resizeMode="contain"
              />
              <Text style={style.locationText}>You're here</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
      <View style={detail ? { display: "None" } : style.cameraContainer}>
        <ImageBackground
          source={require("../assets/Group 19.png")}
          style={style.camera}
          resizeMode="cover"
        />
        <ImageBackground
          source={require("../assets/pawImage.png")}
          style={style.pawImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  camera: {
    width: 60,
    height: 60,
    cursor: "Pointer",
    backgroundColor: "Transparent",
    top: 700,
    left: 165,
  },
  background: {
    position: "absolute",
    width: 390,
    height: 844,
    left: 0,
    top: 0,
    backgroundColor: "#EBEBEB",
  },
  cameraContainer: {
    display: "flex",
    justifyContent: "center",
  },
  leftSideBar: {
    position: "absolute",
    width: 22,
    height: 149,
    left: 0,
    top: 318,
    backgroundColor: "#D9D9D9",
    borderRadius: "0px 5px 5px 0px",
    cursor: "pointer",
  },
  leftInnerBar: {
    position: "absolute",
    width: 6,
    height: 106,
    left: 8,
    top: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: 3,
  },
  openFilter: {
    position: "absolute",
    width: 87,
    height: 568,
    left: -1,
    top: 164,
    backgroundColor: "#E3E3E3",
    borderRadius: "0px 5px 5px 0px",
    cursor: "pointer",
  },
  searchEllipse1: {
    position: "absolute",
    width: 50,
    height: 50,
    left: 18,
    top: 103,
    borderRadius: 25,
    backgroundColor: "#FAFAFA",
  },
  searchEllipse2: {
    position: "absolute",
    width: 50,
    height: 50,
    left: 18,
    top: 211,
    borderRadius: 25,
    backgroundColor: "#FAFAFA",
  },
  searchEllipse3: {
    position: "absolute",
    width: 50,
    height: 50,
    left: 18,
    top: 319,
    borderRadius: 25,
    backgroundColor: "#FAFAFA",
  },
  searchEllipse4: {
    position: "absolute",
    width: 50,
    height: 50,
    left: 18,
    top: 427,
    borderRadius: 25,
    backgroundColor: "#FAFAFA",
  },
  downArrow: {
    position: "absolute",
    width: 29,
    height: 18,
    left: 30,
    top: 520,
    rotation: -90,
    border: 4,
  },
  location: {
    position: "absolute",
    left: "28.46%",
    right: "67.95%",
    top: "22.04%",
    bottom: "75.83%",
  },
  locationIcon: {
    width: 20,
    height: 20,
    top: 411,
    left: 196,
    backgroundColor: "#fffff",
    cursor: "Pointer",
  },
  locationText: {
    position: "absolute",
    width: 86,
    height: 19,
    top: 427,
    left: 167,
  },
  pawImage: {
    width: 110,
    height: 123,
    top: 590,
    left: 288,
  },
  filters: {
    display: "flex",
    border: "1px solid rgba(0, 0, 0, 0.50)",
    borderRadius: 10,
    justifyContent: "space-between",
    paddingLeft: 12,
    paddingTop: 4,
    paddingRight: 4,
    paddingBottom: 4,
    flexDirection: "row",
  },
  filtersText: {
    fontFamily: "Roboto",
    fontSize: 14,
    opacity: 0.6,
    paddingRight: 8,
  },
  searchIcon: {
    position: "absolute",
    width: 26,
    height: 25,
    left: 31,
    top: 30,
  },
});
