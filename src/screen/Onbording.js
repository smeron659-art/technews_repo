import { View } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { setItem } from "../utils/storage";
import { router } from "expo-router";
 export default function OnbordingScreen(){
  const onfinshed=()=>{
 setItem('onbordingfinshed','true');
 router.push("/");
 
  }
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#f6f2f2'}} >
<Onboarding
  onDone={onfinshed}


pages={[
{  
backgroundColor: '#d67c7c', 
image: <LottieView 
autoPlay 
  style={{width:400, height:200}} source={require('../../assets/Welcome.json')} />,
title: 'Onboarding',
subtitle: 'WELLCOM TO THIS APP',
}, 
{
backgroundColor: '#7d1a1a',
image: <LottieView
 autoPlay loop 
 style={{width:200, height:200}}
 source={require('../../assets/Welcome.json')} />,
title: 'Onboarding',
subtitle: 'FRIST LOG IN',  
},
{
backgroundColor: '#3b6c0d',
image: <LottieView
autoPlay loop
 style={{width:200, height:200}}
 source={require('../../assets/Welcome.json')} />,
title: 'Onboarding',
subtitle: 'START YOUR ACTTIVITY',
},

]}
/>
</SafeAreaView>
);
 } 