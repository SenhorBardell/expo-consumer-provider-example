import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const {Provider, Consumer} = React.createContext()

const Firebase = {
  get: () => console.log('get')
}

const Login = () => <Consumer>
  {api => {
    console.log(api)

    return <View style={styles.container}><Text>Hello World</Text></View>
  }}
</Consumer>

const App = () =>
  <Provider value={Firebase}>
    <Login />
  </Provider>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
