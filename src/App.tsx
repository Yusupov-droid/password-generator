import './App.css'

import React from 'react';
import Container from "./components/container/container";
import PasswordGenerator from "./components/password-generator/password-generator";
import Content from "./components/content/content";

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
