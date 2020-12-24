import React from 'react'
import { JsxElement } from 'typescript';
import './Button.css'

declare interface ButtonProps {
    content?: string
    onClic?: () => void
    appendIcon?: JSX.Element
}

const Button: React.FC <ButtonProps> = (props) => {
    return <button 
        className="AppButton"
        onClick = {props.onClic}
        >
        {props.children || 'Nameless button'}
        {props.appendIcon}
    </button>
}

export default Button;