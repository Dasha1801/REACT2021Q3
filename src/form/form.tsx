import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { formPropType } from '../shared/formPropType';
import './form.css';

interface Errors {
  firstName?: string;
  lastName?: string;
  country?: string;
  birthDate?: string;
  gender?: PossibleSex;
  agree?: boolean;
}

interface IForm {
  setFormValues: Dispatch<SetStateAction<formPropType[]>>;
}

export enum PossibleSex{
  male = 'male',
  female = 'female',
  empty = ''
}

export const Form: React.FC<IForm>= ({setFormValues}): JSX.Element => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('UK');
  const [agree, setAgree] = useState(false);
  const [gender, setGender] = useState(PossibleSex.empty);
  const [errors, setErrors] = useState({}as Errors);

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
    if(gender === PossibleSex.empty){
      setErrors((state) => ({...state, gender}))
    }
  }

  useEffect(() => {
    validate();
  }, [firstName, lastName, birthDate, country, agree, gender]);


  const handlerSubmit = (event:React.SyntheticEvent) => {
    event.preventDefault();
    if(Object.keys(errors).length === 0){
      alert(`${firstName}, thank you for visiting our site, all data has been successfully saved!`);
      setFormValues((state:formPropType[]) => [...state, {firstName, lastName, birthDate, country, agree, gender}]);
      reset();
    }
  }

  const reset = () => {
    setFirstName('');
    setLastName('');
    setBirthDate('');
    setAgree(false);
    setCountry('UK');
    setGender(PossibleSex.empty);
  }

  return (
    <form onSubmit = {handlerSubmit} className='formStyle'>
      <label htmlFor='firstName' className='label'>
        <p className='labelName'>Name: {errors?.firstName === '' && <span className='warning'>* name should be fill</span>}</p>
        <input type='text'
        name='firstName'
        value={firstName}
        onChange={(event)=> setFirstName(event.target.value)}/>
      </label>
      <label htmlFor='lastName' className='label'>
        <p className='labelName'>Surname: {errors?.lastName === '' && <span className='warning'>* surname should be fill</span>}</p>
        <input type='text'
        name='lastName'
        value={lastName}
        onChange={(event)=> setLastName(event.target.value)}/>
      </label>
      <label htmlFor='birthDate' className='label'>
      <p className='labelName'>Birth date: {errors?.birthDate === '' && <span className='warning'>* birth date should be fill</span>}</p>
        <input type='date'
        name='birthDate'
        value={birthDate}
        onChange={(event)=> setBirthDate(event.target.value)}/>
      </label>
      <label htmlFor='country' className='label'>
      <p className='labelName'>Country: {errors?.country === '' && <span className='warning'>* country should be fill</span>}</p>
        <select className='' name='country' value={country} onChange={(event)=> setCountry(event.target.value)}>
          <option>Russia</option>
          <option>Belarus</option>
          <option>UK</option>
          <option>USA</option>
        </select>
      </label >
      <label htmlFor='agree' className='checkBox label'>
      <input type='checkbox' name='agree' checked={agree} onChange={() => setAgree(prev => !prev)}/>
        <p className='labelCheckbox'>Use of this website constitutes acceptance of the Terms of Use and Privacy Policy. {errors?.agree !== undefined && <span className='warning'>* agree should be check</span>}</p>
      </label>
      <label htmlFor='gender' className='gender label'>
        <p>Specify gender: {errors?.gender === PossibleSex.empty && <span className='warning'>* choose one of the options</span>}</p>
        <div className='wrapper'>
          <p className='labelGender'>Male: <input type='radio'  name='gender' checked= {gender===PossibleSex.male} onChange={() => setGender(PossibleSex.male)}/></p>
          <p className='labelGender'>Female: <input type='radio' name='gender' checked= {gender===PossibleSex.female} onChange={() => setGender(PossibleSex.female)}/></p>
        </div>
      </label>
      <div>
        <input type='submit' value='Send' className='btn'/>
      </div>
    </form>
  );
}
