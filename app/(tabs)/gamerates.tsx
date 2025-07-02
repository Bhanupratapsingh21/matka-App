import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

const GameRatesScreen = () => {
  const gameRates = [
    {
      id: 1,
      name: 'Single Digit',
      rate: '10-100',
    },
    {
      id: 2,
      name: 'Jodi Digit',
      rate: '10-1000',
    },
    {
      id: 3,
      name: 'Single Paana',
      rate: '10-1600',
    },
    {
      id: 4,
      name: 'Double Paana',
      rate: '10-3200',
    },
    {
      id: 5,
      name: 'Triple Paana',
      rate: '10-7000',
    },
    {
      id: 6,
      name: 'Half Sangam',
      rate: '10-10000',
    },
    {
      id: 7,
      name: 'Full Sangam',
      rate: '10-100000',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6366F1" />

      {/* Header */}
      <View style={styles.header}>
        <SafeAreaView>
          <Text style={styles.headerTitle}>Game Rates</Text>
        </SafeAreaView>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>
            Game <Text style={styles.ratesText}>Rates</Text>
          </Text>
          <Text style={styles.subtitle}>We have Best Game Rates for you</Text>
        </View>

        {/* Game Rates List */}
        <View style={styles.ratesList}>
          {gameRates.map((game, index) => (
            <View key={game.id} style={styles.rateItem}>
              <View style={styles.leftBorder} />
              <View style={styles.rateContent}>
                <Text style={styles.gameName}>{game.name}</Text>
                <Text style={styles.gameRate}>{game.rate}</Text>
              </View>
              {index < gameRates.length - 1 && <View style={styles.separator} />}
            </View>
          ))}
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
    paddingTop: 40,
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
    paddingTop: 30,
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  ratesText: {
    color: '#6366F1',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  ratesList: {
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    overflow: 'hidden',
  },
  rateItem: {
    flexDirection: 'row',
    position: 'relative',
  },
  leftBorder: {
    width: 4,
    backgroundColor: '#6366F1',
  },
  rateContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  gameName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  gameRate: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6366F1',
  },
  separator: {
    position: 'absolute',
    bottom: 0,
    left: 24,
    right: 0,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
});

export default GameRatesScreen;