import Header from './components/Header';
import Demo from './components/Body';
import React from 'react';

// import {Form, Button, Checkbox, DatePicker, Input, Select} from "antd"

function App() {
  const onFinish=(values)=>{
    console.log(values);
    }

  return (
    <>
      <Header />
      <Demo />
    </>
  );
}

export default App;
