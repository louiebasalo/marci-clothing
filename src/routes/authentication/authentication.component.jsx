// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

// import { 
//     // auth,
//     signInWithGooglePopup,
//     createUserDocumentFromAuth
//     // signInWithGoogleRedirect
// } from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';

const Authentication = () => {

    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //         console.log(response);
    // }, []);   //this code resulted to an error "TypeError: destroy is not a function"

    // this is just to try signInWithGoogleRedirect
    // useEffect(() => {
    //     return async () => {
    //         const response = await getRedirectResult(auth);
    //         console.log(response);

    //         if(response){
    //             // const userDocRef = await createUserDocumentFromAuth(user);
    //             await createUserDocumentFromAuth(response.user);// mine
    //         }

    //     }
    // }, []);


    // const logGoogleUser = async () => {
    //     const {user} =  await signInWithGooglePopup();
    //     // console.log(response);
    //     const userDocRef = await createUserDocumentFromAuth(user);

    // }
    // const logGoogleRedirectUser = async () => {
    //     const {user} =  await signInWithGoogleRedirect();
    //     console.log({user});
    // }
    return (
        <div className='authentication-container'>
            {/* <h1>Sign In Page</h1> */}
            {/* <button onClick={logGoogleUser}> */}
                {/* Sign in with Google Popup */}
            {/* </button> */}
            <SignInForm />
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
    )
}

export default Authentication;