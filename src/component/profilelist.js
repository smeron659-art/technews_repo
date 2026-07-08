import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import useTheme from '../store/useTheam';
import Iconlist from './iconlist';

const Profilelist = ({ preference }) => {
    const { color, fsize, spacing } = useTheme();

    return (
        <View
            style={{
                backgroundColor: color.surfaceBg,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {preference.map((item, index) => (
                    <View
                        key={index}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: spacing.l,
                            borderBottomWidth:
                                index === preference.length - 1 ? 0 : 1,
                            borderColor: color.surfaceSecondary,
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                flex: 1,
                            }}>
                            <Iconlist
                                name={item.iconname}
                                
                            />

                            <View style={{ marginLeft: spacing.m }}>
                                <Text
                                    style={{
                                        color: color.textPrimery,
                                        fontSize: fsize.title,
                                    }}>
                                    {item.Label}
                                </Text>

                                <Text
                                    style={{
                                        color: color.textSecondary,
                                    }}>
                                    {item.state}
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Profilelist;