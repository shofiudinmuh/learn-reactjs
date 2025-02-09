import './index.css';
import { IconBrandTwitter } from '@tabler/icons-react';
export default function App() {
    return (
        <div className={'bg-slate-900 grid place-content-center min-h-screen'}>
            <div className='flex gap-x-2'>
                <Button text='Register' />
                <Button
                    text={
                        <>
                            <IconBrandTwitter />
                        </>
                    }
                />
            </div>
        </div>
    );
}

function Button(props) {
    return (
        <button className={'bg-blue-600 text-white px-4 py-2 rounded'}>
            {props.text}
        </button>
    );
}
