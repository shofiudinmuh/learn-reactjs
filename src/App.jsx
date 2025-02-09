import clsx from 'clsx';
import './index.css';
import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';
export default function App() {
    return (
        <div className={'bg-slate-900 grid place-content-center min-h-screen'}>
            <div className='flex gap-x-2'>
                <Button onClick={() => console.log('Register')} type='submit'>
                    <IconBrandFacebook />
                    Register
                </Button>
                <Button
                    className={'bg-pink-600'}
                    onClick={() => console.log('Login')}
                    type='submit'
                >
                    <IconBrandTwitter />
                    Login
                </Button>
            </div>
        </div>
    );
}

function Button(props) {
    const { className = 'bg-blue-600', children, text } = props;
    return (
        <button
            {...props}
            className={clsx(
                className,
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center text-white px-4 py-2 rounded',
            )}
        >
            {/* If text is exist, render the text, and if not exist, render the children */}
            {text || children}
        </button>
    );
}
