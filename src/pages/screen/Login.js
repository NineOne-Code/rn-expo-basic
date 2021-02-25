import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator, ActivityIndicatorComponent } from 'react-native'

export default function Login(props) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState({
        loadingLogin: false,
        loadingSign: false
    })

    const AuthSign = async () => {
        try {
            setLoading({loadingSign: true})
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdkNCf0fvHIWpUezMqYqf0ROahYe3Il2w', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        })
        const resData = await response.json()
        console.log(resData)
        if (response.ok) {
            await props.navigation.navigate('Album')
        } else {
            Alert.alert('Login Error!!!', resData.error.message, [{
                text: 'Okay'
            }])
            setLoading({loadingSign: false})
        }
        } catch (error) {
            console.log(error)
        }
    }

    const AuthLogin = async () => {
        try {
            setLoading({loadingLogin: true})
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdkNCf0fvHIWpUezMqYqf0ROahYe3Il2w', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        })
        const resData = await response.json()
        console.log(resData)
        if (response.ok) {
            await props.navigation.navigate('Album')
        } else {
            Alert.alert('Login Error!!!', resData.error.message, [{
                text: 'Okay'
            }])
            setLoading({loadingLogin: false})
        }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.container}>
        <Text style={styles.logo}>MYFirstApp</Text>
            <View style={styles.wrapperInput}>
                <TextInput style={styles.input} placeholder='Masukan Email' onChangeText={text => setEmail(text)} />
                <TextInput style={styles.input} placeholder='Masukan Password' onChangeText={text => setPassword(text)} secureTextEntry />
            </View>
            <View style={styles.wrapperButton}>
                <TouchableOpacity onPress={() => console.log('Forget Password')}>
                    <Text style={styles.forget}>Forget Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={AuthLogin} style={styles.button}>
                    {loading.loadingLogin ? <ActivityIndicator size='small' color='white' /> : <Text style={styles.buttonText}>Login</Text>}
                </TouchableOpacity>
                <TouchableOpacity onPress={AuthSign}>
                    {loading.loadingSign ? <ActivityIndicator size='small' color='white' /> : <Text style={styles.buttonText}>Register</Text>}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 50,
        color: 'tomato',
        marginBottom: 40,
    },
    input: {
        width: 300,
        alignItems: 'center',
        backgroundColor: '#465881',
        borderRadius: 25,
        height: 55,
        marginBottom: 10,
        justifyContent: 'center',
        padding: 20,
        color: 'white',
    },
    wrapperButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 300,
        backgroundColor: 'tomato',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    forget: {
        color: 'white',
        textDecorationLine: 'underline',
    },
})
