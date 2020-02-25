<h1 align="center">
NINTI 🚀
</h1>
<h3 align="center">
Tiny lib to help work with forms on React
</h3>

## Installation

Just add ninti to your project:

```
yarn add ninti
```

### Basics

Ninti exposes two default form elements: `<Form />` and `<Input />`.

```js
import React from "react";
import { Form, Input } from "ninti";

function App() {
  function handleSubmit(data) {
    console.log(data);

    /**
     * {
     *   email: 'email@example.com',
     *   password: '123456'
     * }
     */
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="email" />
      <Input name="password" type="password" />

      <button type="submit">Sign in</button>
    </Form>
  );
}
```
