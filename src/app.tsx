import React, {useState} from 'react';
import {Form} from './form/form';
import {Card} from './card/card';
import './app.css';



export const App= ():JSX.Element =>{
  const [formValues,setFormValues] = useState([]);

  return(
    <div className='app'>
    <Form setFormValues={setFormValues}/>
      <main>
        {formValues.map((item, idx) => {
        return <Card item={item} key={idx}/>
      })}
      </main>
    </div>
  );
}
