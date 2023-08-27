import { StyleSheet, ImageBackground, View, Image } from "react-native";
import { useState } from "react";
import FilterIcons from "../components/FilterIcons";
import DetailCard from "../components/DetailCard";

const Home = () => {
  const [filter, setFilter] = useState(false);
  const [detail, setDetail] = useState(false);
  return (
    <div style={style.background}>
      <div
        style={detail ? { display: "None" } : { display: "block" }}
        onClick={() => setFilter(!filter)}
      >
        {filter ? (
          <div style={style.openFilter}>
            <FilterIcons link="/Users/aviral/Desktop/Animal Hospital/AnimalHospital/assets/serach.png" />
            <div style={style.searchEllipse1}></div>
            <div style={style.searchEllipse2}></div>
            <div style={style.searchEllipse3}></div>
            <div style={style.searchEllipse4}></div>
            <div style={style.downArrow}>
              <ImageBackground
                source={require("/Users/aviral/Desktop/Animal Hospital/AnimalHospital/assets/downArrow.png")}
                resizeMode="cover"
              />
            </div>
          </div>
        ) : (
          <div style={style.leftSideBar}>
            <div style={style.leftInnerBar}></div>
          </div>
        )}
      </div>
      <div onClick={() => setDetail(!detail)}>
        {detail ? (
          <DetailCard />
        ) : (
          <ImageBackground
            source={require("/Users/aviral/Desktop/Animal Hospital/AnimalHospital/assets/location.png")}
            style={style.locationIcon}
            resizeMode="contain"
          />
        )}
      </div>
      <div style={detail ? { display: "None" } : style.cameraContainer}>
        <ImageBackground
          source={require("/Users/aviral/Desktop/Animal Hospital/AnimalHospital/assets/Group 19.png")}
          style={style.camera}
          resizeMode="cover"
        />
      </div>
    </div>
  );
};

export default Home;

const style = StyleSheet.create({
  camera: {
    position: "absolute",
    width: 60,
    height: 60,
    cursor: "Pointer",
    backgroundColor: "Transparent",
    top: 747,
    left: 165,
  },
  background: {
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
    width: 12.5,
    height: 25,
    left: 35,
    top: 520,
    rotation: -90,
    backgroundColor: "#7B7A7A",
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
    width: 14,
    height: 18,
    top: 186,
    left: 111,
    backgroundColor: "#BB2A2A",
    cursor: "Pointer",
  },
});
