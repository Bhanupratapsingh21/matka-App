import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    StyleSheet,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');

type DayResult = { top: string; bottom: string; isRed?: boolean };
type ChartRow = { date: string; results: { Mon: DayResult; Tue: DayResult; Wed: DayResult; Thu: DayResult; Fri: DayResult; Sat: DayResult; Sun: DayResult } };

export default function ChartScreen() {
    const [chartData, setChartData] = useState<ChartRow[]>([]);

    // Sample dynamic data - in real app this would come from API
    const generateChartData = () => {
        const data = [
            {
                date: '30/06/2025',
                results: {
                    Mon: { top: '190', bottom: '05' },
                    Tue: { top: '122', bottom: '55', isRed: true },
                    Wed: { top: '***', bottom: '**' },
                    Thu: { top: '***', bottom: '**' },
                    Fri: { top: '***', bottom: '**' },
                    Sat: { top: '***', bottom: '**' },
                    Sun: { top: '***', bottom: '**' }
                }
            },
            {
                date: '06/07/2025',
                results: {
                    Mon: { top: '230', bottom: '' },
                    Tue: { top: '140', bottom: '' },
                    Wed: { top: '***', bottom: '' },
                    Thu: { top: '***', bottom: '' },
                    Fri: { top: '***', bottom: '' },
                    Sat: { top: '***', bottom: '' },
                    Sun: { top: '***', bottom: '' }
                }
            },
            {
                date: '23/06/2025',
                results: {
                    Mon: { top: '168', bottom: '57' },
                    Tue: { top: '789', bottom: '42' },
                    Wed: { top: '899', bottom: '60' },
                    Thu: { top: '255', bottom: '28' },
                    Fri: { top: '460', bottom: '03' },
                    Sat: { top: '230', bottom: '53' },
                    Sun: { top: '149', bottom: '47' }
                }
            },
            {
                date: '29/06/2025',
                results: {
                    Mon: { top: '340', bottom: '' },
                    Tue: { top: '570', bottom: '' },
                    Wed: { top: '235', bottom: '' },
                    Thu: { top: '350', bottom: '' },
                    Fri: { top: '120', bottom: '' },
                    Sat: { top: '580', bottom: '' },
                    Sun: { top: '359', bottom: '' }
                }
            },
            {
                date: '16/06/2025',
                results: {
                    Mon: { top: '280', bottom: '09' },
                    Tue: { top: '110', bottom: '22', isRed: true },
                    Wed: { top: '455', bottom: '48' },
                    Thu: { top: '359', bottom: '77', isRed: true },
                    Fri: { top: '156', bottom: '28' },
                    Sat: { top: '135', bottom: '93' },
                    Sun: { top: '178', bottom: '66', isRed: true }
                }
            },
            {
                date: '22/06/2025',
                results: {
                    Mon: { top: '667', bottom: '' },
                    Tue: { top: '570', bottom: '' },
                    Wed: { top: '459', bottom: '' },
                    Thu: { top: '250', bottom: '' },
                    Fri: { top: '567', bottom: '' },
                    Sat: { top: '689', bottom: '' },
                    Sun: { top: '123', bottom: '' }
                }
            },
            {
                date: '09/06/2025',
                results: {
                    Mon: { top: '160', bottom: '76' },
                    Tue: { top: '239', bottom: '48' },
                    Wed: { top: '380', bottom: '14' },
                    Thu: { top: '110', bottom: '20' },
                    Fri: { top: '390', bottom: '28' },
                    Sat: { top: '490', bottom: '35' },
                    Sun: { top: '468', bottom: '81' }
                }
            },
            {
                date: '15/06/2025',
                results: {
                    Mon: { top: '277', bottom: '' },
                    Tue: { top: '369', bottom: '' },
                    Wed: { top: '789', bottom: '' },
                    Thu: { top: '145', bottom: '' },
                    Fri: { top: '459', bottom: '' },
                    Sat: { top: '780', bottom: '' },
                    Sun: { top: '489', bottom: '' }
                }
            },
            {
                date: '02/06/2025',
                results: {
                    Mon: { top: '358', bottom: '69' },
                    Tue: { top: '350', bottom: '89' },
                    Wed: { top: '260', bottom: '88', isRed: true },
                    Thu: { top: '237', bottom: '28' },
                    Fri: { top: '689', bottom: '31' },
                    Sat: { top: '580', bottom: '31' },
                    Sun: { top: '599', bottom: '33', isRed: true }
                }
            },
            {
                date: '08/06/2025',
                results: {
                    Mon: { top: '450', bottom: '' },
                    Tue: { top: '135', bottom: '' },
                    Wed: { top: '378', bottom: '' },
                    Thu: { top: '459', bottom: '' },
                    Fri: { top: '560', bottom: '' },
                    Sat: { top: '100', bottom: '' },
                    Sun: { top: '148', bottom: '' }
                }
            },
            {
                date: '26/05/2025',
                results: {
                    Mon: { top: '228', bottom: '28' },
                    Tue: { top: '120', bottom: '35' },
                    Wed: { top: '359', bottom: '75' },
                    Thu: { top: '245', bottom: '11', isRed: true },
                    Fri: { top: '170', bottom: '84' },
                    Sat: { top: '129', bottom: '25' },
                    Sun: { top: '570', bottom: '29' }
                }
            },
            {
                date: '01/06/2025',
                results: {
                    Mon: { top: '134', bottom: '' },
                    Tue: { top: '357', bottom: '' },
                    Wed: { top: '690', bottom: '' },
                    Thu: { top: '588', bottom: '' },
                    Fri: { top: '680', bottom: '' },
                    Sat: { top: '159', bottom: '' },
                    Sun: { top: '126', bottom: '' }
                }
            },
            {
                date: '19/05/2025',
                results: {
                    Mon: { top: '123', bottom: '61' },
                    Tue: { top: '359', bottom: '77', isRed: true },
                    Wed: { top: '233', bottom: '86' },
                    Thu: { top: '359', bottom: '75' },
                    Fri: { top: '349', bottom: '67' },
                    Sat: { top: '490', bottom: '31' },
                    Sun: { top: '379', bottom: '92' }
                }
            },
            {
                date: '25/05/2025',
                results: {
                    Mon: { top: '245', bottom: '' },
                    Tue: { top: '179', bottom: '' },
                    Wed: { top: '367', bottom: '' },
                    Thu: { top: '230', bottom: '' },
                    Fri: { top: '250', bottom: '' },
                    Sat: { top: '588', bottom: '' },
                    Sun: { top: '129', bottom: '' }
                }
            },
            {
                date: '12/05/2025',
                results: {
                    Mon: { top: '249', bottom: '54' },
                    Tue: { top: '256', bottom: '30' },
                    Wed: { top: '799', bottom: '50' },
                    Thu: { top: '245', bottom: '10' },
                    Fri: { top: '167', bottom: '41' },
                    Sat: { top: '249', bottom: '59' },
                    Sun: { top: '360', bottom: '94' }
                }
            },
            {
                date: '18/05/2025',
                results: {
                    Mon: { top: '680', bottom: '' },
                    Tue: { top: '569', bottom: '' },
                    Wed: { top: '280', bottom: '' },
                    Thu: { top: '190', bottom: '' },
                    Fri: { top: '128', bottom: '' },
                    Sat: { top: '180', bottom: '' },
                    Sun: { top: '680', bottom: '' }
                }
            },
            {
                date: '05/05/2025',
                results: {
                    Mon: { top: '440', bottom: '8*' },
                    Tue: { top: '556', bottom: '67' },
                    Wed: { top: '279', bottom: '84' },
                    Thu: { top: '120', bottom: '39' },
                    Fri: { top: '578', bottom: '00', isRed: true },
                    Sat: { top: '259', bottom: '65' },
                    Sun: { top: '568', bottom: '91' }
                }
            },
            {
                date: '11/05/2025',
                results: {
                    Mon: { top: '370', bottom: '' },
                    Tue: { top: '359', bottom: '' },
                    Wed: { top: '149', bottom: '' },
                    Thu: { top: '379', bottom: '' },
                    Fri: { top: '127', bottom: '' },
                    Sat: { top: '348', bottom: '' },
                    Sun: { top: '128', bottom: '' }
                }
            },
            {
                date: '28/04/2025',
                results: {
                    Mon: { top: '119', bottom: '12' },
                    Tue: { top: '388', bottom: '67' },
                    Wed: { top: '270', bottom: '84' },
                    Thu: { top: '290', bottom: '39' },
                    Fri: { top: '247', bottom: '27' },
                    Sat: { top: '478', bottom: '65' },
                    Sun: { top: '189', bottom: '91' }
                }
            },
            {
                date: '09/06/2024',
                results: {
                    Mon: { top: '***', bottom: '' },
                    Tue: { top: '***', bottom: '' },
                    Wed: { top: '***', bottom: '' },
                    Thu: { top: '***', bottom: '' },
                    Fri: { top: '660', bottom: '' },
                    Sat: { top: '138', bottom: '' },
                    Sun: { top: '670', bottom: '' }
                }
            }
        ];
        setChartData(data);
    };

    useEffect(() => {
        generateChartData();
        // Simulate dynamic updates
        const interval = setInterval(() => {
            generateChartData();
        }, 30000); // Update every 30 seconds

        return () => clearInterval(interval);
    }, []);

    const renderStatusBar = () => (
        <View style={styles.statusBar}>
            <Text style={styles.statusText}>3:55</Text>
            <View style={styles.statusRight}>
                <Text style={styles.statusSmall}>4.00</Text>
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
                <Text style={styles.statusSmall}>71%</Text>
            </View>
        </View>
    );

    const renderTableHeader = () => (
        <View style={styles.tableHeader}>
            <View style={styles.dateColumn}>
                <Text style={styles.headerText}>Date</Text>
            </View>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <View key={day} style={styles.dayColumn}>
                    <Text style={styles.headerText}>{day}</Text>
                </View>
            ))}
        </View>
    );

    const renderTableRow = (item: any, index: number) => (
        <View key={index} style={styles.tableRow}>
            <View style={styles.dateColumn}>
                <Text style={styles.dateText}>{item.date}</Text>
            </View>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <View key={day} style={styles.dayColumn}>
                    <View style={styles.resultCell}>
                        <Text style={styles.topNumber}>
                            {item.results[day].top}
                        </Text>
                        {item.results[day].bottom && (
                            <Text style={[
                                styles.bottomNumber,
                                item.results[day].isRed && styles.redNumber
                            ]}>
                                {item.results[day].bottom}
                            </Text>
                        )}
                    </View>
                </View>
            ))}
        </View>
    );

    const scrollToTop = () => {
        // Implement scroll to top functionality
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#6366f1" />

            {/* Header */}
            <View style={styles.header}>
                {renderStatusBar()}
            </View>

            {/* Chart Table */}
            <ScrollView style={styles.chartContainer} showsVerticalScrollIndicator={false}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.table}>
                        {renderTableHeader()}
                        {chartData.map((item, index) => renderTableRow(item, index))}
                    </View>
                </ScrollView>

                {/* Navigation Buttons */}
                <View style={styles.navigationButtons}>
                    <TouchableOpacity style={styles.navButton}>
                        <Text style={styles.navButtonText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navButton} onPress={scrollToTop}>
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

                {/* Bottom padding */}
                <View style={styles.bottomPadding} />
            </ScrollView>

            {/* Scroll to Top Button */}
            <TouchableOpacity style={styles.scrollToTop} onPress={scrollToTop}>
                <Ionicons name="arrow-up" size={24} color="white" />
            </TouchableOpacity>
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
        flex: 0.71,
        backgroundColor: 'white',
        borderRadius: 1,
    },
    chartContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    table: {
        minWidth: screenWidth * 1.5, // Make table wider than screen
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f8f9fa',
        borderBottomWidth: 2,
        borderBottomColor: '#333',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        minHeight: 80,
    },
    dateColumn: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#333',
        paddingVertical: 8,
        backgroundColor: '#f8f9fa',
    },
    dayColumn: {
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#333',
        paddingVertical: 8,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    dateText: {
        fontSize: 12,
        color: '#333',
        textAlign: 'center',
        fontWeight: '500',
    },
    resultCell: {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 60,
    },
    topNumber: {
        fontSize: 14,
        color: '#333',
        fontWeight: '500',
        marginBottom: 2,
    },
    bottomNumber: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
    },
    redNumber: {
        color: '#ef4444',
    },
    navigationButtons: {
        flexDirection: 'row',
        gap: 16,
        margin: 20,
    },
    navButton: {
        flex: 1,
        paddingVertical: 15,
        borderWidth: 2,
        borderColor: '#333',
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    navButtonText: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    companyInfo: {
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    logoContainer: {
        marginBottom: 20,
    },
    logo: {
        backgroundColor: '#6366f1',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 12,
        transform: [{ rotate: '45deg' }],
        alignItems: 'center',
        position: 'relative',
    },
    logoText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    logoSubText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    companyText: {
        fontSize: 14,
        lineHeight: 22,
        textAlign: 'justify',
        color: '#666',
        marginBottom: 20,
    },
    ageRestriction: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    ageIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ef4444',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#ef4444',
    },
    ageIconText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    ageText: {
        flex: 1,
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    copyright: {
        fontSize: 12,
        color: '#999',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    scrollToTop: {
        position: 'absolute',
        right: 20,
        bottom: 30,
        width: 55,
        height: 55,
        borderRadius: 27.5,
        backgroundColor: '#6366f1',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    bottomPadding: {
        height: 100,
    },
});