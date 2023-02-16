import { CheckMark, DeleteMark } from './assets/snackbarIcons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contextClass = {
    success: 'bg-success shadow-success',
    error: 'bg-error shadow-error'
};



const Snackbar = ({type, text}) => {

    const showToastMessage = () => {
        toast.info(text,{autoClose: 5000});
    };

    return (
        <div>
         <button onClick={showToastMessage}>Notify</button>
            <ToastContainer 
                icon={() => type === 'success' ? <CheckMark /> : <DeleteMark />}
                style={{ bottom: '105px', padding: '24px' }}
                toastClassName={() => `${contextClass[type]} rounded-lg shadow-snack`}
                bodyClassName={() => 'p-ms flex justify-center items-center gap-[10px] text-white font-bold text-sm'}
                progressStyle={{ backgroundColor: 'transparent' }}
                closeButton={false}
                position='bottom-center'
                />
        </div>
    );
};

export default Snackbar;