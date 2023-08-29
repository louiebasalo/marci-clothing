import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import {ButtonsContainer, SignInContainer} from './sign-in-form.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import { googleSignInStart, emailSginInStart } from "../../store/user/user.action";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };


    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            dispatch(emailSginInStart(email, password));
            resetFormFields();
        }catch(error){
            switch(error.code){
                case 'auth/wrong-password' :
                    alert('incorrect password');
                    break;
                case 'auth/user-not-found' :
                    alert('user not found');
                    break;
                default:
                    console.log(error);
            };          
        }


    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value});
    };

    return (
        <SignInContainer>
            <h2>Alredy have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                <ButtonsContainer>
                    <Button  type="submit">Sign in</Button>
                    <Button  buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={signInWithGoogle}>Google sign in</Button>
                </ButtonsContainer>
                

            </form>
        </SignInContainer>
    )

}

export default SignInForm;