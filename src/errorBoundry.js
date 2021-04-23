import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {hasError: true};
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <View
            style={{
              display: 'flex',
              alignContent: 'center',
              alignSelf: 'center',
            }}>
            <Text>Something went wrong</Text>
          </View>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
