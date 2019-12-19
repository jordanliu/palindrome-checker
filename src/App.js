import React, {useState} from 'react';
import {Button, Typography, Input, Row, Col, Card, message} from 'antd';
import Footer from './Components/Footer';
import './App.css';
import {Palindrome} from './Helpers/palindrome';

const {Title} = Typography;

function App() {
  const [input, setInput] = useState('');

  const handleChange = event => setInput(event.target.value);

  const handleClick = event => {
    let checkPalindrome = Palindrome(input.toString());
    //console.log(input.toString(), checkPalindrome);

    input.toString() === ''
      ? message.error('Enter a value')
      : checkPalindrome
      ? message.success('It is a palindrome!')
      : message.error('It is not a palindrome!');
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div className="App">
      <Title>Palindrome Checker</Title>
      <Row type="flex" justify="center">
        <Col>
          <Card style={{textAlign: 'center'}}>
            <form>
              <Input
                size="large"
                placeholder="Enter here"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
              />
              <Button type="primary" onClick={handleClick}>
                Check
              </Button>
            </form>
          </Card>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default App;
