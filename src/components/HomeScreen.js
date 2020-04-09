import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import contents from '../json/contents.json';


const HomeScreen = ({ navigation }) => { /* navigation導覽只能被用在被定義為'Screen'的componenets裡 */
    return (
        /* 所有JSX檔都須被包在一個語法內 */
        <View>
            {/* 從這裡開始是Header */}
            <View style={styles.headerStyle}> 
                <Image
                    style={styles.camIconStyle}
                    source={require('../icon/icons8-webcam-100.png')}
                />
                <Image
                    style={{ width: 150, height: 42 }}
                    source={{ uri: 'https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png' }}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('FriendList')}>
                    <Image
                        style={styles.planeIconStyle}
                        source={require('../icon/icons8-paper-plane-100.png')}
                    />
                </TouchableOpacity>
            </View>
            {/* Header到這裡結束 */}
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: '#FFFFFF', marginLeft: 8, flexDirection: "row" }}>
                        <Image
                            style={{ height: 50, width: 50 }}
                            source={require('../icon/2020-04-07_025903.png')}
                        />
                        <Text style={{
                            fontSize: 30,
                            height: 30,
                            width: 30,
                            marginLeft: 320,
                            marginRight: 5,
                        }}>
                            ...
                            </Text>
                    </View>
                    <Image
                        style={styles.imageContainer}
                        source={{ uri: contents[0].content_image }}
                    />
                    <View style={styles.iconContainerStyle}>
                        <Image
                            style={styles.iconStyle}
                            source={require('../icon/icons8-heart-100.png')}
                        />
                        <Image
                            style={styles.iconStyle}
                            source={require('../icon/icons8-speech-bubble-100.png')}
                        />
                        <Image
                            style={styles.iconStyle}
                            source={require('../icon/icons8-paper-plane-100.png')}
                        />
                        <Image
                            style={styles.bookmarkStyle}
                            source={require('../icon/icons8-bookmark-100.png')}
                        />
                    </View>
                    <Text style={styles.likeTextStyle}>{contents[0].likes_text}</Text>
                    <Text style={styles.nameTextStyle}>{contents[0].artist_name_text}</Text>
                    <Text style={styles.contentTextStyle}>{contents[0].content_text}</Text>
                    <Text style={styles.tagTextStyle}> {contents[0].tag_text}</Text>
                    
                    <View style={{ backgroundColor: '#FFFFFF', marginLeft: 8, flexDirection: "row" }}>
                        <Image
                            style={{ height: 50, width: 50 }}
                            source={require('../icon/2020-04-09_202106.png')}
                        />
                        <Text style={{
                            fontSize: 30,
                            height: 30,
                            width: 30,
                            marginLeft: 320,
                            marginRight: 5,
                        }}>
                            ...
                            </Text>
                    </View>
                    <Image
                        style={styles.imageContainer}
                        source={{ uri: contents[1].content_image }}
                    />
                    <View style={styles.iconContainerStyle}>
                        <Image
                            style={styles.iconStyle}
                            source={require('../icon/icons8-heart-100.png')}
                        />
                        <Image
                            style={styles.iconStyle}
                            source={require('../icon/icons8-speech-bubble-100.png')}
                        />
                        <Image
                            style={styles.iconStyle}
                            source={require('../icon/icons8-paper-plane-100.png')}
                        />
                        <Image
                            style={styles.bookmarkStyle}
                            source={require('../icon/icons8-bookmark-100.png')}
                        />
                    </View>
                    <Text style={styles.likeTextStyle}>{contents[1].likes_text}</Text>
                    <Text style={styles.nameTextStyle}>{contents[1].artist_name_text}</Text>
                    <Text style={styles.contentTextStyle}>{contents[1].content_text}</Text>
                    <Text style={styles.tagTextStyle}> {contents[1].tag_text}</Text>
                 </View>
            </ScrollView>
        </View> /* 所有JSX檔都須被包在一個語法內 */
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 400,
        width: null,
        backgroundColor: "#000",
    },
    iconContainerStyle: {
        flexDirection: "row",
    },
    iconStyle: {
        height: 30,
        width: 30,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 5,
    },
    bookmarkStyle: {
        height: 30,
        width: 30,
        marginTop: 10,
        marginLeft: 240,
        marginRight: 5,
    },
    likeTextStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 13,
        marginTop: 10,
    },
    nameTextStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 13,
        marginTop: 10,
    },
    contentTextStyle: {
        fontSize: 18,
        color: "#696969",
        marginLeft: 13,
    },
    tagTextStyle: {
        fontSize: 18,
        color: "#1E90FF",
        marginLeft: 13,
    },
    headerStyle: {
        paddingTop: 30,
        paddingBottom: 10,
        width: 400,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    planeIconStyle: {
        height: 35,
        width: 35,
    },
    camIconStyle: {
        height: 40,
        width: 40,
        marginLeft: 10,
    },
})

export default HomeScreen;