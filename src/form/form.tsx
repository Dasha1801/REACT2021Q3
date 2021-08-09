import React, { useEffect, useState } from 'react';
import './form.css';

export const Form = ({setFormValues}): JSX.Element => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('UK');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    setErrors({});
    if(!agree){
      setErrors((state) => ({...state, agree}))
    }
    if(firstName === ''){
      setErrors((state) => ({...state, firstName}))
    }
    if(lastName === ''){
      setErrors((state) => ({...state, lastName}))
    }
    if(birthDate === ''){
      setErrors((state) => ({...state, birthDate}))
    }
    if(country === ''){
      setErrors((state) => ({...state, country}))
    }
  }

  useEffect(() => {
    validate();
  }, [firstName, lastName, birthDate, country, agree])

  const handlerSubmit = (event:React.SyntheticEvent) => {
    event.preventDefault();
    if(Object.keys(errors).length === 0){
      setFormValues((state) => [...state, {firstName, lastName, birthDate, country, agree}]);
      reset();
    }
  }


  const reset = () => {
    setFirstName('');
    setLastName('');
    setBirthDate('');
    setAgree(false);
    setCountry('UK');
  }

  return (
    <form onSubmit = {handlerSubmit} className='formStyle'>
      <label htmlFor='firstName'>
        <p>Name: {errors?.firstName === '' && <span>* name should be fill</span>}</p>
        <input type='text'
        name='firstName'
        value={firstName}
        onChange={(event)=> setFirstName(event.target.value)}/>
      </label>
      <label htmlFor='lastName'>
        <p>Surname: {errors?.lastName === '' && <span>* surname should be fill</span>}</p>
        <input type='text'
        name='lastName'
        value={lastName}
        onChange={(event)=> setLastName(event.target.value)}/>
      </label>
      <label htmlFor='birthDate'>
      <p>Birth date: {errors?.birthDate === '' && <span>* birth date should be fill</span>}</p>
        <input type='date'
        name='birthDate'
        value={birthDate}
        onChange={(event)=> setBirthDate(event.target.value)}/>
      </label>
      <label htmlFor='country'>
      <p>Country: {errors?.country === '' && <span>* country should be fill</span>}</p>
        <select className='' name='country' value={country} onChange={(event)=> setCountry(event.target.value)}>
          <option>Russia</option>
          <option>Belarus</option>
          <option>UK</option>
          <option>USA</option>
        </select>
      </label >
      <label htmlFor='agree' className='checkBox'>
      <input type='checkbox' name='agree' checked={agree} onChange={() => setAgree(prev => !prev)}/>
        <p>Use of this website constitutes acceptance of the Terms of Use and Privacy Policy. {errors?.agree !== undefined && <span>* agree should be check</span>}</p>
      </label>
      <div>
        <input type='submit' value='Send' className='btn'/>
      </div>
    </form>
  );
}
