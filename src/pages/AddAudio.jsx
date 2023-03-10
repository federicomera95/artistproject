import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useForm from '../hooks/useForm';
import { setValidator } from '../validation/validator';

import { Cross } from '../assets/icons';

import Chip from '../components/atoms/Chip';
import Button from '../components/atoms/Button';
import Textarea from '../components/atoms/Textarea';
import InputText from '../components/atoms/InputText';
import InputFile from '../components/atoms/InputFile';

const initGenres = [
    { name: 'Pop', active: false },
    { name: 'Hip Hop', active: false },
    { name: 'Rap', active: false },
    { name: 'Rock', active: true },
    { name: 'Classico', active: false },
    { name: 'Instrumental', active: false },
    { name: 'Chill', active: false },
    { name: 'Jazz', active: false },
    { name: 'Tecno', active: false }
];

const initInstruments = [
    { name: 'Chitarra elettrica', active: true },
    { name: 'Tastiera', active: false },
    { name: 'Chitarra Classica', active: false },
    { name: 'Batteria', active: true },
    { name: 'Sassofono', active: false },
    { name: 'Violino', active: false }
];

const AddAudio = () => {
    const navigate = useNavigate();

    const stateSchema = {
        title: { value: '', error: '' },
        description: { value: '', error: '' },
        audio: { value: '', error: '' },
        thumbnail: { value: '', error: '' }
    };
    const rules = {
        title: setValidator(true),
        description: setValidator(true),
        audio: setValidator(true, 'audio'),
        thumbnail: setValidator(true, 'image')
    };

    const [genres, setGenre] = useState(initGenres);
    const [instruments, setInstrument] = useState(initInstruments);

    const handleSubmit = (values) => {
        console.log(
            JSON.stringify(
                {
                    ...values,
                    genres: [...genres.filter((genre) => genre.active === true)],
                    instruments: [...instruments.filter((instrument) => instrument.active === true)]
                },
                null,
                2
            )
        );
    };

    const { values, errors, dirty, touch, handleOnTouch, handleOnChange, handleOnSubmit, disable } =
        useForm(stateSchema, rules, handleSubmit);

    const { title, description, audio, thumbnail } = values;

    const INPUT_PROPS = {
        _title: {
            id: 'title',
            label: 'titolo',
            placeholder: 'Inserisci un titolo',
            error: errors.title && (dirty.title || touch.title) && errors.title,
            val: title,
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
        _audio: {
            id: 'audio',
            label: 'seleziona file',
            text: 'Massimo 10MB, .mp3',
            acceptRules: '.mp3,.mpeg',
            error: errors.audio && (dirty.audio || touch.audio) && errors.audio,
            val: audio,
            change: handleOnChange
        },
        _thumbnail: {
            id: 'thumbnail',
            label: 'seleziona immagine di copertina',
            text: 'Massimo 2MB, .jpg, .jpeg, .png',
            acceptRules: '.jpg, .jpeg, .png',
            error: errors.thumbnail && (dirty.thumbnail || touch.thumbnail) && errors.thumbnail,
            val: thumbnail,
            change: handleOnChange
        }
    };

    return (
        <div className='h-screen w-[100%] relative flex flex-col gap-11'>
            <div className='w-full fixed z-50 bg-white right-0 top-0 px-[20px] py-3 flex items-center justify-between'>
                <p className='text-dark-grey-base font-medium text-xl tracking-wide py-2'>
                    Aggiungi audio
                </p>
                <a className='w-7 h-7' onClick={() => navigate('/profile')}>
                    <Cross dark={true} />
                </a>
            </div>
            <div className='flex flex-col gap-8 pb-32 pt-12'>
                <div className='flex flex-col gap-6'>
                    <InputText inputProps={INPUT_PROPS._title} />
                    <Textarea textareaProps={INPUT_PROPS._description} />
                    <InputFile inputFileProps={INPUT_PROPS._audio} />
                    <InputFile inputFileProps={INPUT_PROPS._thumbnail} />
                    <div className='flex flex-col gap-2'>
                        <p className='text-dark-grey-base font-medium text-sm'>Genere</p>
                        <div className='flex flex-wrap gap-2'>
                            {genres.map(({ name, active }, i) => (
                                <Chip
                                    key={i}
                                    text={name}
                                    active={active}
                                    callback={() =>
                                        setGenre((prev) => {
                                            return [
                                                ...prev.slice(0, i),
                                                {
                                                    ...prev[i],
                                                    active: ![...prev][i].active
                                                },
                                                ...prev.slice(i + 1)
                                            ];
                                        })
                                    }
                                />
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-dark-grey-base font-medium text-sm'>Strumenti</p>
                        <div className='flex flex-wrap gap-[8px]'>
                            {instruments.map(({ name, active }, i) => (
                                <Chip
                                    key={i}
                                    text={name}
                                    active={active}
                                    callback={() =>
                                        setInstrument((prev) => {
                                            return [
                                                ...prev.slice(0, i),
                                                {
                                                    ...prev[i],
                                                    active: ![...prev][i].active
                                                },
                                                ...prev.slice(i + 1)
                                            ];
                                        })
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full fixed bottom-0 right-0 shadow-navbar py-[18px] px-5 bg-white z-10'>
                <Button
                    id='upload-photo'
                    style='primary'
                    text='Carica audio'
                    size='medium'
                    disabled={disable}
                    callback={handleOnSubmit}
                />
            </div>
        </div>
    );
};

export default AddAudio;
