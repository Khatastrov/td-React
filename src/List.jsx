import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';

import React, {Fragment} from 'react';
import { UserItem } from './UserItem';


export const List = ({users, handleDelete}) => {

  return (
    <Fragment>
      <h1>Liste des utilisateurs :</h1>
      <ol>
        {users.map((user) =>
          <UserItem key={user.id} user={user} handleDelete={handleDelete}/>
        )}
      </ol>
    </Fragment>
  )
}
