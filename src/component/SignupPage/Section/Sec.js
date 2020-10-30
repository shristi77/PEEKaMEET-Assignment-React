import React, { Component } from 'react';
import classes from './Section.css';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';

import Image from './Image/Image';

class Sec extends Component {
    state= { 
        email: '',
        password: ''
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state.email +"  "+ this.state.password);
        this.props.onAuth( this.state.email, this.state.password);
    }
    render() {

    let errorMessage = null;

    if (this.props.error) {
        errorMessage = (
            <p>{this.props.error.message}</p>
        );
    }
        return (
            <div>
                <section className={classes.Section}>
                <div className={classes.section1}>
                    <Image />
                </div>
                <div className={classes.section2}>
                    {errorMessage}
                    <form onSubmit={this.submitHandler}>
                        <Input 
                            inputType="email" inputLabel="Email" 
                            inputValue={this.state.email}
                            changed={(event)=> this.setState({email: event.target.value})}>
                        </Input>
                        <Input 
                            inputType="password" inputLabel="Password" 
                            inputValue={this.state.password}
                            changed={(event)=> this.setState({password: event.target.value})}>
                        </Input>
                        {/* {email}-{password} */}
                        <Button>Sign In</Button>
                    </form>
                </div>
            </section>
            </div>
        )
    }
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

export default connect(mapStateToProps,mapDispatchToProps)(Sec);
