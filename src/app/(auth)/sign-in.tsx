import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const Signin = () => {
  return (
    <View>
      <Text>Signin</Text>
      <Link href="/(auth)/sign-in">Go to Signup</Link>
    </View>
  )
}

export default Signin