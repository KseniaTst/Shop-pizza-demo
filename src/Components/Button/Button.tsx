import classNames from "classnames";
import {MouseEventHandler} from "react";

type PropsType = {
    outlined?: boolean
    children: any
    cart?: boolean
    add?: boolean
    onClick?:MouseEventHandler<HTMLButtonElement>
}

function Button(props: PropsType) {
    return (
        <button className={classNames('button', {
            'button--cart': props.cart,
            'button--outline': props.outlined,
            'button--add':props.add,
        })} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button