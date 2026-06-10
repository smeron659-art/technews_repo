import React, { useState, useEffect } from "react";
import Toast from 'react-native-toast-message';
import { Text, StyleSheet,View,  SafeAreaView, TouchableOpacity ,Alert ,ImageBackground } from "react-native";
import Recored from './recored';
import { SystemBars } from "react-native-edge-to-edge";
import { TextInput } from "react-native-paper";
 export default function  Time (){
  const [task,setTask]=useState('');
  const [time,setTime]=useState(0);
  const  [cheek ,setCheek]=useState(false)
   const [screenrecord ,setScreenrecord ]=useState(false);
   const [ selectedtask ,setSelectedtask]=useState([]);
   const[onchange ,setOnchange]=useState([]);
  useEffect(() =>{
if(!cheek) return;
const interval=setInterval(()=>{setTime (prev=>prev+1) },1000)
   return () => clearInterval(interval);
 } ,[cheek]) 
 useEffect(()=>{
if(time==1){
{showToast()}
}
 },[time])
 const showToast=()=>{
  Toast.show({
    type:'success',
    text: 'This is some something 👋'
  });
 }
  function changetime(time) {
     const minute = Math.floor(time / 60);
     const second = Math.floor(time % 60);
     return `${minute}:${second < 10 ? '0' : ''}${second}`;
   } 
  const changescrean =()=>{
      setScreenrecord(!screenrecord);}
      if(screenrecord){
        return <Recored  focuse={onchange} back={changescrean } RecorederTime={changetime(time)}/>
      }
  const onHandTouch = () => {
    setCheek(!cheek);
  } 
  const Reset=()=>{
    setCheek(false);
    setTime(0);
  } 
  
  const editing=()=>{
    const trimmed =task.trim();
    if (trimmed.length>0){
     setSelectedtask(prev=>[...prev,trimmed])
      setTask('');
      setOnchange(trimmed); 
    }
  }
  return(
    <View style={styles.continer}>
    <Text style={styles.titel}>Exercise Timer</Text> 
 <Text style={styles.time}> {changetime(time)}</Text> 
  <SystemBars style="light" />
 <View style={styles.divide}/>
 <View style={{flexDirection:'row',justifyContent:'space-between',alignItems: 'left', marginBottom:40,marginTop:40}}>
    <TextInput  placeholder=" Recored your exercise.....  " 
    value={task}
    onChangeText={task => setTask(task)}
  style={styles.intputtext}/> <TouchableOpacity  style={styles.addBottom}  onPress={ ()=>{changescrean();
    editing() ;
   }
   
 }><Text style={styles.addBottomtext}> +</Text></TouchableOpacity>
 </View>
 <ImageBackground  source={require('./assets/light.jpg')} style={styles.image} >
 {selectedtask.map((task,index) =>(
  <Text key={index} style={styles.task} >{task} </Text> 
 )
 
) }
</ImageBackground>
  <Toast/>
<TouchableOpacity  onPress ={onHandTouch} style={styles.tochable}> <Text style={styles.bottontext}> { cheek? 'puse' :'start'}</Text></TouchableOpacity>
 <TouchableOpacity  onPress ={Reset}  style={styles.restart}> <Text style={styles.textre}> Reset</Text> </TouchableOpacity>
</View>
 )
 }
const styles =StyleSheet .create(
  {
  continer:{
    textAlign:'center',
    backgroundColor:'#080f61',
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     
  } ,
  titel:{
 paddingHorizontal:27,
 fontSize:33,
 fontWeight:'bold',
 color:'#fff',
 textAlign:'center',
  },
  tochable:{
    width:110,
    height:110 ,
    borderRadius:'100%',
    borderColor:'#fff',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    marginBottom:60,
    marginTop:40,
    marginHorizontal:120,
    padding:15,
  } ,
  bottontext:{
    flex:1,
    alignContent:'center',
    padding:15,
    fontSize:20,
    fontWeight:'bold',
    color:'#fff'
    
  },

intputtext:{
width:'80%',
height:50,
marginRight:10,
 

},
time:{
textAlign:'center',
  fontSize:95,
fontWeight:'bold',
color:'#fff',
},
restart:{
  padding:15,
  width:190,
  height:60,
  backgroundColor:'#253422',
  borderWidth:1,
  borderRadius:30,
 textAlign:"center",
 alignItems:'center',
  marginHorizontal:100,
  marginBottom:100,

} ,
textre:{
  fontSize:20,
  fontWeight:'bold',
  color:'#fff'
},
divide:{
  width:'90%',
  height:1,
  backgroundColor:'#ffffff',
 borderRadius: 20,          
  paddingBottom:4,
  
  alignSelf: 'center',

},
addBottomtext:{
 
 fontSize:17,
 color:'#fff',
 fontWeight:'bold',
 fontSize:16,
 padding:1,


},
addBottom:{
  textAlign:'center',
  width:60,
  height:60,
  borderRadius:30,
 
  borderWidth:1,
  backgroundColor:'transparent',
borderColor:'#fff',
alignItems:'center',
justifyContent:'center',

},
task:{
  color:'#ffff',
  textDecorationLine:'underline',
  
},
image: {
    width: 150,
    height:120 ,
    marginBottom: 20,
  }



  })