import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StatusBar,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
    const pointAmounts = [500, 1000, 2000, 5000, 10000, 20000];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#6366f1" />

            {/* Header */}
            <View style={styles.header}>
                {/* Status Bar Simulation */}
                <View style={styles.statusBar}>
                    <Text style={styles.statusText}>3:49</Text>
                    <View style={styles.statusRight}>
                        <Text style={styles.statusSmall}>0.57</Text>
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
                    <Text style={styles.headerTitle}>Add Point</Text>
                </View>
            </View>

            <ScrollView style={styles.content}>
                {/* Contact Information Card */}
                <View style={styles.contactCard}>
                    <Text style={styles.hindiText}>
                        अगर आपको कोई भी समस्या है तो कॉल पर बात कर सकते हैं या मैसेज कर सकते हैं 5 सेकंड में आपका समाधान हो जाएगा
                    </Text>

                    <View style={styles.divider} />

                    <Text style={styles.englishText}>For Fund Query's please call or whatsapp</Text>

                    <View style={styles.contactButtons}>
                        <TouchableOpacity style={styles.contactButton}>
                            <Ionicons name="logo-whatsapp" size={20} color="#25D366" />
                            <Text style={styles.contactButtonText}>Whatsapp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.contactButton}>
                            <Ionicons name="call" size={20} color="#666" />
                            <Text style={styles.contactButtonText}>Call</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Enter Point Section */}
                <View style={styles.pointSection}>
                    <View style={styles.pointHeader}>
                        <Ionicons name="hand-left" size={20} color="#666" />
                        <Text style={styles.pointTitle}>Enter Point</Text>
                    </View>

                    <View style={styles.divider} />

                    {/* Point Amount Buttons */}
                    <View style={styles.pointGrid}>
                        {pointAmounts.map((amount) => (
                            <TouchableOpacity key={amount} style={styles.pointButton}>
                                <Text style={styles.pointButtonText}>{amount}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Add Point Button */}
                    <TouchableOpacity style={styles.addPointButton}>
                        <Text style={styles.addPointButtonText}>ADD POINT</Text>
                    </TouchableOpacity>

                    {/* Input Field */}
                    <View style={styles.inputCard}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter custom amount"
                            placeholderTextColor="#999"
                            keyboardType="numeric"
                        />
                    </View>
                </View>
            </ScrollView>
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
    content: {
        flex: 1,
        padding: 16,
    },
    contactCard: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#d1d5db',
        borderRadius: 12,
        padding: 24,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    hindiText: {
        color: '#374151',
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 16,
    },
    divider: {
        height: 1,
        backgroundColor: '#d1d5db',
        marginVertical: 16,
    },
    englishText: {
        color: '#4b5563',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 16,
    },
    contactButtons: {
        flexDirection: 'row',
        gap: 16,
    },
    contactButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 24,
        backgroundColor: 'transparent',
    },
    contactButtonText: {
        color: '#4b5563',
        fontSize: 16,
    },
    pointSection: {
        gap: 16,
    },
    pointHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    pointTitle: {
        color: '#7c3aed',
        fontSize: 18,
        fontWeight: '500',
    },
    pointGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        justifyContent: 'space-between',
    },
    pointButton: {
        backgroundColor: '#2563eb',
        paddingVertical: 24,
        borderRadius: 12,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pointButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
    addPointButton: {
        backgroundColor: '#000',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 8,
    },
    addPointButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
    inputCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    textInput: {
        padding: 16,
        fontSize: 18,
        color: '#374151',
    },
});