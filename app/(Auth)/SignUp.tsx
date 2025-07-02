import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function SignUpScreen() {
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        router.push("/")
    };

    const handleSignIn = () => {
        router.push("/(Auth)/SignIn")
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4338CA" />

            {/* Header with curved design */}
            <View style={styles.header}>
                <View style={styles.headerCurve} />
            </View>

            {/* KeyboardAvoidingView to handle keyboard */}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidingView}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                >
                    {/* Main content */}
                    <View style={styles.content}>
                        {/* Logo */}
                        <View style={styles.logoContainer}>
                            <View style={styles.logoBackground}>
                                <View style={styles.logoContent}>
                                    {/* Playing cards representation */}
                                    <View style={styles.cardsContainer}>
                                        <View style={[styles.card, styles.card1]} />
                                        <View style={[styles.card, styles.card2]} />
                                    </View>
                                    {/* Dice representation */}
                                    <View style={styles.diceContainer}>
                                        <View style={styles.dice} />
                                        <View style={styles.dice} />
                                    </View>
                                    <Text style={styles.logoText}>BOMBAY</Text>
                                    <Text style={styles.logoSubText}>MATKA</Text>
                                </View>
                            </View>
                        </View>

                        {/* Registration form */}
                        <View style={styles.formContainer}>
                            <Text style={styles.registerTitle}>Register</Text>
                            <Text style={styles.registerSubtitle}>Create your account</Text>

                            {/* Name input */}
                            <View style={styles.inputContainer}>
                                <View style={styles.inputIconContainer}>
                                    <Ionicons name="person" size={24} color="white" />
                                </View>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Enter Full Name"
                                    placeholderTextColor="#999"
                                    value={name}
                                    onChangeText={setName}
                                    autoCapitalize="words"
                                />
                            </View>

                            {/* Mobile number input */}
                            <View style={styles.inputContainer}>
                                <View style={styles.inputIconContainer}>
                                    <Ionicons name="phone-portrait" size={24} color="white" />
                                </View>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Enter Mobile Number"
                                    placeholderTextColor="#999"
                                    value={mobileNumber}
                                    onChangeText={setMobileNumber}
                                    keyboardType="phone-pad"
                                />
                            </View>

                            {/* Password input */}
                            <View style={styles.inputContainer}>
                                <View style={styles.inputIconContainer}>
                                    <Ionicons name="lock-closed" size={24} color="white" />
                                </View>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Enter Password"
                                    placeholderTextColor="#999"
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry
                                />
                            </View>

                            {/* Register button */}
                            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                                <Text style={styles.registerButtonText}>REGISTER</Text>
                            </TouchableOpacity>

                            {/* Sign in link */}
                            <TouchableOpacity onPress={() => router.push("/SignIn")} style={styles.signInContainer}>
                                <Text style={styles.signInText}>
                                    Already have an account? <Text style={styles.signInLink}>Sign In</Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
    },
    header: {
        height: 120,
        backgroundColor: '#4338CA',
        position: 'relative',
    },
    headerCurve: {
        position: 'absolute',
        bottom: -50,
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: '#4338CA',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    content: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 40,
        paddingBottom: 20, // Added padding at bottom
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },
    logoBackground: {
        width: 120,
        height: 120,
        backgroundColor: '#4338CA',
        transform: [{ rotate: '45deg' }],
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    logoContent: {
        transform: [{ rotate: '-45deg' }],
        alignItems: 'center',
    },
    cardsContainer: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    card: {
        width: 12,
        height: 16,
        backgroundColor: 'white',
        marginHorizontal: 1,
        borderRadius: 2,
    },
    card1: {
        transform: [{ rotate: '-10deg' }],
    },
    card2: {
        transform: [{ rotate: '10deg' }],
    },
    diceContainer: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    dice: {
        width: 8,
        height: 8,
        backgroundColor: '#DC2626',
        marginHorizontal: 1,
        borderRadius: 2,
    },
    logoText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    logoSubText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    formContainer: {
        flex: 1,
    },
    registerTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    registerSubtitle: {
        fontSize: 16,
        color: '#999',
        marginBottom: 40,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    inputIconContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#4338CA',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    textInput: {
        flex: 1,
        height: 50,
        fontSize: 16,
        color: '#333',
        paddingRight: 20,
    },
    registerButton: {
        backgroundColor: '#4338CA',
        borderRadius: 25,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    registerButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    signInContainer: {
        alignItems: 'center',
        marginBottom: 20, // Added margin to ensure it's visible
    },
    signInText: {
        fontSize: 16,
        color: '#333',
    },
    signInLink: {
        color: '#4338CA',
        fontWeight: 'bold',
    },
});