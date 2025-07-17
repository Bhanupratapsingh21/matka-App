import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StatusBar,
    StyleSheet,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { height: screenHeight } = Dimensions.get('window');

export default function GhaziabadApp() {
    const [activeTab, setActiveTab] = useState('JODI');
    const [digit, setDigit] = useState('');
    const [amount, setAmount] = useState('');
    const [paltiOption, setPaltiOption] = useState('without');
    const [selectedNumbers, setSelectedNumbers] = useState([]);

    const tabs = ['JODI', 'CROSSING', 'COPY PASTE'];

    const renderStatusBar = () => (
        <View style={styles.statusBar}>
            <Text style={styles.statusText}>3:51</Text>
            <View style={styles.statusRight}>
                <Text style={styles.statusSmall}>9.00</Text>
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
    );

    const renderJodiTab = () => (
        <View style={styles.tabContent}>
            {/* Andar Haruf */}
            <Text style={styles.sectionTitle}>Andar Haruf ( अंदर )</Text>
            <View style={styles.numberGrid}>
                <View style={styles.gridHeader}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                        <View key={num} style={styles.gridHeaderCell}>
                            <Text style={styles.gridHeaderText}>{num}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.gridRow}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                        <View key={num} style={styles.gridCell} />
                    ))}
                </View>
            </View>

            {/* Bahar Haruf */}
            <Text style={styles.sectionTitle}>Bahar Haruf ( बहार )</Text>
            <View style={styles.numberGrid}>
                <View style={styles.gridHeader}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                        <View key={num} style={styles.gridHeaderCell}>
                            <Text style={styles.gridHeaderText}>{num}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.gridRow}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                        <View key={num} style={styles.gridCell} />
                    ))}
                </View>
            </View>

            {/* Main Number Grid */}
            <View style={styles.mainGrid}>
                {[
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
                    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
                    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
                    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70]
                ].map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.mainGridRow}>
                        <View style={styles.mainGridHeader}>
                            {row.map(num => (
                                <View key={num} style={styles.mainGridHeaderCell}>
                                    <Text style={styles.mainGridHeaderText}>
                                        {num < 10 ? `0${num}` : num}
                                    </Text>
                                </View>
                            ))}
                        </View>
                        <View style={styles.mainGridCells}>
                            {row.map(num => (
                                <View key={num} style={styles.mainGridCell} />
                            ))}
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );

    const renderCrossingTab = () => (
        <View style={styles.tabContent}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Digit"
                    value={digit}
                    onChangeText={setDigit}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Amount"
                    value={amount}
                    onChangeText={setAmount}
                    keyboardType="numeric"
                />
            </View>

            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
        </View>
    );

    const renderCopyPasteTab = () => (
        <View style={styles.tabContent}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Digit"
                    value={digit}
                    onChangeText={setDigit}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Amount"
                    value={amount}
                    onChangeText={setAmount}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.paltiContainer}>
                <TouchableOpacity
                    style={[styles.paltiButton, paltiOption === 'with' && styles.paltiButtonActive]}
                    onPress={() => setPaltiOption('with')}
                >
                    <Text style={[styles.paltiButtonText, paltiOption === 'with' && styles.paltiButtonTextActive]}>
                        With Palti
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.paltiButton, paltiOption === 'without' && styles.paltiButtonActive]}
                    onPress={() => setPaltiOption('without')}
                >
                    <Text style={[styles.paltiButtonText, paltiOption === 'without' && styles.paltiButtonTextActive]}>
                        Without Palti
                    </Text>
                    {paltiOption === 'without' && (
                        <View style={styles.radioButton}>
                            <View style={styles.radioButtonInner} />
                        </View>
                    )}
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
        </View>
    );

    const renderBottomSection = () => (
        <View style={styles.bottomSection}>
            {/* Navigation Buttons */}
            <View style={styles.navigationButtons}>
                <TouchableOpacity style={styles.navButton}>
                    <Text style={styles.navButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                    <Text style={styles.navButtonText}>Go To Top</Text>
                </TouchableOpacity>
            </View>

            {/* Company Info */}
            <View style={styles.companyInfo}>


                <Text style={styles.companyText}>
                    Our website is operated by MH GAMES International, a company established under the law of Isle of Man, with registered address at 1-10 Ballanoa Meadow IM4-2HT, Isle Of Man, and having its gaming sublicense issued by Isle of Man e-Gaming and all rights to operate the gaming software worldwide.
                </Text>

                <View style={styles.ageRestriction}>
                    <View style={styles.ageIcon}>
                        <Text style={styles.ageIconText}>18+</Text>
                    </View>
                    <Text style={styles.ageText}>
                        Players need to be 18+ in order to register. Underage gambling is prohibited.
                    </Text>
                </View>

                <Text style={styles.copyright}>
                    Copyright © 2024 - MH GAMES. All Rights Reserved.
                </Text>
            </View>

            {/* Scroll to Top Button */}
            <TouchableOpacity style={styles.scrollToTop}>
                <Ionicons name="arrow-up" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#6366f1" />

            {/* Header - Fixed */}
            <View style={styles.header}>
                {renderStatusBar()}
                <View style={styles.headerContent}>
                    <Text style={styles.headerTitle}>GHAZIABAD</Text>
                    <View style={styles.headerRight}>
                        <Text style={styles.headerRightText}>गेम का लास्ट टाइम</Text>
                        <Text style={styles.headerTime}>03:44:27</Text>
                    </View>
                </View>
            </View>

            {/* Tabs - Fixed */}
            <View style={styles.tabContainer}>
                {tabs.map(tab => (
                    <TouchableOpacity
                        key={tab}
                        style={[styles.tab, activeTab === tab && styles.activeTab]}
                        onPress={() => setActiveTab(tab)}
                    >
                        <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Main Scrollable Content */}
            <ScrollView
                style={styles.mainScrollView}
                showsVerticalScrollIndicator={false}
                bounces={false}
            >
                {/* Tab Content */}
                <View style={styles.contentContainer}>
                    {activeTab === 'JODI' && renderJodiTab()}
                    {activeTab === 'CROSSING' && renderCrossingTab()}
                    {activeTab === 'COPY PASTE' && renderCopyPasteTab()}
                </View>

                {/* Bottom Section */}
                {renderBottomSection()}

                {/* Extra padding at bottom to ensure content is not hidden behind bottom bar */}
                <View style={styles.bottomPadding} />
            </ScrollView>

            {/* Bottom Bar - Fixed */}
            <View style={styles.bottomBar}>
                <Text style={styles.balanceText}>₹ 0</Text>
                <TouchableOpacity style={styles.playButton}>
                    <Text style={styles.playButtonText}>PLAY</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerRight: {
        alignItems: 'flex-end',
    },
    headerRightText: {
        color: 'white',
        fontSize: 12,
    },
    headerTime: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginHorizontal: 4,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    activeTab: {
        backgroundColor: '#6366f1',
    },
    tabText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#666',
    },
    activeTabText: {
        color: 'white',
    },
    mainScrollView: {
        flex: 1,
    },
    contentContainer: {
        minHeight: screenHeight * 0.4, // Ensure minimum height for content
    },
    tabContent: {
        padding: 20, // Increased padding
        minHeight: 400, // Minimum height for tab content
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ef4444',
        marginBottom: 16, // Increased margin
        marginTop: 20, // Increased margin
    },
    numberGrid: {
        marginBottom: 24, // Increased margin
    },
    gridHeader: {
        flexDirection: 'row',
        backgroundColor: '#6366f1',
    },
    gridHeaderCell: {
        flex: 1,
        padding: 14, // Increased padding
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
    },
    gridHeaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    gridRow: {
        flexDirection: 'row',
    },
    gridCell: {
        flex: 1,
        height: 45, // Increased height
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white',
    },
    mainGrid: {
        marginTop: 24, // Increased margin
    },
    mainGridRow: {
        marginBottom: 3, // Increased margin
    },
    mainGridHeader: {
        flexDirection: 'row',
        backgroundColor: '#6366f1',
    },
    mainGridHeaderCell: {
        flex: 1,
        padding: 10, // Increased padding
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
    },
    mainGridHeaderText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    mainGridCells: {
        flexDirection: 'row',
    },
    mainGridCell: {
        flex: 1,
        height: 40, // Increased height
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white',
    },
    inputContainer: {
        marginBottom: 20, // Increased margin
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 18, // Increased padding
        fontSize: 16,
        backgroundColor: 'white',
        minHeight: 55, // Added minimum height
    },
    paltiContainer: {
        flexDirection: 'row',
        gap: 16, // Increased gap
        marginBottom: 20, // Increased margin
    },
    paltiButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18, // Increased padding
        borderRadius: 8,
        backgroundColor: '#6366f1',
        position: 'relative',
        minHeight: 55, // Added minimum height
    },
    paltiButtonActive: {
        backgroundColor: '#6366f1',
    },
    paltiButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    paltiButtonTextActive: {
        color: 'white',
    },
    radioButton: {
        position: 'absolute',
        right: 16,
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioButtonInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    addButton: {
        backgroundColor: '#6366f1',
        paddingVertical: 18, // Increased padding
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10, // Added margin
        minHeight: 55, // Added minimum height
    },
    addButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomSection: {
        backgroundColor: 'white',
        padding: 20, // Increased padding
        marginTop: 20, // Added margin
    },
    resultsTable: {
        marginBottom: 20, // Increased margin
    },
    tableContainer: {
        minWidth: 600,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tableHeaderText: {
        flex: 1,
        padding: 12, // Increased padding
        fontWeight: 'bold',
        textAlign: 'center',
        minWidth: 80, // Increased width
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    tableCellText: {
        flex: 1,
        padding: 12, // Increased padding
        textAlign: 'center',
        minWidth: 80, // Increased width
    },
    navigationButtons: {
        flexDirection: 'row',
        gap: 16, // Increased gap
        marginBottom: 30, // Increased margin
    },
    navButton: {
        flex: 1,
        paddingVertical: 15, // Increased padding
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'white',
        minHeight: 50, // Added minimum height
    },
    navButtonText: {
        fontSize: 16,
        color: '#333',
    },
    companyInfo: {
        alignItems: 'center',
        marginBottom: 30, // Increased margin
        paddingHorizontal: 10, // Added padding
    },
    logoContainer: {
        marginBottom: 20, // Increased margin
    },
    logo: {
        backgroundColor: '#6366f1',
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 12,
        transform: [{ rotate: '45deg' }],
        alignItems: 'center',
    },
    logoText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logoSubText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    companyText: {
        fontSize: 14,
        lineHeight: 22, // Increased line height
        textAlign: 'justify',
        color: '#666',
        marginBottom: 20, // Increased margin
    },
    ageRestriction: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16, // Increased gap
        marginBottom: 20, // Increased margin
        paddingHorizontal: 10, // Added padding
    },
    ageIcon: {
        width: 45, // Increased size
        height: 45, // Increased size
        borderRadius: 22.5,
        backgroundColor: '#ef4444',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ageIconText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    ageText: {
        flex: 1,
        fontSize: 14,
        color: '#666',
        lineHeight: 20, // Added line height
    },
    copyright: {
        fontSize: 12,
        color: '#999',
        textAlign: 'center',
        paddingHorizontal: 20, // Added padding
    },
    scrollToTop: {
        position: 'absolute',
        right: 20, // Adjusted position
        bottom: 100, // Adjusted position
        width: 55, // Increased size
        height: 55, // Increased size
        borderRadius: 27.5,
        backgroundColor: '#6366f1',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // Added shadow for Android
        shadowColor: '#000', // Added shadow for iOS
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20, // Increased padding
        paddingVertical: 15, // Increased padding
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        minHeight: 70, // Added minimum height
    },
    balanceText: {
        fontSize: 20, // Increased font size
        fontWeight: 'bold',
        color: '#22c55e',
    },
    playButton: {
        backgroundColor: '#22c55e',
        paddingHorizontal: 36, // Increased padding
        paddingVertical: 15, // Increased padding
        borderRadius: 8,
        minHeight: 50, // Added minimum height
        minWidth: 100, // Added minimum width
        justifyContent: 'center',
        alignItems: 'center',
    },
    playButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomPadding: {
        height: 20, // Extra padding at bottom
    },
});