import { useNavigate } from 'react-router-dom';
import InputText from '../components/atoms/InputText';
import Button from '../components/atoms/Button';
import { Cross } from '../assets/icons';
import { setValidator } from '../validation/validator';
import useForm from '../hooks/useForm';

const Links = () => {
    const navigate = useNavigate();

    const stateSchema = {
        instagram: { value: '', error: '' },
        facebook: { value: '', error: '' },
        twitter: { value: '', error: '' },
        tiktok: { value: '', error: '' },
        youtube: { value: '', error: '' },
        applemusic: { value: '', error: '' },
        amazonmusic: { value: '', error: '' },
        contact_email: { value: '', error: '' },
        phone: { value: '', error: '' }
    };
    const rules = {
        instagram: setValidator(false, 'https'),
        facebook: setValidator(false, 'https'),
        twitter: setValidator(false, 'https'),
        tiktok: setValidator(false, 'https'),
        youtube: setValidator(false, 'https'),
        applemusic: setValidator(false, 'https'),
        amazonmusic: setValidator(false, 'https'),
        contact_email: setValidator(false, 'email'),
        phone: setValidator(false, 'phone')
    };

    const handleSubmit = (values) => {
        console.log(JSON.stringify({ ...values }, null, 2));
    };

    const { values, errors, dirty, touch, handleOnTouch, handleOnChange, handleOnSubmit, disable } =
        useForm(stateSchema, rules, handleSubmit);

    const {
        instagram,
        facebook,
        twitter,
        tiktok,
        youtube,
        applemusic,
        amazonmusic,
        contact_email,
        phone
    } = values;

    const FIELDS = [
        {
            id: 'instagram',
            label: 'Instagram',
            placeholder: 'Inserisci il link al profilo Instagram',
            error: errors.instagram && (dirty.instagram || touch.instagram) && errors.instagram,
            val: instagram,
            change: handleOnChange,
            blur: handleOnTouch
        },
        {
            id: 'facebook',
            label: 'Facebook',
            placeholder: 'Inserisci il link al profilo Facebook',
            error: errors.facebook && (dirty.facebook || touch.facebook) && errors.facebook,
            val: facebook,
            change: handleOnChange,
            blur: handleOnTouch
        },
        {
            id: 'twitter',
            label: 'Twitter',
            placeholder: 'Inserisci il link al profilo Twitter',
            error: errors.twitter && (dirty.twitter || touch.twitter) && errors.twitter,
            val: twitter,
            change: handleOnChange,
            blur: handleOnTouch
        },
        {
            id: 'tiktok',
            label: 'Tik Tok',
            placeholder: 'Inserisci il link al profilo Tik Tok',
            error: errors.tiktok && (dirty.tiktok || touch.tiktok) && errors.tiktok,
            val: tiktok,
            change: handleOnChange,
            blur: handleOnTouch
        },
        {
            id: 'youtube',
            label: 'YouTube',
            placeholder: 'Inserisci il link al profilo YouTube',
            error: errors.youtube && (dirty.youtube || touch.youtube) && errors.youtube,
            val: youtube,
            change: handleOnChange,
            blur: handleOnTouch
        },
        {
            id: 'applemusic',
            label: 'Apple Music',
            placeholder: 'Inserisci il link al profilo Apple Music',
            error: errors.applemusic && (dirty.applemusic || touch.applemusic) && errors.applemusic,
            val: applemusic,
            change: handleOnChange,
            blur: handleOnTouch
        },
        {
            id: 'amazonmusic',
            label: 'Amazon Music',
            placeholder: 'Inserisci il link al profilo Amazon Music',
            error:
                errors.amazonmusic &&
                (dirty.amazonmusic || touch.amazonmusic) &&
                errors.amazonmusic,
            val: amazonmusic,
            change: handleOnChange,
            blur: handleOnTouch
        },
        {
            id: 'contact_email',
            label: 'Email',
            placeholder: "Inserisci un'email",
            error:
                errors.contact_email &&
                (dirty.contact_email || touch.contact_email) &&
                errors.contact_email,
            val: contact_email,
            change: handleOnChange,
            blur: handleOnTouch
        },
        {
            id: 'phone',
            label: 'Telefono',
            placeholder: 'Inserisci un numero di telefono',
            error: errors.phone && (dirty.phone || touch.phone) && errors.phone,
            val: phone,
            change: handleOnChange,
            blur: handleOnTouch
        }
    ];

    return (
        <div>
            <div className='w-full fixed top-0 left-0 z-10 px-5 py-5 flex items-center justify-between bg-white'>
                <h1 className='text-xl font-medium text-dark-grey-base'>Aggiungi i tuoi link</h1>
                <div onClick={() => navigate('/profile')}>
                    <Cross dark />
                </div>
            </div>

            <div className='pt-16 pb-[100px]'>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-4'>
                        {FIELDS.map((field, i) => (
                            <InputText key={i} inputProps={field} />
                        ))}
                    </div>
                    <div className='w-full fixed bottom-0 left-0 z-10 px-5 py-[18px] shadow-navbar bg-white'>
                        <Button
                            id='links-sub'
                            text='Salva'
                            disabled={disable}
                            callback={handleOnSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Links;
