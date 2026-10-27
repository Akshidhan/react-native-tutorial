import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const Signin = () => {
  return (
    <View>
      <Text>Signin</Text>
      <Link href="/(auth)/sign-in">Go to Signin</Link>
    </View>
  )
}

export default Signin