import React, {Fragment} from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export const UserItem = ({user, handleDelete}) => {
  return (
    <Fragment>
      <div className="p-inputgroup mb-2">
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <InputText value={user.nom} />
        <Button 
          icon="pi pi-times" 
          className="p-button-danger" 
          onClick={() => handleDelete(user.id)} />
      </div>
    </Fragment>
  )
}
