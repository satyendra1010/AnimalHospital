import { useEffect } from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-web";

const DetailCard = (props) => {
  const top = {
    top: props.top,
    borderTopLeftRadius: props.topLeftRadius,
    borderTopRightRadius: props.topRightRadius,
    borderBottomLeftRadius: props.bottomLeftRadius,
    borderBottomRightRadius: props.bottomRightRadius,
  };
  const params = {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "api-key":
      "lY9qRezZIKpogsQBICtTL1AB3NEh0g5biAeHM8k33RTxlkq51oYnSnOvr7ZVUHS8",
    Accept: "application/ejson",
  };

  const bodyData = {
    collection: "clinics",
    database: "veterinarian_clinics",
    dataSource: "Cluster0",
  };

  const details = async () => {
    let queryString = Object.keys(params)
      .map((key) => key + "=" + params[key])
      .join("&");
    try {
      const url =
        "https://us-east-1.aws.data.mongodb-api.com/app/data-pngam/endpoint/data/v1/action/find?" +
        queryString;
      let response = await fetch(url, {
        method: "POST",

        body: JSON.stringify(bodyData),
      });
      let json = await response.json();
      console.log(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    details();
  }, []);

  return (
    <View style={[style.container, top]}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Overview");
        }}
      >
        <ImageBackground
          source={require("../assets/open.png")}
          resizeMode="contain"
          style={{ width: 10, height: 10 }}
        />
      </TouchableOpacity>
      <View style={style.headingContainer}>
        <View style={style.heading}>
          <Text style={style.headingFont}>Outside Animal Hospital</Text>
        </View>

        <ImageBackground
          source={require("../assets/star.png")}
          style={style.rating}
          resizeMode="contain"
        />
        <View style={style.reivews}>
          <Text style={style.reviewsText}>(426)</Text>
        </View>
        <View style={style.type}>
          <Text style={style.typeText}>Veterinarian</Text>
        </View>
        <ImageBackground
          source={require("../assets/location.png")}
          style={style.distance}
          resizeMode="contain"
        />
        <View style={style.distanceText}>
          <Text>1.5km</Text>
        </View>
        <ImageBackground
          source={require("../assets/car.png")}
          style={style.car}
          resizeMode="contain"
        />
        <View style={style.carText}>
          <Text>8 mins</Text>
        </View>
        <ImageBackground
          source={require("../assets/pinpoint.png")}
          style={style.position}
          resizeMode="contain"
        />
        <View style={style.positionText}>
          <Text>268 Park Ave, Town</Text>
        </View>
      </View>
      <View style={style.appointmentContainer}>
        <ImageBackground
          source={require("../assets/calendar.png")}
          style={style.appointmentCalendar}
          resizeMode="contain"
        />
        <View style={style.appointmentText}>
          <Text>Book an Appointment</Text>
        </View>
      </View>
      <View>
        <View style={style.gridLeftBox}></View>
        <View style={style.gridContainer}>
          <View style={style.gridRow}>
            <View style={style.gridSquare}></View>
            <View style={style.gridSquare}></View>
          </View>
          <View style={style.gridRow}>
            <View style={style.gridSquare}></View>
            <View style={style.gridSquare}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailCard;

const style = StyleSheet.create({
  container: {
    boxSizing: "border-box",
    position: "absolute",
    width: 390,
    height: 440,
    left: 0,
    backgroundColor: "#FFFFFFB8",
    border: "1px solid #EBEBEB",
    cursor: "pointer",
  },
  headingContainer: {
    position: "relative",
    left: -1,
  },
  headingFont: {
    fontFamily: "Roboto",
    fontSize: 20,
    textAlign: "left",
    marginLeft: 30,
    marginTop: 35,
  },
  rating: {
    width: 79.3105239868164,
    height: 13.422122955322266,
    left: 30,
    top: 12,
  },
  reivews: {
    position: "relative",
    width: 42,
    height: 17,
    left: 118,
  },
  reviewsText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 13,
    color: "#354259",
  },
  type: {
    position: "absolute",
    width: 142,
    height: 21,
    top: 71,
    left: 160,
  },
  typeText: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: 400,
    textAlign: "left",
  },
  distance: {
    position: "relative",
    width: 17,
    height: 17,
    top: 10,
    left: 26,
    backgroundColor: "Navyblue",
  },
  distanceText: {
    position: "relative",
    width: 43,
    height: 17,
    top: -8,
    left: 50,
  },
  car: {
    position: "relative",
    width: 20,
    height: 20,
    top: -25,
    left: 120,
  },
  carText: {
    position: "relative",
    width: 45,
    height: 20,
    top: -40,
    left: 145,
  },
  position: {
    position: "relative",
    width: 25,
    height: 25,
    top: -30,
    left: 24,
  },
  positionText: {
    position: "relative",
    width: 142,
    height: 21,
    left: 50,
    top: -47,
  },
  appointmentContainer: {
    position: "absolute",
    width: 327,
    height: 40,
    left: 30,
    top: 175,
    bottom: "27.73%",
    backgroundColor: "#DADADA",
    borderRadius: 10,
  },
  appointmentCalendar: {
    position: "relative",
    width: 25.096525192260742,
    height: 25,
    top: 7,
    left: 85,
  },
  appointmentText: {
    position: "relative",
    left: 120,
    top: -14,
  },
  gridLeftBox: {
    width: 150,
    height: 190,
    left: 9,
    top: 33,
    position: "relative",
    backgroundColor: "#D9D9D9",
  },
  gridContainer: {
    position: "relative",
    left: 83,
    top: -163,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gridRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  gridSquare: {
    width: 93,
    height: 93,
    margin: 3.5,
    backgroundColor: "#D9D9D9",
  },
});
