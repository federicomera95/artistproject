import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../styles/toast.css';

import { CheckMark, DeleteMark } from '../../assets/icons';

const contextClass = {
    success: 'bg-success shadow-success',
    error: 'bg-error shadow-error'
};

const toastStyle = {
    bottom: '105px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
};

const Snackbar = () => {
    return (
        <ToastContainer
            icon={({ type }) => (type === 'success' ? <CheckMark /> : <DeleteMark />)}
            style={toastStyle}
            toastClassName={({ type }) => `${contextClass[type]} rounded-lg shadow-snack w-full`}
            bodyClassName={() =>
                'p-ms flex justify-center items-center gap-[13px] text-white font-medium text-sm'
            }
            hideProgressBar={true}
            closeButton={false}
            position='bottom-center'
        />
    );
};

export default Snackbar;
