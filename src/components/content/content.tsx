import './content.css'
import React, {PropsWithChildren} from 'react';


const Content: React.FC = (props: PropsWithChildren<{}>) => (
    <>
        <div className="content">
            {props.children}
        </div>
    </>
);

export default Content;