import './index.css';
import PlaceContentCenter from './components/PlaceContentCenter';
import { useState } from 'react';
import Button from './components/Button';
import { IconBrandGithub } from '@tabler/icons-react';
import Card from './components/Card.jsx';
function App() {
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Sign up for account!</Card.Title>
                <Card.Body>
                    <div className='mb-6'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' id='name' />
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Button>
                        <IconBrandGithub />
                        Register
                    </Button>
                </Card.Footer>
            </Card>
        </PlaceContentCenter>
    );
}

export default App;
