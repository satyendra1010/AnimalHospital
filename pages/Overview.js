import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import DetailCard from "../components/DetailCard";
import DoctorCard from "../components/DoctorCard";

const Overview = () => {
  return (
    <div style={style.background}>
      <View>
        <DetailCard
          top={70}
          topLeftRadius={0}
          topRightRadius={0}
          bottomLeftRadius={0}
          bottomRightRadius={0}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          top: 530,
        }}
      >
        <TouchableOpacity>
          <Text style={style.serviceText}>Doctors</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.serviceText}>Service</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.serviceText}>Reviews</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.serviceText}>Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.serviceText}>About</Text>
        </TouchableOpacity>
      </View>
        <DoctorCard name={"Dr.Summer Hannah"} />
        <DoctorCard name={"Dr.Mcgarden Saoirse"} />
    </div>
  );
};

export default Overview;

const style = StyleSheet.create({
  background: {
    position: "absolute",
    width: 390,
    height: 860,
    left: 0,
    top: 0,
  },
  back: {
    borderRadius: 4,
    position: "absolute",
    top: 47,
    left: 1,
  },
  serviceText: {
    color: "#4F5156",
  },
});
