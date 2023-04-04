// we know we have 3 types of button
// default,
// inverted
// and google sign in

//now use string enterpolate in className part

import './button.styles.scss';

const BUTTON_TYPES_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button 
            className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`} 
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;