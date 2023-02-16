import ButtonComponent from '../components/atoms/button/button';
import InputTextComponent from '../components/atoms/input/inputText';

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

const iconPwd = {
    pos: 'right',
    src: '/icons/eye.svg'
};

const Register = () => {
    return (
        <div className='flex flex-col '>
            <div className='text-4xl text-center font-bold p-10'>
                Artist<span className='text-primary-base'>All</span>
            </div>
            <div className='flex flex-col gap-[24px] '>
                <div className='flex flex-col gap-[16px]'>
                    <InputTextComponent objInputText={objArtName} />
                    <InputTextComponent objInputText={objEmail} required />
                    <InputTextComponent objInputText={objPassword} required icon={iconPwd} />
                </div>
                    <ButtonComponent
                        id='login-sub'
                        text='Crea il tuo account'
                        style='primary'
                        size='medium'
                        type='submit'
                    />
                    <ButtonComponent text='Indietro' size='medium' style='secondary' />
                    <ButtonComponent text='Accedi' size='medium' style='tertiary' />
            </div>
        </div>
    );
};

export default Register;
