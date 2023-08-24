import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const Home = () => {
  return (
    <div style={style.background}>
      <div style={style.leftSideBar}>
        <div style={style.leftInnerBar}></div>
      </div>
      <div style={style.cameraContainer}>
        <button>
          <ImageBackground
            source={require("/Users/aviral/Desktop/Animal Hospital/AnimalHospital/assets/Group 19.png")}
            style={style.camera}
            resizeMode="cover"
          />
        </button>
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
});

