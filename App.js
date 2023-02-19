import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput } from 'react-native';
import Btn from './Btn';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, text: '' }; // to have a unique card
  }

  increment() {
    this.setState((state) => ({
      // current state to new state
      counter: state.counter + 1,
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hello World!</Text>

        <Image source={require('./assets/acm.png')} style={styles.logo} />

        <TextInput
          placeholder="Enter text here"
          style={styles.input}
          value={this.state.text}
          onChangeText={(text) => this.setState({ text: text })}
        />

        <Text>You entered: {this.state.text}</Text>

        <Text>Counter: {this.state.counter}</Text>

        <Button title="Increment Counter" onPress={() => this.increment()} />

        <Btn name="Change color" />
        <Btn name="Card 2" />
        <Btn name="Card 3" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 24,
  },
  input: {
    borderWidth: 1,
    height: 30,
    margin: 20,
    paddingLeft: 5,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 250,
  },
});
