import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView,
    Animated,
    Dimensions,
    StatusBar
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function App() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [notificationCount] = useState(3);
    const [walletAmount] = useState('2.5K');
    const [userName] = useState('John Doe');
    const [userMobile] = useState('+91 9876543210');

    const slideAnim = useState(new Animated.Value(-width))[0];

    const toggleDrawer = () => {
        if (drawerOpen) {
            Animated.timing(slideAnim, {
                toValue: -width,
                duration: 300,
                useNativeDriver: true
            }).start(() => setDrawerOpen(false));
        } else {
            setDrawerOpen(true);
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start();
        }
    };

    const menuItems = [
        { icon: 'home', name: 'Home', component: 'Home' },
        { icon: 'user', name: 'Profile', component: 'Profile' },
        { icon: 'clipboard', name: 'Notice Board', component: 'NoticeBoard' },
        { icon: 'book', name: 'Passbook', component: 'Passbook' },
        { icon: 'credit-card', name: 'Bank Details', component: 'BankDetails' },
        { icon: 'info-circle', name: 'How to Play', component: 'HowToPlay' },
        { icon: 'history', name: 'Bid History', component: 'BidHistory' },
        { icon: 'gamepad', name: 'Game Rates', component: 'GameRates' },
        { icon: 'phone', name: 'Contact Us', component: 'ContactUs' },
        { icon: 'share-alt', name: 'Share with Friends', component: 'Share' },
        { icon: 'settings', name: 'Settings', component: 'Settings' },
        { icon: 'lock', name: 'Change Password', component: 'ChangePassword' },
        { icon: 'power-off', name: 'Logout', component: 'Logout' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#4338CA" barStyle="light-content" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={toggleDrawer} style={styles.menuButton}>
                    <Ionicons name="menu" size={28} color="white" />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>BOMBAY</Text>
                    <Text style={styles.subTitle}>MATKA</Text>
                </View>

                <View style={styles.rightIcons}>
                    <TouchableOpacity style={styles.notificationIcon}>
                        <Ionicons name="notifications" size={24} color="white" />
                        {notificationCount > 0 && (
                            <View style={styles.notificationBadge}>
                                <Text style={styles.notificationText}>{notificationCount}</Text>
                            </View>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.walletContainer}>
                        <FontAwesome name="money" size={18} color="white" />
                        <Text style={styles.walletText}>{walletAmount}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Main Content */}
            <View style={styles.content}>
                <Text style={styles.welcomeText}>Welcome to Bombay Matka</Text>
                {/* Your main app content would go here */}
            </View>

            {/* Side Drawer */}
            {drawerOpen && (
                <TouchableOpacity
                    style={styles.overlay}
                    onPress={toggleDrawer}
                    activeOpacity={1}
                />
            )}

            <Animated.View
                style={[
                    styles.drawer,
                    { transform: [{ translateX: slideAnim }] }
                ]}
            >
                <View style={styles.userContainer}>
                    <View style={styles.userIcon}>
                        <Ionicons name="person" size={50} color="#4338CA" />
                    </View>
                    <Text style={styles.userName}>{userName}</Text>
                    <Text style={styles.userMobile}>{userMobile}</Text>
                </View>

                <ScrollView style={styles.menuContainer}>
                    {menuItems.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.menuItem}
                            onPress={() => {
                                console.log(`Navigating to ${item.component}`);
                                toggleDrawer();
                            }}
                        >
                            {item.icon === 'clipboard' && <MaterialIcons name="assignment" size={24} color="#4338CA" />}
                            {item.icon === 'book' && <MaterialIcons name={item.icon} size={24} color="#4338CA" />}
                            {item.icon === 'credit-card' && <FontAwesome name={item.icon} size={24} color="#4338CA" />}
                            {item.icon === 'info-circle' && <FontAwesome name={item.icon} size={24} color="#4338CA" />}
                            {item.icon === 'history' && <MaterialIcons name={item.icon} size={24} color="#4338CA" />}
                            {item.icon === 'gamepad' && <FontAwesome name={item.icon} size={24} color="#4338CA" />}
                            {item.icon === 'share-alt' && <FontAwesome name={item.icon} size={24} color="#4338CA" />}
                            {item.icon === 'power-off' && <FontAwesome name={item.icon} size={24} color="#4338CA" />}
                            {item.icon === 'user' && <FontAwesome name={item.icon} size={24} color="#4338CA" />}
                            {item.icon === 'home' && <Feather name={item.icon} size={24} color="#4338CA" />}
                            {item.icon === 'phone' && <Feather name={item.icon} size={24} color="#4338CA" />}
                            {item.icon === 'settings' && <Feather name={item.icon} size={24} color="#4338CA" />}
                            {item.icon === 'lock' && <MaterialCommunityIcons name={item.icon} size={24} color="#4338CA" />}

                            <Text style={styles.menuItemText}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </Animated.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#4338CA',
        paddingVertical: 15,
        paddingHorizontal: 10,
        elevation: 5,
    },
    menuButton: {
        padding: 5,
    },
    titleContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    subTitle: {
        fontSize: 16,
        color: 'white',
    },
    rightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    notificationIcon: {
        marginRight: 15,
        position: 'relative',
    },
    notificationBadge: {
        position: 'absolute',
        right: -5,
        top: -5,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    walletContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
    },
    walletText: {
        color: 'white',
        marginLeft: 5,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    welcomeText: {
        fontSize: 18,
        color: '#4338CA',
        fontWeight: 'bold',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 100,
    },
    drawer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width * 0.75,
        height: '100%',
        backgroundColor: 'white',
        zIndex: 101,
        elevation: 5,
    },
    userContainer: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    userIcon: {
        backgroundColor: 'white',
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        elevation: 3,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    userMobile: {
        fontSize: 14,
        color: '#666',
    },
    menuContainer: {
        flex: 1,
        paddingTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    menuItemText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 15,
    },
});