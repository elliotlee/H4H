import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class Card extends React.Component {

  constructor(props) {
      super(props);
      this.state = {showColor: true}
  }

  changeColor() {
    this.setState(state => ({
      showColor: !state.showColor
    }))
  }

  render() {
    return <View style={styles.card}>
      <Button title={this.props.name} color={this.state.showColor ? "#840084" : "#101010"} onPress={() => this.changeColor()}></Button>
    </View>
  }  
}

const styles = StyleSheet.create({
  card: {
    fontSize: 30,
    margin: 20
  }
});
