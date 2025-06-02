import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo ao OlympIA!</Text>

        <View style={styles.mainGrid}>
          <View><Image style={styles.iconesHome} source={require('../assets/images/perfil.png')}/></View>
          <View><Image style={styles.iconesHome} source={require('../assets/images/conquistas.png')}/></View>
          <View><Image style={styles.iconesHome} source={require('../assets/images/configuracoes.png')}/></View>
          <View><Image style={styles.iconesHome} source={require('../assets/images/calendario.png')}/></View>
          <View><Image style={styles.iconesHome} source={require('../assets/images/chat.png')}/></View>
          <View><Image style={styles.iconesHome} source={require('../assets/images/quiz.png')}/></View>
        </View>

      <Button title="Sair" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: '#cceaff',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 200,
    height: 230,
    alignSelf: 'center',
    marginBottom: 20,
  },
  mainGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  iconesHome: {
    width: 120, // Aproximadamente 2 itens por linha com margem
    margin: 8,
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
