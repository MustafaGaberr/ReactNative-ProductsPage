import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

function Welcome({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image style={styles.photo} source={require('../assets/man.png')} />
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.services}>Create an account and access our awesome services</Text>
            </View>

            <View style={styles.bottomSection}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.buttonText}>Getting Started</Text>
                </TouchableOpacity>

                <View style={styles.signinContainer}>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.signinLink}>Sign in</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.socialContainer}>
                    <FontAwesome6 name="facebook" size={24} color="black" />
                    <FontAwesome6 name="google-plus" size={24} color="black" />
                    <FontAwesome6 name="x-twitter" size={24} color="black" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    topSection: {
        alignItems: 'center',
        marginTop: 50,
    },
    photo: {
        width: 200,
        height: 200,
        marginBottom: 30,
    },
    welcome: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    services: {
        color: 'grey',
        textAlign: 'center',
    },
    bottomSection: {
        marginTop: 'auto',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#B22222',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signinContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    signinLink: {
        color: '#B22222',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        gap: 20,
    },
});

export default Welcome;



