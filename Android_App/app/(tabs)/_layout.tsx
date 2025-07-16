import { Tabs } from 'expo-router';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { ColorValue, View, StyleSheet } from 'react-native';

export default function Layout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#007bff',
        headerShown: false,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#fff', // White background for all tabs
          borderTopColor: '#000',
          height: 60,
        },
        tabBarIcon: ({ color, size }: { color: ColorValue; size: number }) => {
          if (route.name === 'index') {
            return (
              <View style={styles.homeIconContainer}>
                <Ionicons name="home" size={size + 4} color="#fff" />
              </View>
            );
          }

          switch (route.name) {
            case 'mybids':
              return <FontAwesome5 name="gavel" size={size} color={color} />;
            case 'passbook':
              return <MaterialIcons name="book" size={size} color={color} />;
            case 'funds':
              return <Ionicons name="wallet" size={size} color={color} />;
            case 'gamerates':
              return <MaterialIcons name="currency-rupee" size={size} color={color} />;
            default:
              return null;
          }
        },
      })}
    >
      <Tabs.Screen name="mybids" options={{ title: 'MyBids' }} />
      <Tabs.Screen name="passbook" options={{ title: 'Passbook' }} />
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen name="funds" options={{ title: 'Funds' }} />
      <Tabs.Screen name="gamerates" options={{ title: 'Game Rates' }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  homeIconContainer: {
    backgroundColor: '#007bff',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Adjust as needed
  },
});