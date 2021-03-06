import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import AppIntro from 'react-native-app-intro';
import Home from './Home'


const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default class Welcome extends Component {
  constructor(props) {
   super(props);
   this.state = {
     progress: new Animated.Value(0),
   };
 }


 onSkipBtnHandle = (index) => {
   this.props.navigator.resetTo({
     component: Home
   })
  }
  doneBtnHandle = () => {
    this.props.navigator.resetTo({
      component: Home
    })
  }
  render() {
    return (
      <AppIntro
          onDoneBtnClick={this.doneBtnHandle}
           onSkipBtnClick={this.onSkipBtnHandle}
        >
         <View style={[styles.slide,{ backgroundColor: '#5e6977' }]}>
             <View level={15}><Text style={styles.text}>this is intro Page 1</Text></View>
         </View>
         <View style={[styles.slide, { backgroundColor: '#3C3C3C' }]}>
           <View level={5}><Text style={styles.text}>this is intro Page 2</Text></View>
         </View>
       </AppIntro>
    );
  }
}
