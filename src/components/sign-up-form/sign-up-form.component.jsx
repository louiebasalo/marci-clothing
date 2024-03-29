import { useState, } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import {SingUpComponent} from './sign-up-form.styles';
import Button from '../button/button.component';

import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    const dispatch = useDispatch();

    const  resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("passwords do not match");
            return;
        }

        try{
            dispatch(signUpStart(email, password, displayName));
            resetFormFields();
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user. email is already in use');
            }
            console.log('user creation encounter an error.',error);
        }

    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value});
    };

    return (
        <SingUpComponent>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                {/* we can also do this, we pass this input as an object
                
                <FormInput
                    label='Display Name'
                    inputOptions={{
                        type: 'text',
                        required: true,
                        onChange: handleChange,
                        name: 'displayName',
                        value: displayName
                    }}
                    
                    and in form-input.component.jsx
                    instead of ...otherProps, we now use inputOptions along with label in the function initialization,
                    and use ...inputOptions in input element and inputOptions.value.length in our label element

                
                */}

                <FormInput label="Display Name" type ="text" required onChange={handleChange} name="displayName" value={displayName}/>

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <Button  type="submit">Sign up</Button>

            </form>
        </SingUpComponent>
    )

}

export default SignUpForm;