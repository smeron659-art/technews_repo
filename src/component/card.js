import React from 'react';
import { StyleSheet,Pressable,ImageBackground,FlatList } from 'react-native';
import useTheme from '../store/useTheam';
import HeroTitle from './heroTitle';
import { LinearGradient } from 'expo-linear-gradient';
import useTheme from '../store/useTheam';
import Tag from './tag';
import Caption from './caption';
const Card = () => {
     const {color,fsize, spacing}=useTheme();
    return (
        <Pressable onPress={()=>alert("card presses")} style={[style.Pressable,{borderRadius:spacing.xx}]}>
           <ImageBackground  source={sourse} style={style.ImageBackground}> 
            <linearGradient
              color={["rgba(0,0,0,0.05)","rgba(0,0,0,0.25)"]}
              style={[style.gradinet,{padding:spacing.l}]}> 
              <Tag   tagLabel={"LIVE"}/>
              <view style={style.content} >
             <HeroTitle title={"open AI universal GPT-5"}/>
             <Caption  author={'Maya chen'}  readtime={'5 min react'}/>
             </view>
             </linearGradient>
            </ImageBackground> 
        </Pressable>
    );
}
 const style=StyleSheet.create({
    Pressable:{
        height:200,
        width:"100%",
        overflow:"hidden",
    },
    ImageBackground:{flex:1},
    gradinet:{flex:1},
    content:{
        flex:1,
        justifyContent:'flex-end',
    }


 })
export default Card;
