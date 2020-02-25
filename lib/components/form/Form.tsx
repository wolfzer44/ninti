import React, { useState, useCallback, Ref } from 'react';
import FormContext from '../FormContext';
import dot from 'dot-object';

interface PropsTypes {
    onSubmit: (inputs: any) => any;
    ref?: any;
}

interface InputsTypes {
    name: string;
    ref: HTMLInputElement;
    value?: string;
}

const Form : React.FC <PropsTypes> = (props) => {

    const [inputs, setInputs] = useState<InputsTypes[]>([])

    const  registerField = useCallback((name: string, ref: HTMLInputElement) => {
        setInputs(oldInputs => [...oldInputs, { name, ref}])
    }, []);

    const filterValues = (e: any, inputs: InputsTypes[]) => {
        e.preventDefault();
        let data: any = {}

        inputs.forEach(({ name, ref }) => {
            data[name] = ref.value || ''
        });
      
        dot.object(data);
    
        return props.onSubmit(data)
    }

    return (
        <form onSubmit={e => filterValues(e, inputs)} ref={props?.ref}>
           <FormContext.Provider value={{ registerField }}>
               {props.children}
           </FormContext.Provider>
        </form>
    )
}

export default Form;