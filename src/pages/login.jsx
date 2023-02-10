import { ButtonComponent } from "../components/atoms/button/button";
import InputTextComponent from "../components/atoms/input/inputText";

const objEmail = {
    id: 'email',
    label: 'email',
    placeholder: 'Inserisci la tua email',
};

const objPwd = {
    id: 'password',
    label: 'password',
    placeholder: 'Inserisci la tua password',
};

const iconPwd = {
    pos: 'right',
    src: '/icons/eye.svg'
};


const Login = () => {


    return (
    <div className='flex w-[100%] flex-col gap-[48px] py-[36px]'>
        <div className='font-bold text-4xl text-dark-grey-base text-center'>Artist<span className='text-primary-base'>All</span></div>
        <div>
            <form className='flex flex-col gap-[24px]'>
                <div className='flex flex-col gap-[16px]'>
                    <InputTextComponent objInputText={objEmail} required/>
                    <InputTextComponent objInputText={objPwd} required icon={iconPwd}/>
                </div>
                <p className='text-dark-grey-base text-base'><strong>Password dimenticata?</strong></p>
                <ButtonComponent id='login_sub' type='submit' text='Accedi' size='medium' style='primary'/>
                <ButtonComponent text='Registrati' size='medium' style='tertiary'/>
            </form>
        </div>
    </div>
    );
};

export default Login;