import React, { Component } from 'react';

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from "../constants/Colors";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import {LinearGradient} from "expo-linear-gradient";


export default class RoundedButton extends Component {
  render() {
    return (
        <TouchableOpacity onPress={this.props.onPress.bind(this)}>
            <LinearGradient colors={[Colors.accentGradientStart, Colors.accentGradientEnd]}
                            start={[0, 0]}
                            end={[1, 1]}
                            style={styles.buttonContainer}>
                    {this.renderIcon()}
                    <Text style={this.getButtonStyles()}>{this.props.title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
  }

  getButtonStyles() {
      if(this.isIconPassed()) {
          return [
              styles.buttonTitle,
              {marginLeft: responsiveWidth(1)}
          ]
      }
      return [
          styles.buttonTitle
      ]
  }

  renderIcon() {
      if(this.isIconPassed()) {
          return this.props.icon
      }
      return null;
  }

  isIconPassed() {
      return ((typeof this.props.icon) !== 'undefined');
  }
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: responsiveHeight(0.6),
        paddingHorizontal: responsiveWidth(7),
        borderRadius: responsiveWidth(4)
    },
    buttonTitle: {
        fontFamily: 'fira-semibold',
        color: '#fff',
        fontSize: responsiveFontSize(2.25)
    }
});