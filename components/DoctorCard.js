import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const DoctorCard = (props) => {
  return (
    <View style={style.container}>
      <View style={style.panel}></View>
      <View style={style.image}></View>
      <View>
        <Text style={style.name}>{props.name}</Text>
      </View>
      <View style={style.line}></View>
      <ImageBackground
        source={require("../assets/leftArrow.png")}
        style={style.leftArrow}
        resizeMode="contain"
      />
      <ImageBackground
        source={require("../assets/date & time.png")}
        resizeMode="contain"
        style={style.date}
      />
      <ImageBackground
        source={require("../assets/rightArrow.png")}
        style={style.rightArrow}
        resizeMode="contain"
      />
      <View
        style={{
          flexDirection: "col",
          justifyContent: "space-between",
          width: 320,
          gap: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 150,
            left: 228,
            top: -48,
          }}
        >
          <TouchableOpacity style={style.booked}>
            <Text style={style.bookedText}>10:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.time}>
            <Text style={style.timeText}>11:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.time}>
            <Text style={style.timeText}>Booked</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 150,
            left: 228,
            top: -48,
          }}
        >
          <TouchableOpacity style={style.time}>
            <Text style={style.timeText}>Booked</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.time}>
            <Text style={style.timeText}>Booked</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.time}>
            <Text style={style.timeText}>16:30</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DoctorCard;

const style = StyleSheet.create({
  container: {
    marginBottom: 11,
    left: 0,
    top: 558,
    width: 390,
    height: 131,
    border: "1px solid #93A18E",
  },
  panel: {
    position: "absolute",
    width: 10,
    height: 131,
    left: 0,
    top: 0,
    border: "8px solid #93A18E",
  },
  image: {
    left: 20,
    top: 31,
    width: 58,
    height: 58,
    backgroundColor: "#D9D9D9",
    borderRadius: "50%",
  },
  name: {
    left: 92,
    top: -10,
    width: 61,
    height: 34,
    fontSize: 11,
    textAlign: "center",
  },
  line: {
    position: "absolute",
    left: 214,
    top: 15,
    width: 0.5,
    height: 90,
    border: "0.5px solid #E0E0E0",
  },
  leftArrow: {
    position: "absolute",
    left: 245,
    top: 8,
    width: 25,
    height: 25,
  },
  date: {
    position: "absolute",
    left: 288,
    top: 11,
    width: 18,
    height: 18,
  },
  rightArrow: {
    position: "absolute",
    left: 335,
    top: 8,
    width: 25,
    height: 25,
  },
  booked: {
    width: 44,
    height: 20,
    borderRadius: 5,
    backgroundColor: "#93A18E",
  },
  bookedText: {
    position: "absolute",
    fontSize: 10,
    color: "#FFFFFF",
    left: 9,
    top: 4,
  },
  time: {
    width: 44,
    height: 20,
    borderRadius: 5,
    border: "1px solid #93A18E",
  },
  timeText: {
    position: "absolute",
    fontSize: 10,
    color: "#93A18E",
    left: 9,
    top: 4,
  },
});
