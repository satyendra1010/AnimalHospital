import { StyleSheet, ImageBackground } from "react-native";

const FilterIcons = (props) => {
  return (
    <div>
      <ImageBackground
        source={require('../assets/serach.png')}
        style={style.searchIcon}
        resizeMode="cover"
      />
    </div>
  );
};

export default FilterIcons;

const style = StyleSheet.create({
  searchIcon: {
    position: "absolute",
    width: 32,
    height: 32,
    left: 31,
    top: 30,
  },
});
