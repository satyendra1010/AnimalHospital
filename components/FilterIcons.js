import { StyleSheet, ImageBackground } from "react-native";

const FilterIcons = (props) => {
  return (
    <div>
      <ImageBackground
        source={props.link}
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
        width: 25.1,
        height: 25,
        left: 31,
        top: 30,
        backgroundColor: 'black',
      },
});

