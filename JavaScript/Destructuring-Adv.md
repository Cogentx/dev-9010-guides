# JavaScript Desctructuring

## Arrays

### Advanced Scenarios

#### Desctructuring with Ternary Operator

**Use Case**
Inside a React component that produces list items we have two dynamic values based on the ` amount ` prop passed in.  One will determine the class name we set and other displays a ` +/- ` sign in front of the number.

Instead of calculating them separately we can simply return an array inside each returned element of a Ternary Operator and then immediately destructure the returned array providing us instant access to the two variables we need inside the JSX return statement.

```javascript
import React from 'react'

export const Transaction = ({t}) => {

  const {text, amount} = t;
  const [sign, signClass] = (amount < 0 ? ['-', 'minus'] : ['+', 'plus']);

  return (
  <li className={signClass}>
    {text} <span>{`${sign} $${Math.abs(amount)}`}</span><button className="delete-btn">x</button>
  </li>
)}
```

![Dest1](./img/Dest1.png)
