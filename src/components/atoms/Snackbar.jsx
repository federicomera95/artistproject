import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckMark = () => {
    return (
        <svg
            width='24'
            height='24'
            viewBox='0 0 25 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <circle
                cx='12.5001'
                cy='12.0003'
                r='9.00375'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M8.94263 12.3392L11.1105 14.5071L11.0965 14.4931L15.9876 9.60205'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const DeleteMark = () => {
    return (
        <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.414 20.414L3.586 16.586C3.211 16.211 3 15.702 3 15.172V8.828C3 8.298 3.211 7.789 3.586 7.414L7.414 3.586C7.789 3.211 8.298 3 8.828 3H15.171C15.701 3 16.21 3.211 16.585 3.586L20.413 7.414C20.789 7.789 21 8.298 21 8.828V15.171C21 15.701 20.789 16.21 20.414 16.585L16 21H8.828C8.298 21 7.789 20.789 7.414 20.414V20.414Z'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M9 15L15 9'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M15 15L9 9'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const contextClass = {
    success: 'bg-success shadow-success',
    error: 'bg-error shadow-error'
};

const Snackbar = ({ type, text }) => {
    const showToastMessage = () => {
        toast.info(text, { autoClose: 5000 });
    };

    return (
        <div>
            <button onClick={showToastMessage}>Notify</button>
            <ToastContainer
                icon={() => (type === 'success' ? <CheckMark /> : <DeleteMark />)}
                style={{ bottom: '105px', padding: '24px' }}
                toastClassName={() => `${contextClass[type]} rounded-lg shadow-snack`}
                bodyClassName={() =>
                    'p-ms flex justify-center items-center gap-[10px] text-white font-bold text-sm'
                }
                progressStyle={{ backgroundColor: 'transparent' }}
                closeButton={false}
                position='bottom-center'
            />
        </div>
    );
};

export default Snackbar;
