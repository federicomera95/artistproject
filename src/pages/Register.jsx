import { useNavigate } from 'react-router-dom';

import Button from '../components/atoms/Button';
import InputText from '../components/atoms/InputText';

const objEmail = {
    id: `email`,
    label: `email`,
    type: `email`,
    placeholder: `Inserisci la tua e-mail`
};
const objArtName = {
    id: `artname`,
    label: `Nome d'arte`,
    placeholder: `Inserisci il tuo nome d'arte`
};

const objPassword = {
    id: `password`,
    label: `Crea Password`,
    type: `password`,
    placeholder: `Inserisci la tua password`
};

const Register = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col '>
            <div className='text-4xl text-center font-bold p-10'>
                Artist<span className='text-primary-base'>All</span>
            </div>
            <div className='flex flex-col gap-[24px] '>
                <div className='flex flex-col gap-[16px]'>
                    <InputText objInputText={objArtName} />
                    <InputText objInputText={objEmail} required />
                    <InputText objInputText={objPassword} required eye />
                </div>
                <Button
                    id='login-sub'
                    text='Crea il tuo account'
                    style='primary'
                    size='medium'
                    type='submit'
                />
                <Button text='Indietro' size='medium' style='secondary' />
                <Button
                    text='Accedi'
                    size='medium'
                    style='tertiary'
                    callback={() => navigate('/login')}
                />
            </div>
        </div>
    );
};

export default Register;
