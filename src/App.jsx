import './index.css';
// import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';
import Card from './components/Card';
import Button from './components/Button';
import PlaceContentCenter from './components/PlaceContentCenter';
import { useState } from 'react';
function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((prevState) => prevState + 1);
    }
    return (
        <PlaceContentCenter>
            <div className={'text-5xl'}>{count}</div>
            <div className='mt-5 flex items-center gap-2'>
                <Button onClick={handleClick}>Count + 1</Button>
                <Button
                    onClick={() => {
                        handleClick();
                        handleClick();
                        handleClick();
                    }}>
                    Count + 3
                </Button>
            </div>
        </PlaceContentCenter>
    );
}

export default App;
