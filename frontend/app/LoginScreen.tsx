import { View, Text, KeyboardAvoidingView, Platform, ScrollView, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Aqui você pode colocar sua lógica de autenticação
    if (email === 'teste@email.com' && senha === '123456') {
      router.push('/Home');
    } else {
      alert('Email ou senha inválidos');
    }
  };
//
  return (
    <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />

      <Text style={styles.title}>Olimp<Text style={styles.ia}>IA</Text></Text>
      <Text style={styles.titleLogin}>Login</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Entrar" onPress={handleLogin} />

      <Text style={styles.link} onPress={() => router.push('/Cadastro')}>
        Não tem conta? Cadastre-se
      </Text>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#cceaff',
  },
  logo: {
    width: 200,
    height: 230,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  link: {
    marginTop: 16,
    color: "#ab8580",
    textAlign: 'center',
  },
  title: {
    fontFamily: "",
    fontSize: 60,
    textAlign: "center",
    marginBottom: 20
  },
  ia: {
    fontFamily: "",
    fontSize: 60,
    color: "#e4b93f",
    textAlign: "center",
    marginBottom: 20
  },
  titleLogin: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20
  }
});
