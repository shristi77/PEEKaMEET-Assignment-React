import React from 'react';
import classes from './Input.css';

const Input = (props) => {
    const inputClasses = [classes.InputElement];

    return (
        <div className={classes.Input}>
        <label className={classes.Label}>{props.inputLabel}</label>
        <input className={inputClasses.join(' ')} type={props.inputType} value={props.inputValue} onChange={props.changed} />
    </div>  
    );
}

export default Input;
