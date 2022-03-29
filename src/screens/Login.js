import * as React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import MyButton from '../components/MyButton';

const screenSizeHeight = Dimensions.get('window').height;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/Images/Login.jpg'),
      title: 'Feel Home',
      subtitle: 'Work From Anywhere'
    };
  }

  render() {
    return (
      <ImageBackground style={styles.imageBackground} source={this.state.background} resizeMode="cover">
        <View style={styles.mainView}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{`${this.state.title}`}</Text>
            <Text style={styles.subtitleText}>{`${this.state.subtitle}`}</Text>
          </View>
          <View style={styles.TextInputView}>
            <TextInput style={styles.textInput} keyboardType="email-address" placeholder={'EMAIL'} />
            <TextInput style={styles.textInput} placeholder={'PASSWORD'} />
            <MyButton title="Login" screen="Home" navigation={this.props.navigation} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 3,
    padding: 16,
  },
  imageBackground: {
    height: screenSizeHeight,
    padding: 32,
  },
  titleView: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 40,
    color: '#7711AA',
    fontWeight: 'bold',
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 4,
  },
  subtitleText: {
    fontSize: 20,
    color: '#777777',
    fontWeight: 'bold',
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 4,
  },
  TextInputView: {
    flex: 2,
  },
  textInput: {
    borderColor: '#777777',
    borderWidth: 3,
    borderRadius: 16,
    marginVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.6)',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#7711AA',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
  }
});