import './container.css'
import React, {PropsWithChildren} from 'react';


const Container: React.FC = (props: PropsWithChildren<{}>) => (
    <>
        <div className="container">
            {props.children}
        </div>
    </>
);

export default Container;