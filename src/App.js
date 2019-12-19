import React from 'react';
import Footer from './Footer';
import './App.css';
import {Button, Typography, Input, Row, Col, Card, message} from 'antd';
const {Title} = Typography;

function App() {
  const info = () => {
    message.info('This is a normal message');
  };

  return (
    <div className="App">
      <Title>Palindrome Checker</Title>
      <Row type="flex" justify="center">
        <Col>
        <Card style={{textAlign: 'center'}}>
          <form>
            <Input size="large" placeholder="Enter here" />
            <Button type="primary" onClick={info}>Check</Button>
          </form>
          </Card>
        </Col>
      </Row>
      <Footer />
    </div>


  );
}

export default App;
