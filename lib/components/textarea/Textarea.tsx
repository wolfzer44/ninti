import React, { useContext, useRef, useEffect } from 'react';

import FormContext from '../FormContext';

const Textarea : React.FC <any> = (props) => {
    const inputRef = useRef<HTMLInputElement>();
    const { registerField } = useContext(FormContext)

    useEffect(() => {
        if(inputRef.current) {
            registerField(props.name, inputRef.current)
        }
    }, [props.name, registerField])

    return <textarea {...props}  ref={inputRef}></textarea>

}

export default Textarea