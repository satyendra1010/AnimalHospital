import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const Navbar = () => {
  return (
    <div>
      <div>
        <div style={styles.navbar}></div>
      </div>
      <div>
        <button style={styles.back}>
          {" "}
          <ImageBackground
            source={require("/Users/aviral/Desktop/Animal Hospital/AnimalHospital/assets/button.png")}
            style={{
              width: 53,
              height: 22,
              justifyContent: "center",
              alignItems: "center",
            }}
            resizeMode="cover"
          />
        </button>
      </div>
      <div>
        <button onClick={() => alert("Button Pressed!")} style={styles.user}>
          User
        </button>
      </div>
    </div>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    width: 390,
    height: 27,
    left: 0,
    top: 0,
    backgroundColor: "#D9D9D9",
  },
  back: {
    position: "absolute",
    width: 53,
    height: 22,
    top: 49,
    left: 10,
    // backgroundColor: "Transparent",
    border: "None",
    padding: "3px, 4px, 3px, 8px",
    gap: 2,
    cursor: "Pointer",
  },
  user: {
    position: "absolute",
    width: 40,
    height: 40,
    left: 339,
    top: 36,
    backgroundColor: "#FFFFFF",
    boxShadow: "None",
    border: "None",
    borderRadius: 50,
    cursor: "Pointer",
    fontFamily: "Roboto",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 11,
    // /* identical to box height, or 145% */
    textAlign: "center",

    color: "#000000"
  },
});
