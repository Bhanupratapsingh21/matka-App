import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type IoniconName =
    | "game-controller"
    | "wallet"
    | "cash"
    | "gift"
    | "checkmark-circle"
    | "newspaper";

type Notification = {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    icon: IoniconName;
};

const NotificationScreen = () => {
    // Sample notification data
    const notifications: Notification[] = [
        {
            id: 1,
            title: 'New Game Available',
            description: 'New Mumbai Morning game has been added to play with 10x payout',
            date: '23-5-2025',
            time: '10:30 AM',
            icon: 'game-controller'
        },
        {
            id: 2,
            title: 'Withdrawal Successful',
            description: 'Your withdrawal of ₹2500 has been processed to your bank account',
            date: '22-5-2025',
            time: '02:45 PM',
            icon: 'wallet'
        },
        {
            id: 3,
            title: 'Deposit Received',
            description: 'Your deposit of ₹5000 has been credited to your wallet',
            date: '21-5-2025',
            time: '11:20 AM',
            icon: 'cash'
        },
        {
            id: 4,
            title: 'Special Offer',
            description: 'Get 10% bonus on deposits above ₹5000 this weekend only',
            date: '20-5-2025',
            time: '09:15 AM',
            icon: 'gift'
        },
        {
            id: 5,
            title: 'Account Verified',
            description: 'Your account verification is complete. You can now withdraw funds',
            date: '19-5-2025',
            time: '04:30 PM',
            icon: 'checkmark-circle'
        },
        {
            id: 6,
            title: 'New Feature',
            description: 'Bid history tracking feature has been added to your account',
            date: '18-5-2025',
            time: '03:10 PM',
            icon: 'newspaper'
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#4338CA" barStyle="light-content" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Notifications</Text>
            </View>

            {/* Notification List */}
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                {notifications.map((notification) => (
                    <View key={notification.id} style={styles.notificationCard}>
                        <View style={styles.notificationIcon}>
                            <Ionicons name={notification.icon} size={24} color="#4338CA" />
                        </View>

                        <View style={styles.notificationContent}>
                            <Text style={styles.notificationTitle}>{notification.title}</Text>
                            <Text style={styles.notificationDescription}>{notification.description}</Text>

                            <View style={styles.notificationFooter}>
                                <Text style={styles.notificationDate}>{notification.date}</Text>
                                <Text style={styles.notificationTime}>{notification.time}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#4338CA',
        paddingVertical: 15,
        paddingHorizontal: 20,
        elevation: 5,
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    scrollView: {
        flex: 1,
    },
    scrollContainer: {
        padding: 15,
        paddingBottom: 20,
    },
    notificationCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    notificationIcon: {
        backgroundColor: 'rgba(67, 56, 202, 0.1)',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    notificationContent: {
        flex: 1,
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    notificationDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    notificationFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    notificationDate: {
        fontSize: 12,
        color: '#999',
    },
    notificationTime: {
        fontSize: 12,
        color: '#999',
    },
});

export default NotificationScreen;