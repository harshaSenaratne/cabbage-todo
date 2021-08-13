import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    shadow:{
        shadowColor:"#7F5DF0",
        shadowOffset:{
           width:0,
           height:10             
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    },
    container: {
        padding: 35,
        alignItems: "center"
      },
    
      inputWrapper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
      },
      inputBox: {
        width: 200,
        borderColor: "purple",
        borderRadius: 8,
        borderWidth: 2,
        paddingLeft: 8
      },
      title: {
        fontSize: 40,
        marginBottom: 40,
        fontWeight: "bold",
        textDecorationLine: "underline"
      },

    todoTitle:{
      fontSize: 20,
      marginBottom: 40,
      fontWeight: "bold",
    },
    
      error: {
        color: "red"
      },

      addTask: {
        width:200,
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#e32f45',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
      },
      completeBtn:{
        width:100,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#e32f45',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
      },

      //Body
      container: {
        padding: 35,
        alignItems: "center",
      },
      iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputWrapper: {
        width: "100%",
        height:40,
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20
      },
      inputBox: {
        width: 200,
        borderColor: "purple",
        borderRadius: 8,
        borderWidth: 2,
        paddingLeft: 8
      },
      title: {
        fontSize: 40,
        marginBottom: 40,
        fontWeight: "bold",
        textDecorationLine: "underline"
      },
      subtitle: {
        fontSize: 20,
        marginBottom: 20,
        color: "purple"
      },
      listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff', 
       },
      addButton: {
        alignItems: "flex-end"
      },
      task: {
        width: 200
      },
      error: {
        color: "red"
      }
    });

  export default styles;