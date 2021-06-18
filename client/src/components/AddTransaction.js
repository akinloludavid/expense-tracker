import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Button, Form } from 'react-bootstrap';
 const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = async e => {
    e.preventDefault();
    const newTransaction = {
     
      text,
      amount: +amount
    }

    await addTransaction(newTransaction);
    setText('')
    setAmount('')
  }

  return (
    <>
      <h3 className = "my-4">Add new transaction</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          
          <Form.Control type="text" placeholder="Enter title" value={text} onChange={(e) => setText(e.target.value)} />
          
        </Form.Group>

        <Form.Group>
          
          <Form.Control type="number" placeholder="Amount" value= {amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."/>
        </Form.Group>
      
        <Button className="btn" type = "submit">Add transaction</Button>
      </Form>
    </>
  )
}
export default AddTransaction;