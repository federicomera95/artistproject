import { useNavigate } from 'react-router-dom';

import useForm from '../hooks/useForm';
import { setValidator } from '../validation/validator';

import { Cross } from '../assets/icons';

import Button from '../components/atoms/Button';
import ButtonFile from '../components/atoms/ButtonFile';
import CitySelect from '../components/atoms/CitySelect';
import InputText from '../components/atoms/InputText';
import Textarea from '../components/atoms/Textarea';

const EditProfile = () => {
    const navigate = useNavigate();

    const stateSchema = {
        artist_name: { value: '', error: '' },
        description: { value: '', error: '' },
        age: { value: '', error: '' },
        profile_photo: { value: '', error: '' }
    };
    const rules = {
        title: setValidator(true),
        description: setValidator(true),
        age: setValidator(true, 'number'),
        profile_photo: setValidator(true, 'image')
    };

    const handleSubmit = (values) => {
        console.log(JSON.stringify({ ...values }, null, 2));
    };

    const { values, errors, dirty, touch, handleOnTouch, handleOnChange, handleOnSubmit, disable } =
        useForm(stateSchema, rules, handleSubmit);

    const { artist_name, description, age, profile_photo } = values;

    const INPUT_PROPS = {
        _artist_name: {
            id: 'artist_name',
            label: "Nome d'arte",
            placeholder: "Inserisci il tuo nome d'arte",
            error:
                errors.artist_name &&
                (dirty.artist_name || touch.artist_name) &&
                errors.artist_name,
            val: artist_name,
            change: handleOnChange,
            blur: handleOnTouch
        },
        _description: {
            id: 'description',
            label: 'descrizione',
            placeholder: 'Inserisci una descrizione',
            error:
                errors.description &&
                (dirty.description || touch.description) &&
                errors.description,
            val: description,
            change: handleOnChange,
            blur: handleOnTouch
        },
        _age: {
            id: 'age',
            label: "Nome d'arte",
            placeholder: 'Inserisci la tua età',
            error: errors.age && (dirty.age || touch.age) && errors.age,
            val: age,
            change: handleOnChange,
            blur: handleOnTouch
        },
        _profile_photo: {
            id: 'profile_photo',
            label: 'seleziona immagine di copertina',
            text: 'Massimo 2MB, .jpg, .jpeg, .png',
            acceptRules: '.jpg, .jpeg, .png',
            error:
                errors.profile_photo &&
                (dirty.profile_photo || touch.profile_photo) &&
                errors.profile_photo,
            val: profile_photo,
            change: handleOnChange
        }
    };

    // const handleSaveProfile = () => {
    //     navigate('/profile');
    // };

    return (
        <div>
            <div className='flex flex-col gap-8 mb-28'>
                <div className='w-full z-10 fixed top-0 left-0 px-5 py-5 flex items-center justify-between bg-white'>
                    <h1 className='text-xl font-medium text-dark-grey-base'>Modifica profilo</h1>
                    <div onClick={() => navigate('/profile')}>
                        <Cross dark={true} />
                    </div>
                </div>
                <div className='flex flex-col gap-6 mt-16'>
                    <InputText inputProps={INPUT_PROPS._artist_name} />
                    <Textarea textareaProps={INPUT_PROPS._description} />
                    <ButtonFile buttonFileProps={INPUT_PROPS._profile_photo} />
                    <InputText inputProps={INPUT_PROPS._age} />
                    <CitySelect />
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
