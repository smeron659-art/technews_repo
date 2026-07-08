import React from 'react';
import { StyleSheet, View,Image,Text } from 'react-native';
import useTheme from '../store/useTheam';

const Profilcared = () => {
    const {color,spacing,fsize}=useTheme();
    return (
        <View style={[styles.contener, {backgroundColor: color.lowerback  , height:100}  ]}>
         <Image
  source={require("../../assets/heritage.jpg")}
  style={{
    width: 80,
    height: 80,
    borderRadius: 35,
  }}
/>
         <View style={{padding:spacing.ml ,marginLeft:14, }} >
            <Text style={{color:color.surface ,fontSize:fsize.titleSmall,marginBottom:6}}>
              Abebe Kebede
            </Text >
            <Text style={{color:color.surface ,marginBottom:6}}>
     AbebeKebede@gmail.com
            </Text>

            <View style={{backgroundColor:color.rprimary ,height:'20',width:'100',borderRadius:40}}>
            <Text style={{color:color.primary, alignItems:'center', justifyContent:'center', marginLeft:12}}>
          prom
            </Text>
            </View>
            </View>  
        </View>
    );
}

const styles = StyleSheet.create({
    contener:{
        alignItems:'center',
    flexDirection:'row',
    justifyContent:'flex-start',
    padding :10,
    width:'100%',
    borderRadius:13,


    }

})

export default Profilcared;
