import React from 'react'; // Import React

interface ButtonProps {
    label: string;
    secondary?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    secondary,
    onClick,
    disabled,
    fullWidth,
    large,
    outline,
}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`
                disabled:opacity-70 disabled:cursor-pointer rounded-full font-semibold hover:opacity-80 transition border-2
                ${fullWidth ? 'w-full' : 'w-fit'}
                ${secondary ? 'bg-white text-black border-black' : 'bg-sky-500 text-white border-sky-500'}
                ${large ? 'text-xl px-5 py-3' : 'text-md px-4 py-2'}
                ${outline ? 'bg-transparent border-white text-white' : ''}
            `}
        >
            {label}
        </button>
    );
}

Button.defaultProps = {
    secondary: false,
    disabled: false,
    fullWidth: false,
    large: false,
    outline: false,
};

export default Button;
