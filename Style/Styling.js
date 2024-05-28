import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#EAECEF",
    justifyContent: "center",
    alignItems: "center",
  },

  datedisplay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -29 }, { translateY: -15 }],
    fontWeight: "400",
    fontSize: 45,
    lineHeight: 65,
  },
  ScheduleEditText: {
    color: "black",
    fontSize: 30,
    fontWeight: "400",
    borderBottomWidth: 1,
    fontSize: 22,
    paddingLeft: 10,
    paddingBottom: 14,
    paddingTop: 14,
    borderColor: "#D1D0D0",
    fontFamily: "roboto",
  },
  clockbox: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    height: 70,
    borderRadius: 10,
    margin: 4,
    marginTop: 10,
    justifyContent: "space-between", 
    alignItems: "center",
    padding: 10, 
  },

  text: {
    color: "black",
    fontSize: 30,
  },

  text2: {
    color: "black",
    fontSize: 20,
    textAlign: "left",
  },
  box_1: {
    flex: 0.3,
    width: "100%",
    paddingLeft: 15,
    marginBottom: 20,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "left",
    backgroundColor: "white",
  },

  box_2: {
    flex: 0.5,
    width: "95%",
    borderRadius: 20,
    padding: 10,
    position: "relative",
    overflow: "hidden",
    backgroundColor: "white",
  },
  gradientBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 10,
  },
  box_3: {
    flex: 1.3,
    width: "95%",
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 20,
    overflow: "hidden",
  },
  box_4: {
    flex: 0.21,
    flexDirection: "row",
    width: "100%",
    bottom: 0,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    borderColor: "#D1D0D0",
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderWidth: 1,
    borderBottomWidth: 0,
  },

  input: {
    margin: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },

  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  elevation: {
    elevation: 10,
    shadowColor: "black",
  },
});

export default styles;
