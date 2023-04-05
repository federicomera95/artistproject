import { useNavigate } from 'react-router-dom';

import Button from '../components/atoms/Button';
import InputText from '../components/atoms/InputText';
import { setValidator } from '../validation/validator';
import useForm from '../hooks/useForm';
import login from '../services/login';
import { save } from '../utility/storage';

const Login = () => {
    const navigate = useNavigate();

    const stateSchema = {
        email: { value: '', error: '' },
        password: { value: '', error: '' }
    };
    const rules = {
        email: setValidator(true, 'email'),
        password: setValidator(true, 'password')
    };

    const handleSubmit = (values) => {
        login({ ...values })
            .then(({ data: token }) => save('token', token))
            .then(() => navigate('/home'));
    };

    const { values, errors, dirty, touch, handleOnTouch, handleOnChange, handleOnSubmit, disable } =
        useForm(stateSchema, rules, handleSubmit);

    const { email, password } = values;

    const INPUT_PROPS = {
        _email: {
            id: 'email',
            label: 'Email',
            placeholder: 'Inserisci la tua email',
            error: errors.email && (dirty.email || touch.email) && errors.email,
            val: email,
            change: handleOnChange,
            blur: handleOnTouch
        },
        _password: {
            id: 'password',
            label: 'Password',
            type: 'password',
            placeholder: 'Inserisci la tua password',
            error: errors.password && (dirty.password || touch.password) && errors.password,
            val: password,
            change: handleOnChange,
            blur: handleOnTouch
        }
    };

    return (
        <div className='flex w-[100%] flex-col gap-[48px] py-[36px]'>
            <div className='flex justify-center'>
                <img src='logo-artistall.svg' alt='logo' />
            </div>
            <div>
                <form className='flex flex-col gap-[24px]'>
                    <div className='flex flex-col gap-[16px]'>
                        <InputText inputProps={INPUT_PROPS._email} />
                        <InputText inputProps={INPUT_PROPS._password} />
                    </div>
                    <p className='text-dark-grey-base text-base'>
                        <strong>Password dimenticata?</strong>
                    </p>
                    <Button
                        id='login_sub'
                        text='Accedi'
                        style='primary'
                        callback={handleOnSubmit}
                        disabled={disable}
                    />
                    <Button
                        text='Registrati'
                        size='medium'
                        style='tertiary'
                        callback={() => navigate('/signup')}
                    />
                </form>
            </div>
        </div>
    );
};

export default Login;
