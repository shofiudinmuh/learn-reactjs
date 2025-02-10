import './index.css';
// import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';
import Card from './components/Card';
import Button from './components/Button';
function App() {
    return (
        <div className={'bg-slate-100 antialiased text-slate-800 flex items-center justify-center min-h-screen'}>
            <div className='max-w-xl w-full'>
                <Card>
                    <Card.Title>Hello React</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptate labore voluptatum. Nobis porro
                        minima delectus id exercitationem eligendi explicabo sint ut officiis soluta consectetur, esse cumque
                        magni maxime dignissimos.
                    </Card.Body>

                    <Card.Footer>
                        <Button>Register</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}

export default App;
