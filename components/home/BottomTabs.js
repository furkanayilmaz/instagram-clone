import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Stories from './Stories';
import { Divider } from 'react-native-elements';

export const bottomTabIcons = [
    {
      name: 'Home',
      active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
      inactive:
        'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
    },
    {
      name: 'Search',
      active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
      inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
    },
    {
      name: 'Reels',
      active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
      inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',
    },
    {
      name: 'Shop',
      active:
        'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
      inactive:
        'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png',
    },
    {
      name: 'Profile',
      active:
        'https://scontent-den4-1.cdninstagram.com/v/t51.2885-19/s150x150/185227055_929426534513530_8918991406265095010_n.jpg?_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=110&_nc_ohc=HNjcVX4LkqQAX8YVEVJ&tn=ZDXZYvA4nR-aDW5Q&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT8YxLT93adFstnrkawP6OgYceL36WBF5ZE0M8hJh5fAxA&oe=61F40F72&_nc_sid=9a90d6',
      inactive:
        'https://scontent-den4-1.cdninstagram.com/v/t51.2885-19/s150x150/185227055_929426534513530_8918991406265095010_n.jpg?_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=110&_nc_ohc=HNjcVX4LkqQAX8YVEVJ&tn=ZDXZYvA4nR-aDW5Q&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT8YxLT93adFstnrkawP6OgYceL36WBF5ZE0M8hJh5fAxA&oe=61F40F72&_nc_sid=9a90d6',
    },
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive}} style={[styles.icon, icon.name === 'Profile' ? styles.profilePic() : null, activeTab === 'Profile' && icon.name === activeTab ? styles.profilePic(activeTab) : null]}/>
        </TouchableOpacity>
    )

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor: '#000'
    },  
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'Profile' ? 2 : 0, 
        borderColor: '#fff'
    }),
})

export default BottomTabs;
