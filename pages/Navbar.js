import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const Navbar = () => {
  return (
    <View>
      <View>
        <View style={styles.navbar}></View>
      </View>
      <View>
        <TouchableOpacity style={styles.back}>
          <ImageBackground
            source={require("../assets/button.png")}
            style={{
              width: 53,
              height: 22,
              justifyContent: "center",
              alignItems: "center",
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.user}>
        <TouchableOpacity onClick={() => alert("Button Pressed!")}>
          <Text style={styles.userText}>User</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
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
    alignItems: 'center'
  },
  userText:{
    fontFamily: "Roboto",
    fontSize: 11,
    lineHeight: 16,
    color: "#000000",
    paddingTop: 12,
    },
});
