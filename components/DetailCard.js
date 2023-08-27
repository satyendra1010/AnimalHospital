import { ImageBackground, StyleSheet } from "react-native";

const DetailCard = () => {
  return (
    <div style={style.container}>
      <div style={style.headingContainer}>
        <div style={style.heading}>
          <p style={style.headingFont}>Outside Animal Hospital</p>
        </div>
        <ImageBackground
          source={require("/Users/aviral/Desktop/Animal Hospital/AnimalHospital/assets/star.png")}
          style={style.rating}
          resizeMode="contain"
        />
        <div style={style.reivews}>
          <p style={style.reviewsText}>(426)</p>
        </div>
        <div style={style.type}>
          <p style={style.typeText}>Veterinarian</p>
        </div>
        <ImageBackground
          source={require("/Users/aviral/Desktop/Animal Hospital/AnimalHospital/assets/location.png")}
          style={style.distance}
          resizeMode="contain"
        />
        <div style={style.distanceText}>
          <p>1.5km</p>
        </div>
        <ImageBackground
          source={require("/Users/aviral/Desktop/Animal Hospital/AnimalHospital/assets/car.png")}
          style={style.car}
          resizeMode="contain"
        />
        <div style={style.carText}>
          <p>8 min</p>
        </div>
        <ImageBackground
          source={require("/Users/aviral/Desktop/Animal Hospital/AnimalHospital/assets/pinpoint.png")}
          style={style.position}
          resizeMode="contain"
        />
        <div style={style.positionText}>
          <p>268 Park Ave, Town</p>
        </div>
      </div>
      <div style={style.appointmentContainer}>
        <ImageBackground
          source={require("/Users/aviral/Desktop/Animal Hospital/AnimalHospital/assets/calendar.png")}
          style={style.appointmentCalendar}
          resizeMode="contain"
        />
        <div style={style.appointmentText}>
          <p>Book an Appointment</p>
        </div>
      </div>
      <div>
        <div style={style.gridLeftBox}></div>
        <div style={style.gridContainer}>
          <div style={style.gridRow}>
            <div style={style.gridSquare}></div>
            <div style={style.gridSquare}></div>
          </div>
          <div style={style.gridRow}>
            <div style={style.gridSquare}></div>
            <div style={style.gridSquare}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;

const style = StyleSheet.create({
  container: {
    boxSizing: "border-box",
    position: "absolute",
    width: 390,
    height: 446,
    left: 0,
    top: 398,
    backgroundColor: "#FFFFFFB8",
    border: "1px solid #EBEBEB",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    cursor: 'pointer'
  },
  headingContainer: {
    top: 441,
    left: 30,
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
  },
  reivews: {
    position: "absolute",
    width: 42,
    height: 17,
    top: 66,
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
    top: 64,
    left: 160,
  },
  typeText: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: 400,
    textAlign: "left",
  },
  distance: {
    position: "absolute",
    width: 17,
    height: 17,
    top: 110,
    left: 26,
    backgroundColor: "Navyblue",
  },
  distanceText: {
    position: "absolute",
    width: 43,
    height: 17,
    top: 96,
    left: 50,
  },
  car: {
    position: "absolute",
    width: 20,
    height: 20,
    top: 110,
    left: 140,
  },
  carText: {
    position: "absolute",
    width: 42,
    height: 20,
    top: 98,
    left: 170,
  },
  position: {
    position: "absolute",
    width: 25,
    height: 25,
    top: 153,
    left: 24,
  },
  positionText: {
    position: "absolute",
    width: 142,
    height: 21,
    top: 144,
    left: 50,
  },
  appointmentContainer: {
    position: "absolute",
    width: 327,
    height: 40,
    left: 30,
    top: 200,
    bottom: "27.73%",
    backgroundColor: "#DADADA",
    borderRadius: 10,
  },
  appointmentCalendar: {
    position: "absolute",
    width: 25.096525192260742,
    height: 25,
    top: 7,
    left: 85,
  },
  appointmentText: {
    position: "absolute",
    left: 120,
    top: -4,
  },
  gridLeftBox: {
    width: 150,
    height: 185,
    top: 260,
    left: 9,
    position: "absolute",
    backgroundColor: "#D9D9D9",
  },
  gridContainer: {
    position: "absolute",
    top: 256,
    left: 170,
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
