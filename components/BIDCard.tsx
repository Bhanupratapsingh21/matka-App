import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

interface MarketCardProps {
    marketName?: string;
    numbers?: string;
    openBidsTime?: string;
    closeBidsTime?: string;
    marketStatus?: string;
    onChartPress?: () => void;
    onPlayPress?: () => void;
}

const MarketCard: React.FC<MarketCardProps> = ({
    marketName = "Sridevi morning",
    numbers = "135 - 97 - 278",
    openBidsTime = "09 40 AM",
    closeBidsTime = "10 50 AM",
    marketStatus = "Market Close",
    onChartPress = () => console.log('Chart pressed'),
    onPlayPress = () => console.log('Play pressed'),
}) => {
    return (
        <View style={styles.card}>
            {/* Header Row */}
            <View style={styles.headerRow}>
                <Text style={styles.marketName}>{marketName}</Text>
                <Text style={styles.marketStatus}>{marketStatus}</Text>
            </View>

            {/* Numbers Row */}
            <Text style={styles.numbers}>{numbers}</Text>

            {/* Bottom Row */}
            <View style={styles.bottomRow}>
                {/* Bid Times */}
                <View style={styles.bidTimesContainer}>
                    <View style={styles.bidTimeItem}>
                        <Text style={styles.bidLabel}>Open Bids</Text>
                        <Text style={styles.bidTime}>{openBidsTime}</Text>
                    </View>
                    <View style={styles.bidTimeItem}>
                        <Text style={styles.bidLabel}>Close Bids</Text>
                        <Text style={styles.bidTime}>{closeBidsTime}</Text>
                    </View>
                </View>

                {/* Right Actions */}
                <View style={styles.actionsContainer}>
                    <TouchableOpacity
                        style={styles.chartButton}
                        onPress={onChartPress}
                        activeOpacity={0.7}
                    >
                        <MaterialIcons name="bar-chart" size={24} color="#6366F1" />
                        <Text style={styles.chartText}>Chart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.playButton}
                        onPress={onPlayPress}
                        activeOpacity={0.7}
                    >
                        <Ionicons name="play" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    marketName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        flex: 1,
    },
    marketStatus: {
        fontSize: 14,
        color: '#EF4444',
        fontWeight: '500',
    },
    numbers: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6366F1',
        marginBottom: 16,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    bidTimesContainer: {
        flexDirection: 'row',
        flex: 1,
    },
    bidTimeItem: {
        marginRight: 24,
    },
    bidLabel: {
        fontSize: 12,
        color: '#666',
        marginBottom: 2,
    },
    bidTime: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
    },
    actionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    chartButton: {
        alignItems: 'center',
        marginRight: 16,
    },
    chartText: {
        fontSize: 12,
        color: '#6366F1',
        marginTop: 2,
        fontWeight: '500',
    },
    playButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#6366F1',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MarketCard;