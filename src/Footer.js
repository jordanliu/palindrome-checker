import React from 'react';
import './App.css';
import  { Typography, Icon } from 'antd';
const {Text} = Typography;

function Footer(props) {
    return (
        <div className="footer">
        <Text> View code on GitHub </Text> <Icon type="github" style={{fontSize: 14}} />
        </div>
    );
}

export default Footer;