import { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export default function LoadingScreen() {
    const router = useRouter();

    return (
        <View style={[styles.container, { backgroundColor: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)' }]}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                <ActivityIndicator size="large" color="#007bff" />
                <Text style={styles.text}>Loading Matka...</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Animated.Image
                    source={{ uri: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1752442099/Kruti-AI-generated-image_e9hux8.png" }}
                    style={{
                        width: 100,
                        height: 100,
                        opacity: 0.8,
                        transform: [
                            {
                                scale: 1.1,
                            },
                        ],
                    }}
                    entering={FadeIn}
                    exiting={FadeOut}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { marginTop: 12, fontSize: 18, color: '#333' },
});
