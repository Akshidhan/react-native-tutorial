import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const Signup
 = () => {
  return (
    <View>
      <Text>Signup</Text>
      <Link href="/(auth)/sign-up">Go to Signup</Link>
    </View>
  )
}

export default Signup
