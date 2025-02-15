import './index.css';
// import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';
// import Card from './components/Card';
// import Button from './components/Button';
import PlaceContentCenter from './components/PlaceContentCenter';
import { useState } from 'react';
import Counter from './components/Counter';
function App() {
    return (
        <PlaceContentCenter>
            <Counter initialValue={10} />
        </PlaceContentCenter>
    );
}

export default App;
