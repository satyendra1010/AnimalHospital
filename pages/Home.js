import { StyleSheet, Image, ImageBackground } from "react-native";
import { useState } from "react";
import FilterIcons from "../components/FilterIcons";
import DetailCard from "../components/DetailCard";

const Home = () => {
  const [filter, setFilter] = useState(false);
  const [detail, setDetail] = useState(false);
  return (
    <div style={style.background}>
      <div style={style.filtersContainer}>
          <button style={style.filters1}>Sort by</button>
          <button style={style.filters2}>Vet Hospital</button>
          <button style={style.filters3}>Open</button>
          <button style={style.filters4}>Distance</button>
      </div>
      <div
        style={detail ? { display: "None" } : { display: "block" }}
        onClick={() => setFilter(!filter)}
      >
        {filter ? (
          <div style={style.openFilter}>
            <FilterIcons />
            <div style={style.searchEllipse1}></div>
            <div style={style.searchEllipse2}></div>
            <div style={style.searchEllipse3}></div>
            <div style={style.searchEllipse4}></div>
            <div>
              <ImageBackground
                source={require("../assets/downArrow.png")}
                resizeMode="cover"
                style={style.downArrow}
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
          <>
            <ImageBackground
              source={require("/Users/aviral/Desktop/Animal Hospital/AnimalHospital/assets/location.png")}
              style={style.locationIcon}
              resizeMode="contain"
            />
            <p style={style.locationText}>You're here</p>
          </>
        )}
      </div>
      <div style={detail ? { display: "None" } : style.cameraContainer}>
        <ImageBackground
          source={require("/Users/aviral/Desktop/Animal Hospital/AnimalHospital/assets/Group 19.png")}
          style={style.camera}
          resizeMode="cover"
        />
      </div>
      <div style={detail ? { display: "None" } : style.cameraContainer}>
        <ImageBackground
          source={require("../assets/pawImage.png")}
          style={style.pawImage}
          resizeMode="contain"
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
    width: 30,
    height: 30,
    left: 30,
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
    top: 418,
    left: 167,
  },
  pawImage: {
    position: "absolute",
    width: 110,
    height: 123,
    top: 700,
    left: 288,
  },
  filtersContainer: {
    display: "flex",
    flexDriection: "row",
    justifyContent: "space-between",
  },
  filters1: {
    position: "absolute",
    width: 88,
    height: 28,
    top: 97,
    left: 20,
    padding: "4px 4px 4px 12px",
    borderRadius: 6,
    border: 1,
    cursor: 'Pointer'
  },
  filters2: {
    position: "absolute",
    width: 88,
    height: 28,
    top: 97,
    left: 120,
    padding: "4px 4px 4px 12px",
    borderRadius: 6,
    border: 1,
    cursor: 'Pointer'
  },
  filters3: {
    position: "absolute",
    width: 88,
    height: 28,
    top: 97,
    left: 210,
    padding: "4px 4px 4px 12px",
    borderRadius: 6,
    border: 1,
    cursor: 'Pointer'
  },
  filters4: {
    position: "absolute",
    width: 88,
    height: 28,
    top: 97,
    left: 300,
    padding: "4px 4px 4px 12px",
    borderRadius: 6,
    border: 1,
    cursor: 'Pointer'
  },
});
