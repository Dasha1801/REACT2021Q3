import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { formPropType } from '../shared/formPropType';
import './form.css';

interface Errors {
  firstName?: string;
  lastName?: string;
  country?: string;
  birthDate?: string;
  gender?: string;
  agree?: boolean;
}

interface IForm {
  setFormValues: Dispatch<SetStateAction<formPropType[]>>;
}

export const Form: React.FC<IForm>= ({setFormValues}): JSX.Element => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('UK');
  const [agree, setAgree] = useState(false);
  const [gender, setGender] = useState('Male');
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
  }

  useEffect(() => {
    validate();
  }, [firstName, lastName, birthDate, country, agree, gender])

  const handlerSubmit = (event:React.SyntheticEvent) => {
    event.preventDefault();
    if(Object.keys(errors).length === 0){
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
        <p className='labelName'>Use of this website constitutes acceptance of the Terms of Use and Privacy Policy. {errors?.agree !== undefined && <span className='warning'>* agree should be check</span>}</p>
      </label>

      <label htmlFor='gender' className='gender label'>
      <p className='labelName'>Male: <input type='radio' name='gender' checked onChange={() => setGender('Male')}/></p>
      <p className='labelName'>Female: <input type='radio' name='gender' onChange={() => setGender('Female')}/></p>
      </label>


      <div>
        <input type='submit' value='Send' className='btn'/>
      </div>
    </form>
  );
}
