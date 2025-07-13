import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Animated,
  Dimensions,
  StatusBar
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import MarketCard from '@/components/BIDCard';
import { RelativePathString, router } from 'expo-router';

const { width } = Dimensions.get('window');
// Sample data for each tab
const tabData = {
  MAIN: [
    { marketName: 'Sridevi Morning', numbers: '120 - 110 - 210', openBidsTime: '09:40 AM', closeBidsTime: '10:50 AM' },
    { marketName: 'Kalyan Morning', numbers: '150 - 140 - 250', openBidsTime: '10:40 AM', closeBidsTime: '11:50 AM' },
  ],
  STARLINE: [
    { marketName: 'Milan Day', numbers: '320 - 310 - 410', openBidsTime: '01:40 PM', closeBidsTime: '02:50 PM' },
    { marketName: 'Rajdhani Night', numbers: '520 - 510 - 610', openBidsTime: '09:40 PM', closeBidsTime: '10:50 PM' },
  ],
  DESAWAR: [
    { marketName: 'Desawar Morning', numbers: '220 - 210 - 310', openBidsTime: '05:40 AM', closeBidsTime: '06:50 AM' },
    { marketName: 'Desawar Night', numbers: '420 - 410 - 510', openBidsTime: '08:40 PM', closeBidsTime: '09:50 PM' },
  ]
};
export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notificationCount] = useState(3);
  const [walletAmount] = useState('2.5K');
  const [userName] = useState('John Doe');
  const [userMobile] = useState('+91 9876543210');
  const [activeTab, setActiveTab] = useState<'MAIN' | 'STARLINE' | 'DESAWAR'>('MAIN'); // Track active tab
  const slideAnim = useState(new Animated.Value(-width))[0];

  // Scrolling text animation
  const scrollAnim = useState(new Animated.Value(width))[0];
  let scrollingRef: ScrollView | null = null;

  React.useEffect(() => {
    const animateScroll = () => {
      scrollAnim.setValue(width);
      Animated.timing(scrollAnim, {
        toValue: -width,
        duration: 8000,
        useNativeDriver: true,
      }).start(() => animateScroll());
    };
    animateScroll();
    return () => {
      scrollAnim.stopAnimation();
    };
  }, [scrollAnim]);

  const toggleDrawer = () => {
    if (drawerOpen) {
      Animated.timing(slideAnim, {
        toValue: -width,
        duration: 300,
        useNativeDriver: true
      }).start(() => setDrawerOpen(false));
    } else {
      setDrawerOpen(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start();
    }
  };

  const menuItems = [
    { icon: 'home', name: 'Home', component: 'Home', path: "/" },
    { icon: 'user', name: 'Profile', component: 'Profile', path: "/Myprofile/Index/" },
    { icon: 'clipboard', name: 'Notice Board', component: 'NoticeBoard', path: "/" },
    { icon: 'book', name: 'Passbook', component: 'Passbook', path: "/" },
    { icon: 'credit-card', name: 'Bank Details', component: 'BankDetails', path: "/" },
    { icon: 'info-circle', name: 'How to Play', component: 'HowToPlay', path: "/" },
    { icon: 'history', name: 'Bid History', component: 'BidHistory', path: "/" },
    { icon: 'gamepad', name: 'Game Rates', component: 'GameRates', path: "/" },
    { icon: 'phone', name: 'Contact Us', component: 'ContactUs', path: "/" },
    { icon: 'share-alt', name: 'Share with Friends', component: 'Share', path: "/" },
    { icon: 'settings', name: 'Settings', component: 'Settings', path: "/Settings/Index" },
    { icon: 'lock', name: 'Change Password', component: 'ChangePassword', path: "/" },
    { icon: 'power-off', name: 'Logout', component: 'Logout', path: "/" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#4338CA" barStyle="default" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleDrawer} style={styles.menuButton}>
          <Ionicons name="menu" size={28} color="black" />
        </TouchableOpacity>

        <View style={styles.centerSection}>
          <View style={styles.bombayButton}>
            <Text style={styles.bombayText}>MH</Text>
          </View>
          <Text style={styles.matkaText}>GAMES</Text>
        </View>

        <View style={styles.rightSection}>
          <TouchableOpacity onPress={() => router.push("/(tabs)/passbook")} style={styles.walletSection}>
            <MaterialIcons name="account-balance-wallet" size={20} color="black" />
            <Text style={styles.walletAmount}>{walletAmount}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Notifications/Index")} style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            {notificationCount > 0 && (
              <View style={styles.notificationBadge}>
                <Text style={styles.notificationText}>{notificationCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrolling Text */}
      <View style={styles.scrollingTextContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
          scrollEnabled={false}
          ref={ref => {
            // Save ref for animation
            scrollingRef = ref;
          }}
        >
          <Animated.Text
            style={[
              styles.scrollingText,
              { transform: [{ translateX: scrollAnim }] }
            ]}
          >
            WELCOME TO MH GAMES NO. 1 TRUSTED APP . PLAY
          </Animated.Text>
        </ScrollView>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity onPress={() => router.push("/Addpoint/Index")} style={styles.actionButton}>
          <View style={styles.actionIconContainer}>
            <MaterialIcons name="add-circle-outline" size={24} color="black" />
          </View>
          <Text style={styles.actionButtonText}>Add Cash</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/Withdraw/Index")} style={styles.actionButton}>
          <View style={styles.actionIconContainer}>
            <MaterialIcons name="arrow-downward" size={24} color="black" />
          </View>
          <Text style={styles.actionButtonText}>Withdraw</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionIconContainer}>
            <FontAwesome name="whatsapp" size={24} color="black" />
          </View>
          <Text style={styles.actionButtonText}>Whatsapp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionIconContainer}>
            <FontAwesome name="telegram" size={24} color="black" />
          </View>
          <Text style={styles.actionButtonText}>Telegram</Text>
        </TouchableOpacity>
      </View>
      {/* Navigation Tabs */}
      <View style={styles.navigationTabs}>
        <TouchableOpacity
          style={[styles.navTab, activeTab === 'MAIN' && styles.activeTab]}
          onPress={() => setActiveTab('MAIN')}
        >
          <Text style={[styles.navTabText, activeTab === 'MAIN' && styles.activeTabText]}>MAIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navTab, activeTab === 'STARLINE' && styles.activeTab]}
          onPress={() => setActiveTab('STARLINE')}
        >
          <Text style={[styles.navTabText, activeTab === 'STARLINE' && styles.activeTabText]}>STARLINE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navTab, activeTab === 'DESAWAR' && styles.activeTab]}
          onPress={() => setActiveTab('DESAWAR')}
        >
          <Text style={[styles.navTabText, activeTab === 'DESAWAR' && styles.activeTabText]}>DESAWAR</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content - Tab Panels */}
      <ScrollView style={styles.mainContent}>
        <Text style={styles.welcomeText}>Welcome to MH GAMES - {activeTab}</Text>

        {tabData[activeTab].map((market, idx) => (
          <MarketCard
            key={idx}
            marketName={market.marketName}
            numbers={market.numbers}
            openBidsTime={market.openBidsTime}
            closeBidsTime={market.closeBidsTime}
            marketStatus={idx % 2 === 0 ? "Market Close" : "Market Open"}
            onChartPress={() => router.push("/Chart/Index")}
            onPlayPress={() => router.push("/Games/Index")}
          />
        ))}
      </ScrollView>

      {/* Side Drawer */}
      {drawerOpen && (
        <TouchableOpacity
          style={styles.overlay}
          onPress={toggleDrawer}
          activeOpacity={1}
        />
      )}

      <Animated.View
        style={[
          styles.drawer,
          { transform: [{ translateX: slideAnim }] }
        ]}
      >
        <View style={styles.userContainer}>
          <View style={styles.userIcon}>
            <Ionicons name="person" size={50} color="#4338CA" />
          </View>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userMobile}>{userMobile}</Text>
        </View>

        <ScrollView style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => {
                router.push(item.path as RelativePathString);


                toggleDrawer();
              }}
            >
              {item.icon === 'clipboard' && <MaterialIcons name="assignment" size={24} color="#4338CA" />}
              {item.icon === 'book' && <MaterialIcons name={item.icon} size={24} color="#4338CA" />}
              {item.icon === 'credit-card' && <FontAwesome name={item.icon} size={24} color="#4338CA" />}
              {item.icon === 'info-circle' && <FontAwesome name={item.icon} size={24} color="#4338CA" />}
              {item.icon === 'history' && <MaterialIcons name={item.icon} size={24} color="#4338CA" />}
              {item.icon === 'gamepad' && <FontAwesome name={item.icon} size={24} color="#4338CA" />}
              {item.icon === 'share-alt' && <FontAwesome name={item.icon} size={24} color="#4338CA" />}
              {item.icon === 'power-off' && <FontAwesome name={item.icon} size={24} color="#4338CA" />}
              {item.icon === 'user' && <FontAwesome name={item.icon} size={24} color="#4338CA" />}
              {item.icon === 'home' && <Feather name={item.icon} size={24} color="#4338CA" />}
              {item.icon === 'phone' && <Feather name={item.icon} size={24} color="#4338CA" />}
              {item.icon === 'settings' && <Feather name={item.icon} size={24} color="#4338CA" />}
              {item.icon === 'lock' && <MaterialCommunityIcons name={item.icon} size={24} color="#4338CA" />}

              <Text style={styles.menuItemText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    elevation: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb', // modern light border
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
  },
  menuButton: {
    padding: 5,
  },
  centerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  bombayButton: {
    backgroundColor: '#4338CA',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#6366f1', // modern border
    shadowColor: '#4338CA',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  bombayText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  matkaText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb', // modern border
  },
  walletAmount: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  notificationButton: {
    padding: 4,
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff', // modern border
  },
  notificationText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  scrollingTextContainer: {
    backgroundColor: '#fff',
    paddingVertical: 8,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  scrollingText: {
    color: "red",
    fontSize: 20,
    fontWeight: '500',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  actionButton: {
    alignItems: 'center',
    flex: 1,
  },
  actionIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb', // modern border
  },
  actionButtonText: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
  navigationTabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  navTab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 25,
    marginHorizontal: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb', // modern border
  },
  activeTab: {
    backgroundColor: '#4338CA',
    borderColor: '#4338CA', // highlight active tab border
  },
  navTabText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#000',
  },
  activeTabText: {
    color: '#fff',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb', // modern border
  },
  welcomeText: {
    fontSize: 18,
    color: '#4338CA',
    fontWeight: 'bold',
    padding: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 100,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.75,
    height: '100%',
    backgroundColor: 'white',
    zIndex: 101,
    elevation: 5,
  },
  userContainer: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  userIcon: {
    backgroundColor: 'white',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  userMobile: {
    fontSize: 14,
    color: '#666',
  },
  menuContainer: {
    flex: 1,
    paddingTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
});