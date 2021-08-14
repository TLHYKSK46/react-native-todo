import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "green",
    margin: 5,
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
   
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  task: {
    paddingVertical: 8, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    color: "white",
  },
  taskChild:{
    padding: 10,
     backgroundColor: '#fff',
      justifyContent: 'center', 
      alignItems: 'center',
       borderRadius: 8,
      color: "#00D100",


  }
});
