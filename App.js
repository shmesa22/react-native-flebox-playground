import React from 'react';
import { StyleSheet, View } from 'react-native';
import Toggle from './Toggle';

export default class App extends React.Component {
  state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }

  render() {
    const { flexDirection, alignItems, justifyContent } = this.state;
    const layoutStyle = { flexDirection, alignItems, justifyContent };

    const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical';
    const SecondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal';

    return (
      <View style={styles.container}>
        <Toggle
          lable={'Primary axis (flexDirection)'}
          value={flexDirection}
          options={['column', 'row']}
          onChange={option => this.setState({ flexDirection: option })}
        />
        <Toggle
          lable={`${primaryAxis} distribution (justifyContent)`}
          value={justifyContent}
          options={[ 'flex-start', 'flex-end', 'center', 'space-around', 'space-between']}
          onChange={option => this.setState({ justifyContent: option })}
        />
        <Toggle
          lable={`${SecondaryAxis} alignment (alingItems)`}
          value={alignItems}
          options={['flex-start', 'flex-end', 'center', 'stretch']}
          onChange={option => this.setState({ alignItems: option })}
        />
        <View style={[styles.layout, layoutStyle]}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  box: {
    padding: 25,
    backgroundColor: 'steelblue',
    margin: 5,
  }
});
