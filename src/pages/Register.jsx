import { useNavigate } from 'react-router-dom';

import Button from '../components/atoms/Button';
import InputText from '../components/atoms/InputText';
import useForm from '../hooks/useForm';
import { setValidator } from '../validation/validator';

const Register = () => {
    const navigate = useNavigate();

    const stateSchema = {
        username: { value: '', error: '' },
        email: { value: '', error: '' },
        password: { value: '', error: '' }
    };
    const rules = {
        username: setValidator(true, 'username'),
        email: setValidator(true, 'email'),
        password: setValidator(true, 'password')
    };

    const handleSubmit = (values) => {
        console.log(JSON.stringify({ ...values }, null, 2));
    };

    const { values, errors, dirty, touch, handleOnTouch, handleOnChange, handleOnSubmit, disable } =
        useForm(stateSchema, rules, handleSubmit);

    const { username, email, password } = values;

    const INPUT_PROPS = {
        _username: {
            id: 'username',
            label: "Nome d'arte",
            placeholder: "Inserisci il tuo nome d'arte",
            error: errors.username && (dirty.username || touch.username) && errors.username,
            val: username,
            change: handleOnChange,
            blur: handleOnTouch
        },
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
            label: 'Crea password',
            type: 'password',
            placeholder: 'Inserisci la tua password',
            error: errors.password && (dirty.password || touch.password) && errors.password,
            val: password,
            change: handleOnChange,
            blur: handleOnTouch
        }
    };

    return (
        <div className='flex flex-col '>
            <div className='text-4xl text-center font-bold p-10'>
                Artist<span className='text-primary-base'>All</span>
            </div>
            <div className='flex flex-col gap-6 '>
                <div className='flex flex-col gap-4'>
                    <InputText inputProps={INPUT_PROPS._username} />
                    <InputText inputProps={INPUT_PROPS._email} />
                    <InputText inputProps={INPUT_PROPS._password} />
                </div>
                <Button
                    id='login-sub'
                    text='Crea il tuo account'
                    callback={handleOnSubmit}
                    disabled={disable}
                />
                {/* <Button text='Indietro' size='medium' style='secondary' /> */}
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
