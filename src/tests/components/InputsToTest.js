import React, {useState} from "react";
import Input from "../../components/Input";
import {maskBr, validateBr} from "js-brasil";

export const TestInput = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <Input
        value={value}
        label={'InputTest'}
        setValue={setValue}
      />
    </div>
  )
}

export const TestInputMask = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <Input
        value={value}
        label={'InputTest'}
        setValue={setValue}
        applyMask={value => maskBr.cpf(value)}
      />
    </div>
  )
}

export const TestInputValidation = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <Input
        value={value}
        label={'InputTest'}
        setValue={setValue}
        helperText={'invalid'}
        validator={value => validateBr.cpf(value)}
      />
    </div>
  )
}