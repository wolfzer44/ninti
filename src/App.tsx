import React from 'react';
import { Form, Input } from 'ninti';

const App = () => {

  function handlerForm (inputs: any) {
    
    console.log(inputs);
  }

  return (
      <Form onSubmit={inputs => handlerForm(inputs)}>
        <Input name="name" placeholder="Name" defaultValue={'test'}/> <br/>
        <Input name="email" placeholder="email" /> <br/><br/>
        <button type="submit">Send</button>
      </Form>
  );
}

export default App;
