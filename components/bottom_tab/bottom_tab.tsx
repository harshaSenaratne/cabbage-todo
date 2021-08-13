import React,{useState,useEffect} from 'react';
import {View,Image,ScrollView, TouchableOpacity,Text,TextInput} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import styles from './styles.js'
import Settings from '../../screens/settings';
import Add from '../../screens/add_todo'
import { Ionicons } from '@expo/vector-icons';

import BottomSheet from 'reanimated-bottom-sheet';
interface IToDo {
    text: string;
    completed: boolean;
  }
const Tab = createBottomTabNavigator();

const Tabs = ()=>{
    const sheetRef = React.useRef(null);
    const [value, setValue] = useState("");
    const [toDoList, setToDos] = useState<IToDo[]>([]);
    const [error, showError] = useState<Boolean>(false);

    
  
    const handleSubmit = (): void => {
      if (value.trim())
        setToDos([...toDoList, { text: value, completed: false }]);
      else showError(true);
      setValue("");
    };
  
    const removeItem = (index: number): void => {
      const newToDoList = [...toDoList];
      newToDoList.splice(index, 1);
      setToDos(newToDoList);
    };
  
    const toggleComplete = (index: number): void => {
      const newToDoList = [...toDoList];
      newToDoList[index].completed = !newToDoList[index].completed;
      setToDos(newToDoList);
    };

    const CustomTabBarButton = ({children,onPress}:{children:any,onPress:()=>void})=>(
        <TouchableOpacity style={{
            top:-30,
            justifyContent:'center',
            alignItems:'center'
        }}
        onPress={onPress}
        >
       <View style={{width:70,height:70,
        backgroundColor:"#e32f45",
        borderRadius:50}}>
           {children}
           </View>     
            
        </TouchableOpacity>
    )

    const renderBody = () => (
        <>
        <ScrollView >
        <View style={styles.container}>
        <Text style={styles.title}>Cabbage Todo</Text>
        <Text style={styles.subtitle}>Tasks</Text>
        {toDoList.length === 0 && <Text>No to do task available</Text>}
        {toDoList.map((toDo: IToDo, index: number) => (
          <View style={styles.listItem} key={`${index}_${toDo.text}`}>
            <Text
              style={[
                styles.task,
                { textDecorationLine: toDo.completed ? "line-through" : "none" }
              ]}
            >
              {toDo.text}
            </Text>

          <TouchableOpacity style={styles.completeBtn} onPress={() => toggleComplete(index)}
 >
        <Text style={{  color: '#fff',
        textAlign: 'center',}}>{toDo.completed ? "Completed" : "Complete"}</Text>
        </TouchableOpacity>
         
          <View style={styles.iconContainer}>
  
        <Ionicons name="md-trash-outline" size={32} color="black" onPress={()=>{removeItem(index)}}/>
      </View>
          </View>
        ))}
      </View>
      </ScrollView>
      </>
    );


    const renderContent = () => (
        <View style={{
            backgroundColor: 'white',
            padding: 16,
            height: 450,
          }}>
        <View style={styles.container}>
        <Text style={styles.todoTitle}>Add Todo</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter your todo task..."
            value={value}
            onChangeText={e => {
              setValue(e);
              showError(false);
            }}
            style={styles.inputBox}
          />
        </View>
        <View style={{marginTop:20}}>
        <TouchableOpacity style={styles.addTask}  onPress={handleSubmit} >
        <Text style={{  color: '#fff',
        textAlign: 'center',}}>Add Task</Text>
        </TouchableOpacity>


        </View>
        {error && (
          <Text style={styles.error}>Error: Input field is empty...</Text>
        )}
        </View>
        </View>
      );

      return(
        <>
        <Tab.Navigator tabBarOptions={{
            showLabel:false,
            style:{
              position:'absolute',
              bottom:25,
              left:20,
              right:20,
              elevation:0,
              backgroundColor:"#fffff",
              borderRadius:15,
              height:90 ,
            }
        }}
        >
            <Tab.Screen name="Home" component={renderBody} options={{
                tabBarIcon:({focused}) =>(
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image
                        source = {require("../../assets/home.png")}
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25,
                            tintColor:focused?"#e32f45":"#748c94"
                        }}
                        />
                    </View>
                ),
            }}/> 

<Tab.Screen name="AddTodo" component={Add} options={{
                tabBarIcon:({focused}) =>(
                        <Image
                        source = {require("../../assets/add.png")}
                        resizeMode="contain"
                        style={{
                            width:30,
                            height:30,
                            tintColor:"#fff"
                        }}
                        />
                ),
                tabBarButton:(props) =>(
                    <CustomTabBarButton {...props} onPress={()=> sheetRef.current.snapTo(0)}/>
                )
            }}/> 


<Tab.Screen name="Settings" component={Settings} options={{
                tabBarIcon:({focused}) =>(
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image
                        source = {require("../../assets/settings.png")}
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25,
                            tintColor:focused?"#e32f45":"#748c94"
                        }}
                        />
                    </View>
                ),
            }}/> 

        </Tab.Navigator>
        <BottomSheet
        ref={sheetRef}
        initialSnap={2}
        enabledGestureInteraction = {true}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
        </>
    );

}
export default Tabs;


