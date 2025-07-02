import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

type TransactionItem = {
    id: number;
    title: string;
    icon: string;
    iconType: 'material' | 'ionicons';
    onPress: () => void;
};

const PassbookScreen = () => {
    const transactionItems: TransactionItem[] = [
        {
            id: 1,
            title: 'Winning History',
            icon: 'history',
            iconType: 'material',
            onPress: () => console.log('Winning History pressed'),
        },
        {
            id: 2,
            title: 'Bid History',
            icon: 'history',
            iconType: 'material',
            onPress: () => console.log('Bid History pressed'),
        },
        {
            id: 3,
            title: 'Add Fund History',
            icon: 'account-balance-wallet',
            iconType: 'material',
            onPress: () => console.log('Add Fund History pressed'),
        },
        {
            id: 4,
            title: 'Withdraw History',
            icon: 'local-atm',
            iconType: 'material',
            onPress: () => console.log('Withdraw History pressed'),
        },
    ];

    const renderIcon = (item: TransactionItem) => {
        if (item.iconType === 'ionicons') {
            return <Ionicons name={item.icon as any} size={24} color="#fff" />;
        } else {
            return <MaterialIcons name={item.icon as any} size={24} color="#fff" />;
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#6366F1" />

            {/* Header */}
            <View style={styles.header}>
                <SafeAreaView>
                    <Text style={styles.headerTitle}>Passbook</Text>
                </SafeAreaView>
            </View>

            {/* Content */}
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Transactions Card */}
                <View style={styles.transactionsCard}>
                    <Text style={styles.transactionsTitle}>Transactions</Text>

                    <View style={styles.menuList}>
                        {transactionItems.map((item, index) => (
                            <TouchableOpacity
                                key={item.id}
                                style={[
                                    styles.menuItem,
                                    index < transactionItems.length - 1 && styles.menuItemWithBorder
                                ]}
                                onPress={item.onPress}
                                activeOpacity={0.7}
                            >
                                <View style={styles.iconContainer}>
                                    {renderIcon(item)}
                                </View>
                                <Text style={styles.menuTitle}>{item.title}</Text>
                                <MaterialIcons name="chevron-right" size={20} color="#999" />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        backgroundColor: '#6366F1',
        paddingBottom: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 10,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    transactionsCard: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    transactionsTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#333',
        marginBottom: 20,
    },
    menuList: {
        // Container for menu items
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },
    menuItemWithBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    iconContainer: {
        width: 45,
        height: 45,
        borderRadius: 8,
        backgroundColor: '#6366F1',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    menuTitle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#333',
    },
});

export default PassbookScreen;