import React from 'react'
import { JsxElement } from 'typescript';
import './Button.css'

declare interface ButtonProps {
    content?: string
    onClick?: () => void
    appendIcon?: JSX.Element
}

const Button: React.FC <ButtonProps> = (props) => {
    return <button 
        className="AppButton"
        onClick = {props.onClick}
        >
        {props.children || 'Nameless button'}
        {props.appendIcon}
    </button>
}

export default Button;