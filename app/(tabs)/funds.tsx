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

type MenuItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconType: 'ionicons' | 'material';
  onPress: () => void;
};

const FundsScreen = () => {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      title: 'Add Fund',
      description: 'You can add fund to your wallet',
      icon: 'add-circle-outline',
      iconType: 'ionicons',
      onPress: () => console.log('Add Fund pressed'),
    },
    {
      id: 2,
      title: 'Add History',
      description: 'You can check your add fund history',
      icon: 'add-circle-outline',
      iconType: 'ionicons',
      onPress: () => console.log('Add History pressed'),
    },
    {
      id: 3,
      title: 'Withdraw Funds',
      description: 'You can add withdraw winnings',
      icon: 'local-atm',
      iconType: 'material',
      onPress: () => console.log('Withdraw Funds pressed'),
    },
    {
      id: 4,
      title: 'Withdraw History',
      description: 'You can check your withdraw history',
      icon: 'local-atm',
      iconType: 'material',
      onPress: () => console.log('Withdraw History pressed'),
    },
    {
      id: 5,
      title: 'Add Bank Details',
      description: 'Add your bank details for withdraw',
      icon: 'account-balance',
      iconType: 'material',
      onPress: () => console.log('Add Bank Details pressed'),
    },
  ];

  const renderIcon = (item: MenuItem) => {
    if (item.iconType === 'ionicons') {
      return <Ionicons name={item.icon as any} size={24} color="#333" />;
    } else {
      return <MaterialIcons name={item.icon as any} size={24} color="#333" />;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6366F1" />

      {/* Header */}
      <View style={styles.header}>
        <SafeAreaView>
          <Text style={styles.headerTitle}>Funds</Text>
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
                {renderIcon(item)}
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
    paddingBottom: 20,
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
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#E5E7EB',
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
});

export default FundsScreen;