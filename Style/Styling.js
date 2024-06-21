import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAECEF",
    justifyContent: "center",
    alignItems: "center",
  },
  Schbox1: {
    flex: 1,
    width: "100%",
    padding: 10,
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#EAECEF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  Schbox2: {
    flex: 1,
    width: "100%",
    padding: 10,
    position: "relative",
    overflow: "hidden",
    backgroundColor: "red",
    alignItems: "center",
    flexDirection: "column",
  },
  ScheduleEditText: {
    color: "black",
    fontSize: 10,
    fontWeight: "400",
    borderBottomWidth: 1,
    fontSize: 22,
    paddingLeft: 10,
    paddingBottom: 14,
    paddingTop: 14,
    borderColor: "#D1D0D0",
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
  box_2: {
    flex: 0.5,
    width: "95%",
    borderRadius: 20,
    marginTop: 20,
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
    maxHeight: 30000,
    overflow: "hidden",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  SpaceBetweenTab: {
    flex: 0.28,
    backgroundColor: "none",
    width: "100%",
    opacity: 0,
  },

  Frontview: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 22,
  },

  InsideFrontView: {
    width: "45%",
  },

  InsideFrontViewCal: {
    borderWidth: 2,
    borderTopWidth: 20,
    width: "45%",
    borderRadius: 12,
  },
});

export default styles;
