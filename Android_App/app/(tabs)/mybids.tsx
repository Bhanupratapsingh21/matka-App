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

const MyBidsScreen = () => {
  const menuItems = [
    {
      id: 1,
      title: 'Bid History',
      description: 'You can view your market bid history',
      icon: 'gavel',
      onPress: () => console.log('Bid History pressed'),
    },
    {
      id: 2,
      title: 'Winning History',
      description: 'You can view your market winning history',
      icon: 'gavel',
      onPress: () => console.log('Winning History pressed'),
    },
    {
      id: 3,
      title: 'Starline Bid History',
      description: 'You can view your market starline bid history',
      icon: 'gavel',
      onPress: () => console.log('Starline Bid History pressed'),
    },
    {
      id: 4,
      title: 'Gali desawar Bid History',
      description: 'You can view your market gali desawar bid history',
      icon: 'gavel',
      onPress: () => console.log('Gali desawar Bid History pressed'),
    },
  ];

  const bottomNavItems: { icon: React.ComponentProps<typeof MaterialIcons>['name'], label: string, active: boolean }[] = [
    { icon: 'gavel', label: 'My Bids', active: true },
    { icon: 'book', label: 'Passbook', active: false },
    { icon: 'home', label: 'Home', active: false },
    { icon: 'account-balance-wallet', label: 'Funds', active: false },
    { icon: 'currency-rupee', label: 'Game Rates', active: false },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6366F1" />

      {/* Header */}
      <View style={styles.header}>
        <SafeAreaView>
          <Text style={styles.headerTitle}>My Bids</Text>
        </SafeAreaView>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuCard}
            onPress={item.onPress}
            activeOpacity={0.7}
          >
            <View style={styles.menuCardContent}>
              <View style={styles.iconContainer}>
                <MaterialIcons name={item.icon as any} size={24} color="#333" />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuDescription}>{item.description}</Text>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#999" />
            </View>
          </TouchableOpacity>
        ))}
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
    paddingTop : 40,
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
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  menuCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  menuDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  bottomNavItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
  bottomNavIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  activeBottomNavIcon: {
    backgroundColor: '#6366F1',
  },
  bottomNavLabel: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
  },
  activeBottomNavLabel: {
    color: '#6366F1',
    fontWeight: '600',
  },
});

export default MyBidsScreen;