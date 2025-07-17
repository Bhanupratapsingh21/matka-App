import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    StyleSheet,
    SafeAreaView,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WithdrawScreen() {
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState('');

    const paymentMethods = [
        { id: 'phonepay', name: 'Phone Pay', color: '#6B46C1', icon: '📱' },
        { id: 'paytm', name: 'Paytm', color: '#00BAF2', icon: 'paytm' },
        { id: 'googlepay', name: 'Google Pay', color: '#4285F4', icon: 'G' },
        { id: 'bank', name: 'BANK', color: '#10B981', icon: '🏦' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#6366f1" />

            {/* Header */}
            <View style={styles.header}>
                {/* Status Bar Simulation */}
                <View style={styles.statusBar}>
                    <Text style={styles.statusText}>3:50</Text>
                    <View style={styles.statusRight}>
                        <Text style={styles.statusSmall}>2.00</Text>
                        <Text style={styles.statusSmall}>KB/S</Text>
                        <View style={styles.signalBars}>
                            <View style={[styles.signalBar, styles.signalActive]} />
                            <View style={[styles.signalBar, styles.signalActive]} />
                            <View style={[styles.signalBar, styles.signalActive]} />
                            <View style={[styles.signalBar, styles.signalInactive]} />
                        </View>
                        <View style={styles.battery}>
                            <View style={styles.batteryLevel} />
                        </View>
                        <Text style={styles.statusSmall}>72%</Text>
                    </View>
                </View>

                {/* Header Content */}
                <View style={styles.headerContent}>
                    <TouchableOpacity>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Withdraw Points</Text>
                </View>
            </View>

            {/* Black Banner */}
            <View style={styles.blackBanner}>
                <Text style={styles.bannerText}>Minimum र1000 - max 25 Lakh विथड्रॉल कर सकते हो</Text>
            </View>

            <ScrollView style={styles.content}>
                {/* Bank Details Message */}
                <Text style={styles.bankMessage}>
                    FOR WITHDRAW PLEASE ADD BANK DETAILS FIRST !
                </Text>

                {/* Payment Methods */}
                <View style={styles.paymentMethods}>
                    {paymentMethods.map((method) => (
                        <TouchableOpacity
                            key={method.id}
                            style={styles.paymentMethod}
                            onPress={() => setSelectedMethod(method.id)}
                        >
                            <View style={[styles.paymentIcon, { backgroundColor: method.color }]}>
                                {method.id === 'phonepay' && (
                                    <View style={styles.phonePayIcon}>
                                        <Text style={styles.phonePayText}>₹</Text>
                                    </View>
                                )}
                                {method.id === 'paytm' && (
                                    <Text style={styles.paytmText}>paytm</Text>
                                )}
                                {method.id === 'googlepay' && (
                                    <Text style={styles.googlePayText}>G Pay</Text>
                                )}
                                {method.id === 'bank' && (
                                    <Text style={styles.bankIcon}>🏦</Text>
                                )}
                            </View>
                            <Text style={styles.paymentMethodName}>{method.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Withdraw Points Section */}
                <View style={styles.withdrawSection}>
                    <View style={styles.withdrawHeader}>
                        <Ionicons name="hand-left" size={20} color="#666" />
                        <Text style={styles.withdrawTitle}>Withdraw Points</Text>
                    </View>

                    <View style={styles.divider} />

                    <Text style={styles.withdrawLimit}>You can withdraw only 0</Text>

                    {/* Select Method Button */}
                    <TouchableOpacity style={styles.selectMethodButton}>
                        <Text style={styles.selectMethodText}>Select Method</Text>
                    </TouchableOpacity>

                    {/* Terms Checkbox */}
                    <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={() => setAcceptTerms(!acceptTerms)}
                    >
                        <View style={[styles.checkbox, acceptTerms && styles.checkboxChecked]}>
                            {acceptTerms && <Ionicons name="checkmark" size={16} color="white" />}
                        </View>
                        <Text style={styles.checkboxText}>I Accept all terms & conditions.</Text>
                    </TouchableOpacity>

                    {/* Submit Button */}
                    <TouchableOpacity style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="hammer" size={24} color="#666" />
                    <Text style={styles.navText}>My Bids</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="book" size={24} color="#666" />
                    <Text style={styles.navText}>Passbook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
                    <View style={styles.homeButton}>
                        <Ionicons name="home" size={24} color="white" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="wallet" size={24} color="#666" />
                    <Text style={styles.navText}>Funds</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="stats-chart" size={24} color="#666" />
                    <Text style={styles.navText}>Game Rates</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafb',
    },
    header: {
        backgroundColor: '#6366f1',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    statusBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    statusText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
    },
    statusRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    statusSmall: {
        color: 'white',
        fontSize: 12,
    },
    signalBars: {
        flexDirection: 'row',
        gap: 2,
    },
    signalBar: {
        width: 4,
        height: 12,
        borderRadius: 2,
    },
    signalActive: {
        backgroundColor: 'white',
    },
    signalInactive: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    battery: {
        width: 16,
        height: 8,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 2,
        padding: 1,
    },
    batteryLevel: {
        flex: 0.75,
        backgroundColor: 'white',
        borderRadius: 1,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },
    blackBanner: {
        backgroundColor: '#000',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    bannerText: {
        color: 'white',
        fontSize: 16,
    },
    content: {
        flex: 1,
        padding: 16,
    },
    bankMessage: {
        fontSize: 16,
        fontWeight: '600',
        color: '#374151',
        marginBottom: 24,
        textAlign: 'left',
    },
    paymentMethods: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 32,
    },
    paymentMethod: {
        alignItems: 'center',
        gap: 8,
    },
    paymentIcon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    phonePayIcon: {
        backgroundColor: '#6B46C1',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    phonePayText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    paytmText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    googlePayText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    bankIcon: {
        fontSize: 24,
    },
    paymentMethodName: {
        fontSize: 14,
        color: '#374151',
        fontWeight: '500',
    },
    withdrawSection: {
        gap: 16,
    },
    withdrawHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    withdrawTitle: {
        color: '#7c3aed',
        fontSize: 18,
        fontWeight: '500',
    },
    divider: {
        height: 1,
        backgroundColor: '#d1d5db',
    },
    withdrawLimit: {
        color: '#ef4444',
        fontSize: 16,
        fontWeight: '500',
    },
    selectMethodButton: {
        borderWidth: 2,
        borderColor: '#7c3aed',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 16,
    },
    selectMethodText: {
        color: '#374151',
        fontSize: 18,
        fontWeight: '500',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginTop: 16,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#d1d5db',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        backgroundColor: '#7c3aed',
        borderColor: '#7c3aed',
    },
    checkboxText: {
        fontSize: 16,
        color: '#374151',
    },
    submitButton: {
        backgroundColor: '#000',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 24,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    bottomNav: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 8,
        borderTopWidth: 1,
        borderTopColor: '#e5e7eb',
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 8,
    },
    navItemActive: {
        position: 'relative',
    },
    navText: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
    homeButton: {
        backgroundColor: '#6366f1',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -25,
    },
});