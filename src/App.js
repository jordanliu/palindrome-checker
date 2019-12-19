import React, {useState} from 'react';
import {Button, Typography, Input, Row, Col, Card, message} from 'antd';
import Footer from './Footer';
import './App.css';
import {Palindrome} from './Helpers/palindrome';

const {Title} = Typography;

function App() {


  const [input, setInput] = useState('');

  const handleChange = (e) => setInput(e.target.value);


  const handleClick = () => {
    let checkPalindrome = Palindrome(input.toString());
    console.log(input.toString(), checkPalindrome)
    checkPalindrome ? message.success("It is a palindrome!") : message.error("It is not a palindrome!");
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
              />
              {console.log(input)}
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
