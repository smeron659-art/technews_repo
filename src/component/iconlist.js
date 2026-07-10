import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import useTheme from '../store/useTheam';
const Iconlist = ({name}) => {
    const  {color,spacing,fsize}=useTheme();
  const styles = createStyles(color,  spacing,fsize,);
    return (
        <View style={styles.contener}>
           <Ionicons name={name} size={24}
                color={color.textPrimary} /> 
        </View>
    );
}

const createStyles=(color,spacing,fsize) => StyleSheet.create({
    contener:{
width:40,
height:40,
backgroundColor:color.surfaceSecondary,
alignSelf:'flex-end', 
justifyContent:'center',
alignItems:'center'
}

})

export default Iconlist;
