import React from 'react';
import { StyleSheet ,Text ,Image,View, TouchableOpacity} from 'react-native';

import contents from '../json/contents.json';

const FriendListScreen = ({navigation}) => {
    return (
        <View>
             {/* 從這裡開始是Header */}
             <View style={styles.headerStyle}> 
                <TouchableOpacity
                        onPress={() => navigation.navigate('Homepage')}>
                    <Image
                        style={styles.arrowIconStyle}
                        source={require('../icon/icons8-chevron-left-100.png')}
                    />
                </TouchableOpacity>
                <Text style={{paddingTop:10, fontWeight: 'bold', fontSize: 18 }}>Da_Shuo</Text>
                <Image
                    style={styles.planeIconStyle}
                    source={require('../icon/icons8-video-call-100.png')}
                />    
            </View>
            {/* Header到這裡結束 */}
            <View style={{backgroundColor: '#FFFFFF', flexDirection: "row"}}>
                <Image 
                    style={{height: 60, width: 60 , marginLeft: 10}}
                    source={require('../icon/2020-04-07_025903.png')}
                />
                <View>
                    <Text style={styles.nameTextStyle}>{contents[0].artist_name_text}</Text>
                    <Text style={styles.activeTextStyle}>{contents[0].active_text}</Text>
                </View>
                <View style={{justifyContent:'center',marginLeft: 170}}>
                    <Image
                        style={{height: 40, width: 40 , marginLeft: 10}}
                        source={require('../icon/icons8-webcam-100.png')}
                    />
                </View>
            </View>
            <View style={{backgroundColor: '#FFFFFF', flexDirection: "row"}}>
                <Image 
                    style={{height: 60, width: 60 , marginLeft: 10}}
                    source={require('../icon/2020-04-09_202106.png')}
                />
                <View>
                    <Text style={styles.nameTextStyle}>{contents[1].artist_name_text}</Text>
                    <Text style={styles.activeTextStyle}>{contents[1].active_text}</Text>
                </View>
                <View style={{justifyContent:'center',marginLeft: 175}}>
                    <Image
                        style={{height: 40, width: 40 , marginLeft: 10}}
                        source={require('../icon/icons8-webcam-100.png')}
                    />
                </View>
            </View>
            
        </View>
    );
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
        fontSize: 14,
        marginLeft: 10,
        marginTop: 8,
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
    activeTextStyle: {
        fontSize: 14,
        color: "#696969",
        marginLeft: 10,
        marginTop: 5,
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
    arrowIconStyle: {
        height: 40,
        width: 40,
        marginLeft: 10,
    },
})

export default FriendListScreen;