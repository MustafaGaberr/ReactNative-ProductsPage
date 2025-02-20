import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const Login = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log('Login data:', data);
        if (data.email && data.password) {
            navigation.replace('Product');
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <Image style={styles.img} source={require('../assets/man.png')} />
                    <Text style={styles.title}>Log In Now</Text>
                    <Text style={styles.subtitle}>Please login to continue using our app</Text>
                </View>

                <View style={styles.formSection}>
                    <Controller
                        control={control}
                        name="email"
                        rules={{
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={[styles.input, errors.email && styles.inputError]}
                                placeholder="Email"
                                value={value}
                                onChangeText={onChange}
                                keyboardType="email-address"
                            />
                        )}
                    />
                    {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

                    <Controller
                        control={control}
                        name="password"
                        rules={{
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters'
                            }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={[styles.input, errors.password && styles.inputError]}
                                    placeholder="Password"
                                    value={value}
                                    onChangeText={onChange}
                                    secureTextEntry={!showPassword}
                                />
                                <TouchableOpacity
                                    style={styles.eyeIcon}
                                    onPress={() => setShowPassword(!showPassword)}
                                >
                                    <Ionicons
                                        name={showPassword ? 'eye-off' : 'eye'}
                                        size={24}
                                        color="#666"
                                    />
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                    {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

                    <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.signupContainer}>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.signupLink}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.socialContainer}>
                        <FontAwesome6 name="facebook" size={24} color="black" />
                        <FontAwesome6 name="google-plus" size={24} color="black" />
                        <FontAwesome6 name="x-twitter" size={24} color="black" />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    topSection: {
        alignItems: 'center',
        marginTop: 50
    },
    img: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
    formSection: {
        marginTop: 30
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        borderRadius: 25,
        marginBottom: 15
    },
    inputError: {
        borderColor: 'red'
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        marginLeft: 10
    },
    button: {
        backgroundColor: '#B22222',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    signupLink: {
        color: '#B22222',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        gap: 20
    },
    inputContainer: {
        marginBottom: 20,
        position: 'relative',
    },
    eyeIcon: {
        position: 'absolute',
        right: 15,
        top: 15,
    },
});

export default Login;