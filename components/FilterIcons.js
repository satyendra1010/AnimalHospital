import { useEffect } from "react";
import { StyleSheet, ImageBackground, View, TouchableOpacity } from "react-native";

const FilterIcons = (props) => {
  const navigate = () => {
    props.navigation.navigate("Hospitals");
  };

  return (
    <TouchableOpacity onPress={()=>{navigate()}}>
      <ImageBackground
        source={require("../assets/serach.png")}
        style={style.searchIcon}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default FilterIcons;

const style = StyleSheet.create({
  searchIcon: {
    position: "absolute",
    width: 26,
    height: 25,
    left: 31,
    top: 30,
  },
});
