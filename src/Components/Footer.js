import React from 'react';
import '../App.css';
import {Typography, Icon} from 'antd';
const {Text} = Typography;

function Footer(props) {
  return (
    <div className="footer">
      <a
        href="https://github.com/jordanliu/palindrome-checker"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Text> View code on GitHub </Text>{' '}
        <Icon type="github" style={{fontSize: 14}} />
      </a>
    </div>
  );
}

export default Footer;
