import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    StatusBar,
    Switch,
    TouchableOpacity
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const SettingsScreen = () => {
    // Notification Toggles
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [galiNotifications, setGaliNotifications] = useState(true);
    const [desawarNotifications, setDesawarNotifications] = useState(true);
    const [mainNotifications, setMainNotifications] = useState(true);
    const [starlineNotifications, setStarlineNotifications] = useState(false);

    // Other Settings
    const [darkMode, setDarkMode] = useState(false);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [vibrationEnabled, setVibrationEnabled] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#4338CA" barStyle="light-content" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Settings</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Notification Settings Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Notification Settings</Text>

                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <Ionicons name="notifications" size={24} color="#4338CA" />
                            <Text style={styles.settingText}>Enable Notifications</Text>
                        </View>
                        <Switch
                            value={notificationsEnabled}
                            onValueChange={setNotificationsEnabled}
                            trackColor={{ false: "#767577", true: "#4338CA" }}
                            thumbColor={notificationsEnabled ? "#f5f5f5" : "#f4f3f4"}
                        />
                    </View>

                    {/* Game Specific Notifications */}
                    <Text style={styles.subSectionTitle}>Game Notifications</Text>

                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <MaterialIcons name="casino" size={24} color="#4338CA" />
                            <Text style={styles.settingText}>Gali Results</Text>
                        </View>
                        <Switch
                            value={galiNotifications && notificationsEnabled}
                            onValueChange={setGaliNotifications}
                            trackColor={{ false: "#767577", true: "#4338CA" }}
                            thumbColor={galiNotifications && notificationsEnabled ? "#f5f5f5" : "#f4f3f4"}
                            disabled={!notificationsEnabled}
                        />
                    </View>

                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <MaterialIcons name="casino" size={24} color="#4338CA" />
                            <Text style={styles.settingText}>Desawar Results</Text>
                        </View>
                        <Switch
                            value={desawarNotifications && notificationsEnabled}
                            onValueChange={setDesawarNotifications}
                            trackColor={{ false: "#767577", true: "#4338CA" }}
                            thumbColor={desawarNotifications && notificationsEnabled ? "#f5f5f5" : "#f4f3f4"}
                            disabled={!notificationsEnabled}
                        />
                    </View>

                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <MaterialIcons name="casino" size={24} color="#4338CA" />
                            <Text style={styles.settingText}>Main Results</Text>
                        </View>
                        <Switch
                            value={mainNotifications && notificationsEnabled}
                            onValueChange={setMainNotifications}
                            trackColor={{ false: "#767577", true: "#4338CA" }}
                            thumbColor={mainNotifications && notificationsEnabled ? "#f5f5f5" : "#f4f3f4"}
                            disabled={!notificationsEnabled}
                        />
                    </View>

                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <MaterialIcons name="casino" size={24} color="#4338CA" />
                            <Text style={styles.settingText}>Starline Results</Text>
                        </View>
                        <Switch
                            value={starlineNotifications && notificationsEnabled}
                            onValueChange={setStarlineNotifications}
                            trackColor={{ false: "#767577", true: "#4338CA" }}
                            thumbColor={starlineNotifications && notificationsEnabled ? "#f5f5f5" : "#f4f3f4"}
                            disabled={!notificationsEnabled}
                        />
                    </View>
                </View>

                {/* App Settings Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>App Settings</Text>

                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <Ionicons name="moon" size={24} color="#4338CA" />
                            <Text style={styles.settingText}>Dark Mode</Text>
                        </View>
                        <Switch
                            value={darkMode}
                            onValueChange={setDarkMode}
                            trackColor={{ false: "#767577", true: "#4338CA" }}
                            thumbColor={darkMode ? "#f5f5f5" : "#f4f3f4"}
                        />
                    </View>

                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <Ionicons name="volume-high" size={24} color="#4338CA" />
                            <Text style={styles.settingText}>Sound</Text>
                        </View>
                        <Switch
                            value={soundEnabled}
                            onValueChange={setSoundEnabled}
                            trackColor={{ false: "#767577", true: "#4338CA" }}
                            thumbColor={soundEnabled ? "#f5f5f5" : "#f4f3f4"}
                        />
                    </View>

                    <View style={styles.settingItem}>
                        <View style={styles.settingInfo}>
                            <Ionicons name="phone-portrait" size={24} color="#4338CA" />
                            <Text style={styles.settingText}>Vibration</Text>
                        </View>
                        <Switch
                            value={vibrationEnabled}
                            onValueChange={setVibrationEnabled}
                            trackColor={{ false: "#767577", true: "#4338CA" }}
                            thumbColor={vibrationEnabled ? "#f5f5f5" : "#f4f3f4"}
                        />
                    </View>
                </View>

                {/* Other Options */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>More Options</Text>

                    <TouchableOpacity style={styles.optionItem}>
                        <View style={styles.settingInfo}>
                            <Ionicons name="help-circle" size={24} color="#4338CA" />
                            <Text style={styles.settingText}>Help & Support</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionItem}>
                        <View style={styles.settingInfo}>
                            <Ionicons name="share-social" size={24} color="#4338CA" />
                            <Text style={styles.settingText}>Share App</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionItem}>
                        <View style={styles.settingInfo}>
                            <Ionicons name="star" size={24} color="#4338CA" />
                            <Text style={styles.settingText}>Rate Us</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionItem}>
                        <View style={styles.settingInfo}>
                            <Ionicons name="information-circle" size={24} color="#4338CA" />
                            <Text style={styles.settingText}>About App</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>
                </View>
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
    scrollContainer: {
        paddingBottom: 30,
    },
    section: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4338CA',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        paddingBottom: 10,
    },
    subSectionTitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 10,
        marginBottom: 15,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f5f5f5',
    },
    optionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f5f5f5',
    },
    settingInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 15,
    },
});

export default SettingsScreen;