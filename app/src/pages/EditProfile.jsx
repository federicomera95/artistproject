import { useNavigate } from 'react-router-dom';

import useForm from '../hooks/useForm';
import { setValidator } from '../validation/validator';

import { Cross } from '../assets/icons';

import Button from '../components/atoms/Button';
import ButtonFile from '../components/atoms/ButtonFile';
import CitySelect from '../components/atoms/CitySelect';
import InputText from '../components/atoms/InputText';
import Textarea from '../components/atoms/Textarea';
import GenderSelect from '../components/atoms/GenderSelect';
import { find } from '../utility/storage';
import decode from 'jwt-decode';
import { useEffect, useState } from 'react';
import getUser from '../services/getUser';
import { toast } from 'react-toastify';
import putProfile from '../services/putProfile';

const EditProfile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    const stateSchema = {
        username: { value: '', error: '' },
        bio: { value: '', error: '' },
        age: { value: '', error: '' },
        avatar: { value: '', error: '' },
        city: { value: 'seleziona una città', error: '' },
        gender: { value: 'selezione un genere', error: '' }
    };
    const rules = {
        username: setValidator(true),
        bio: setValidator(true),
        age: setValidator(true, 'number'),
        avatar: setValidator(false, 'image'),
        city: setValidator(false),
        gender: setValidator(false)
    };

    const handleSubmit = (values) => {
        toast.dismiss();
        const _token = find('token').token;
        const _decoded = decode(_token);

        putProfile(_token, values)
            .then(() => {
                toast('Profilo aggiornato!', {
                    autoClose: 2000,
                    type: 'success'
                });
                setTimeout(() => {
                    navigate(`/profile?user=${_decoded.username}`);
                });
            })
            .catch((error) => {
                console.log(error);
                toast('Verificare che i campi siano corretti!', { type: 'error', autoClose: 3000 });
            });
    };

    const {
        values,
        errors,
        dirty,
        touch,
        setValues,
        setErrors,
        handleOnTouch,
        handleOnChange,
        handleOnSubmit,
        disable
    } = useForm(stateSchema, rules, handleSubmit);

    const { username, bio, age, avatar, city, gender } = values;

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
        _bio: {
            id: 'bio',
            label: 'descrizione',
            placeholder: 'Inserisci una descrizione',
            error: errors.bio && (dirty.bio || touch.bio) && errors.bio,
            val: bio,
            change: handleOnChange,
            blur: handleOnTouch
        },
        _age: {
            id: 'age',
            label: 'Età',
            type: 'number',
            placeholder: 'Inserisci la tua età',
            error: errors.age && (dirty.age || touch.age) && errors.age,
            val: age,
            change: handleOnChange,
            blur: handleOnTouch
        },
        _avatar: {
            id: 'avatar',
            label: 'seleziona immagine di copertina',
            text: 'Massimo 2MB, .jpg, .jpeg, .png',
            acceptRules: '.jpg, .jpeg, .png',
            error: errors.avatar && (dirty.avatar || touch.avatar) && errors.avatar,
            val: avatar,
            change: handleOnChange
        },
        _city: {
            id: 'city',
            val: city,
            change: handleOnChange
        },
        _gender: {
            id: 'gender',
            val: gender,
            change: handleOnChange
        }
    };

    const token = find('token').token;
    const decoded = decode(token);

    useEffect(() => {
        if (!token) return navigate('/home');

        getUser(decoded.username, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(({ data }) => {
                setUserData(data);
            })
            .catch(() => navigate('/home'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (userData) {
            setValues({
                username: userData.username,
                bio: userData.info.bio,
                city: userData.info.city,
                age: userData.info.age,
                gender: userData.info.gender
            });
            setErrors({
                username: '',
                bio: '',
                city: '',
                age: '',
                gender: ''
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData]);

    return (
        <div>
            <div className='flex flex-col gap-8 mb-28'>
                <div className='w-full z-10 fixed top-0 left-0 px-5 py-5 flex items-center justify-between bg-white'>
                    <h1 className='text-xl font-medium text-dark-grey-base'>Modifica profilo</h1>
                    <div onClick={() => navigate(`/profile?user=${decoded.username}`)}>
                        <Cross dark={true} />
                    </div>
                </div>
                <div className='flex flex-col gap-6 mt-16'>
                    <InputText inputProps={INPUT_PROPS._username} />
                    <Textarea textareaProps={INPUT_PROPS._bio} />
                    <ButtonFile buttonFileProps={INPUT_PROPS._avatar} />
                    <InputText inputProps={INPUT_PROPS._age} />
                    <GenderSelect selectProps={INPUT_PROPS._gender} />
                    <CitySelect selectProps={INPUT_PROPS._city} />
                </div>
            </div>
            <div className='w-full fixed bottom-0 left-0 z-10 px-5 py-[18px] shadow-navbar bg-white'>
                <Button
                    id='save-profile'
                    text='Salva'
                    callback={handleOnSubmit}
                    disabled={disable}
                />
            </div>
        </div>
    );
};

export default EditProfile;
