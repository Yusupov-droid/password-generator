import './App.css'

import React from 'react';
import Container from "./components/container";
import PasswordGenerator from "./components/password-generator";
import Content from "./components/content";

const App: React.FC = () => (
    <div className='app'>
        <Container>
            <Content>
                <PasswordGenerator/>
            </Content>
        </Container>
    </div>
);

export default App;
