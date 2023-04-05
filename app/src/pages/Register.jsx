import { useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button';
import InputText from '../components/atoms/InputText';
import useForm from '../hooks/useForm';
import { setValidator } from '../validation/validator';
import { useState } from 'react';
import signin from '../services/signin';
import { save } from '../utility/storage';

const Register = () => {
    const [chooseRole, setChooseRole] = useState(true);
    const [role, setRole] = useState(true);

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
        signin({ ...values, type: role ? 'user' : 'artist' })
            .then(({ data }) => save('token', data))
            .then(() => navigate('/home'));
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

    const handleSelectRole = (e) => {
        if ((e.target.id === 'user' && role) || (e.target.id === 'artist' && !role)) return;
        setRole(!role);
    };

    return (
        <div className='w-full'>
            {(chooseRole && (
                <div className='flex flex-col gap-14 mt-10'>
                    <div className='flex justify-center'>
                        <img src='logo-artistall.svg' />
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center rounded-lg p-4 shadow-card'>
                                <input
                                    id='user'
                                    type='checkbox'
                                    checked={role}
                                    onChange={handleSelectRole}
                                    className={`peer absolute appearance-none focus:outline-none
                                    checked:before:content-[''] checked:before:inline-block checked:before:bg-white
                                    checked:before:w-[0.75em] checked:before:h-[0.75em] checked:before:rounded-full checked:before:relative checked:before:left-[6px]`}
                                />
                                <label
                                    htmlFor='user'
                                    className={`flex items-center gap-[0.5em]
                                    before:content-[''] before:w-[1.5em] before:h-[1.5em] before:border-[0.1em] before:rounded-[50%] before:border-dark-grey-disabled
                                    peer-checked:before:bg-primary-base peer-checked:before:border-none
                                    peer-hover:before:border-primary-hover peer-focus:before:shadow-focus peer-focus:before:shadow-primary-disabled peer-focus:before:border-primary-hover
                                    peer-disabled:text-dark-grey-disabled peer-checked:peer-disabled:before:bg-primary-disabled
                                    peer-hover:peer-disabled:before:border-dark-grey-disabled`}
                                >
                                    Utente
                                </label>
                            </div>
                            <div className='flex items-center rounded-lg p-4 shadow-card'>
                                <input
                                    id='artist'
                                    type='checkbox'
                                    checked={!role}
                                    onChange={handleSelectRole}
                                    className={`peer absolute appearance-none focus:outline-none
                                    checked:before:content-[''] checked:before:inline-block checked:before:bg-white
                                    checked:before:w-[0.75em] checked:before:h-[0.75em] checked:before:rounded-full checked:before:relative checked:before:left-[6px]`}
                                />
                                <label
                                    htmlFor='artist'
                                    className={`flex items-center gap-[0.5em]
                                    before:content-[''] before:w-[1.5em] before:h-[1.5em] before:border-[0.1em] before:rounded-[50%] before:border-dark-grey-disabled
                                    peer-checked:before:bg-primary-base peer-checked:before:border-none
                                    peer-hover:before:border-primary-hover peer-focus:before:shadow-focus peer-focus:before:shadow-primary-disabled peer-focus:before:border-primary-hover
                                    peer-disabled:text-dark-grey-disabled peer-checked:peer-disabled:before:bg-primary-disabled
                                    peer-hover:peer-disabled:before:border-dark-grey-disabled`}
                                >
                                    Artista
                                </label>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <Button
                                text='Continua'
                                style='primary'
                                size='medium'
                                callback={() => setChooseRole(false)}
                            />
                            <Button
                                text='Accedi'
                                style='tertiary'
                                size='medium'
                                callback={() => {
                                    navigate('/login');
                                }}
                            />
                        </div>
                    </div>
                </div>
            )) || (
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
                        <Button
                            text='Accedi'
                            size='medium'
                            style='tertiary'
                            callback={() => navigate('/login')}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Register;
