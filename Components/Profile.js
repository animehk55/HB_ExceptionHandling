import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  image: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  containerTop: {
    display: 'flex',
    alignContent: 'center',
    alignSelf: 'center',
  },
});

class Profile extends Component {
  render() {
    if (this.profile.profileImage === '' || this.profile.profileImage === undefined) {
      throw new Error('Image Not Found');
    }
    return (
      <>
        <View style={styles.image}>
          <Text> Profile</Text>
          <Image
            style={styles.image}
            source={{
              uri: `${profileImage}`,
            }}
          />
        </View>
      </>
    );
  }
}

export default Profile;
