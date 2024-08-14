import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  button: {
    width: "80%",
    justifyContent: 'center',
    alignItems: "center",

    backgroundColor: '#367B4D',
    borderRadius: 10,
    padding: 20,
    margin: "3%",
  },
  buttonText: {
   color: "white", 
   fontWeight: "bold",
  },
});

export default commonStyles;