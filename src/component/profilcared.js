import React from 'react';
import { StyleSheet, View,Image } from 'react-native';
import useTheme from '../store/useTheam';

const Profilcared = () => {
    const {color,spacing,fsize}=useTheme();
    return (
        <View styles={[styles.contener, { padding:spacing.l, BackgroundColor: color.lowerback} ]}>
         <Image
  source={require("../../assets/heritage.jpg")}
  style={{
    width: 80,
    height: 80,
    borderRadius: 40,
  }}
/>
         <view >
            <Text>
              Abebe Kebede
            </Text>
            <Text>
     AbebeKebede@gmail.com
            </Text>
            <View style={{BackgroundColor:color.primary}}>
            <Text>
          prom
            </Text>
            </View>
            </view>  
        </View>
    );
}

const styles = StyleSheet.create({
    contener:{
        justifyContent:'flex-start',
        flexDirection:'row'

    }

})

export default Profilcared;
