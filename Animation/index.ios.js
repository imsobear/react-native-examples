/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} = React;

var _previousLeft = 0;

var Animation = React.createClass({

  _onPress: function () {

    var box = this.refs['box'];

    var _run = function () {

      box.setNativeProps({
        left: _previousLeft + 10
      });

      _previousLeft += 10;

      if (_previousLeft < 200) {
        requestAnimationFrame(_run);
      }

    };

    requestAnimationFrame(_run);

  },

  render: function() {
    return (
      <View style={styles.container}>
          <Text style={styles.button} onPress={this._onPress}>点我</Text>

        <View style={styles.box} ref='box'></View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF'
  },
  button: {
    marginTop: 20,
    width: 60,
    height: 25,
    lineHeight: 20,
    backgroundColor: '#4B8DF8',
    borderWidth: 1,
    borderColor: '#cccccc',
    textAlign: 'center',
    padding: 5,
    color: '#ffffff'
  },
  box: {
    position: 'relative',
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    backgroundColor: '#FF4400'
  }
});

AppRegistry.registerComponent('Animation', () => Animation);
