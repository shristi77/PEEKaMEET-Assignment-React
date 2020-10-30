import React, { useState } from 'react';
// import classes from './SignupSection.css';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import * as actions from '../../../../store/actions/index';
import {connect} from 'react-redux';

const SignupSection = (props) => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(email +"  "+ password);
        props.onAuth( email, password);
    }

    let errorMessage = null;

    if (props.error) {
        errorMessage = (
            <p>{props.error.message}</p>
        );
    }
    return (
        <div>
            {errorMessage}
                    <form onSubmit={submitHandler}>
                        <Input 
                            inputType="email" inputLabel="Email" 
                            inputValue={email}
                            changed={(event)=> setEmail(event.target.value)}>
                        </Input>
                        <Input 
                            inputType="password" inputLabel="Password" 
                            inputValue={password}
                            changed={(event)=> setPassword(event.target.value)}>
                        </Input>
                        {/* {email}-{password} */}
                        <Button>Sign In</Button>
                    </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.auth.error
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password) => dispatch( actions.auth( email, password))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(SignupSection);
