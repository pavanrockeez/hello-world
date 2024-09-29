import React, { useState } from 'react'

const Child = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submit =(event)=>{
    event.preventDefault();
    console.log(name, email,"email")
  }
  return (
    <div>
      <form onSubmit={submit}>
        <label>Name</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        <label>Email</label>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button>Sumbit</button>
      </form>
      <button onClick={() => props.fromChild('Pavan')}>Click Me</button>
    </div>
  )
}

export default Child
