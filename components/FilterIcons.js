import { StyleSheet, ImageBackground, View } from "react-native";

const FilterIcons = (props) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/serach.png')}
        style={style.searchIcon}
        resizeMode="cover"
      />
    </View>
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
