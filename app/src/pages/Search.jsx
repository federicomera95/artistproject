import CitySelect from '../components/atoms/CitySelect';
import TripleSelect from '../components/atoms/TripleSelect';
import InputText from '../components/atoms/InputText';
import RangeSlider from '../components/atoms/RangeSlider';
import Button from '../components/atoms/Button';
import ChipSelect from '../components/molecules/ChipSelect';
import { useState } from 'react';
import useForm from '../hooks/useForm';
import { Search as SearchIcon } from '../assets/icons';
import { setValidator } from '../validation/validator';
import searchContent from '../services/searchContent';
import { find } from '../utility/storage';
import ExtendedPhotoCard from '../components/molecules/ExtendedPhotoCard';
import ExtendedAudioCard from '../components/molecules/ExtendedAudioCard';
import ExtendedVideoCard from '../components/molecules/ExtendedVideoCard';

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

const Search = () => {
    const stateSchema = {
        search: { value: '', error: '' },
        type: { value: [true, false, false], error: '' },
        rangeAge: { value: [25, 45], error: '' },
        gender: { value: [true, false, false], error: '' },
        city: { value: 'seleziona una città', error: '' }
    };
    const rules = {
        search: setValidator(false),
        type: setValidator(false),
        rangeAge: setValidator(false),
        gender: setValidator(false),
        city: setValidator(false)
    };

    const [genres, setGenre] = useState(initGenres);
    const [instruments, setInstrument] = useState(initInstruments);

    const [found, setFound] = useState(null);

    const handleSubmit = (values) => {
        const data = {
            ...values,
            genres: [...genres.filter((genre) => genre.active === true)].map(
                (genre) => genre['name']
            ),
            instruments: [...instruments.filter((instrument) => instrument.active === true)].map(
                (instrument) => instrument['name']
            )
        };

        const token = find('token').token;

        searchContent(token, data).then(({ data }) => setFound(data));
    };

    const {
        values,
        errors,
        dirty,
        touch,
        handleOnTouch,
        handleOnClick,
        handleOnChange,
        handleRangeChange,
        handleOnSubmit
    } = useForm(stateSchema, rules, handleSubmit);

    const { search, type, rangeAge, gender, city } = values;

    const INPUT_PROPS = {
        _search: {
            id: 'search',
            label: 'Cerca',
            placeholder: 'Inserisci un nome, un genere, etc...',
            error: errors.search && (dirty.search || touch.search) && errors.search,
            val: search,
            change: handleOnChange,
            blur: handleOnTouch,
            icon: <SearchIcon />
        },
        _type: {
            id: 'type',
            label: 'Tipologia',
            val: type,
            callback: handleOnClick,
            choices: ['Foto', 'Video', 'Audio']
        },
        _rangeAge: {
            id: 'rangeAge',
            val: rangeAge,
            change: handleRangeChange
        },
        _gender: {
            id: 'gender',
            label: 'Sesso',
            val: gender,
            callback: handleOnClick,
            choices: ['Uomo', 'Donna', 'Altro']
        },
        _city: {
            id: 'city',
            val: city,
            change: handleOnChange
        }
    };

    return (
        <>
            {(found && (
                <div className='flex flex-col items-center gap-y-10 pb-20'>
                    {found.map((user, i) => {
                        return user.contents.map((content, _i) => {
                            switch (content.type) {
                                case 'photo':
                                    return (
                                        <ExtendedPhotoCard
                                            key={`${i}-${_i}`}
                                            avatar={user.avatar}
                                            image={content.file}
                                            title={content.title}
                                            username={user.username}
                                            description={content.description}
                                            tags={[
                                                ...(content.genres ? content.genres : []),
                                                ...(content.instruments ? content.instruments : [])
                                            ]}
                                        />
                                    );
                                case 'audio':
                                    return (
                                        <ExtendedAudioCard
                                            key={`${i}-${_i}`}
                                            username={user.username}
                                            title={content.title}
                                            thumbnail={content.thumbnail}
                                            description={content.description}
                                            audio={content.file}
                                            avatar={user.avatar}
                                            tags={[
                                                ...(content.genres ? content.genres : []),
                                                ...(content.instruments ? content.instruments : [])
                                            ]}
                                        />
                                    );
                                case 'video':
                                    return (
                                        <ExtendedVideoCard
                                            key={`${i}-${_i}`}
                                            username={user.username}
                                            thumbnail={content.thumbnail}
                                            title={content.title}
                                            description={content.description}
                                            avatar={user.avatar}
                                            video={content.file}
                                            tags={[
                                                ...(content.genres ? content.genres : []),
                                                ...(content.instruments ? content.instruments : [])
                                            ]}
                                        />
                                    );
                            }
                        });
                    })}
                </div>
            )) || (
                <div className='flex flex-col gap-6 mb-24'>
                    <InputText inputProps={INPUT_PROPS._search} />
                    <h3 className='font-medium text-dark-grey-placeholder'>Filtri</h3>
                    <div className='flex flex-col gap-8'>
                        <TripleSelect tripleSelectProps={INPUT_PROPS._type} />
                        <RangeSlider rangeSliderProps={INPUT_PROPS._rangeAge} />
                        <TripleSelect tripleSelectProps={INPUT_PROPS._gender} />
                        <CitySelect selectProps={INPUT_PROPS._city} />
                        <ChipSelect
                            type='Genere'
                            chips={genres}
                            callback={(i) => {
                                setGenre((prev) => {
                                    return [
                                        ...prev.slice(0, i),
                                        {
                                            ...prev[i],
                                            active: ![...prev][i].active
                                        },
                                        ...prev.slice(i + 1)
                                    ];
                                });
                            }}
                        />
                        <ChipSelect
                            type='Strumenti'
                            chips={instruments}
                            callback={(i) => {
                                setInstrument((prev) => {
                                    return [
                                        ...prev.slice(0, i),
                                        {
                                            ...prev[i],
                                            active: ![...prev][i].active
                                        },
                                        ...prev.slice(i + 1)
                                    ];
                                });
                            }}
                        />
                        <Button text='Cerca' callback={handleOnSubmit} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Search;
