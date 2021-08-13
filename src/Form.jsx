import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import uuid from "react-uuid";
import React, { Fragment } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";



export const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { nom: event.target.username.value, id: uuid() }
    props.handleSubmit(newUser);
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
          <h5>Ajouter un utilisateur :</h5>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="Username" name="username"/>
            <Button icon="pi pi-check" className="p-button-success" label="ajouter" type="submit"/>
          </div>
      </form>
    </ Fragment>
  )
}
