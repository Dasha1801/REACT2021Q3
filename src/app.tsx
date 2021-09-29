import React, {useState} from 'react';
import {Form} from './form/form';
import {Card} from './card/card';
import './app.css';
import { formPropType } from './shared/formPropType';


export const App = ():JSX.Element =>{
  const [formValues,setFormValues] = useState<formPropType[]>([]);

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
