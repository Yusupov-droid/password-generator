import './checkbox.css'
import React from "react";


const Checkbox = (props: { label: string, checked: boolean, onChange: ((value: boolean) => void) }) => {
    return (
        <label className="checkbox">
            <input
                className="checkbox__input"
                type="checkbox"
                checked={props.checked}
                onChange={event => props.onChange(event.target.checked)}
            />
            <span className="checkbox__target" />
            {props.label}
        </label>
    );
}

export default React.memo(Checkbox);