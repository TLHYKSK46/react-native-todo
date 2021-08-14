import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
     justifyContent: 'space-between',
     margin: 5
  },
  textInput: {
    flex: 1, height: 40, borderColor: '#212121', borderWidth: 1, borderRadius: 8 ,
    padding:3,
  },
  button: {
    marginLeft: 5, 
    padding: 8, 
    backgroundColor: '#212121', 
    justifyContent: 'center', 
    alignItems: 'center',
     borderRadius: 8,
     
  },
  buttonText: {
    color: "white",
    padding: 3,
  },
});
