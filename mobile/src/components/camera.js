import React, { Component } from "react";
import { View, Text } from "react-native";
import { Camera, Permissions, Constants } from "expo";

class Camera extends Component {
    state = {
        hasCameraPermissions = null,
        type: Camera.Constants.Type.back
    };

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      }
    render() {
       
        return (
            
        );
    }
}

export default Camera;