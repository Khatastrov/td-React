import React, { Fragment, useState } from 'react';
import { Form } from './Form';
import { List } from './List';

const App = () => {
  
  const [users, setUsers] = useState([
      { nom: "Pierre", id: "1" },
      { nom: "Paul", id: "2" },
      { nom: "Jacques", id: "3" },
    ]);

  const addUser = (user) => {
    setUsers([...users, user])
  };

  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

    return (
      <Fragment>
        <Form handleSubmit={addUser} />
        <List users={users} handleDelete={removeUser} />
      </Fragment>
    )
}

export default App;
