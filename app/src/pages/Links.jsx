import { useNavigate } from 'react-router-dom';
import InputText from '../components/atoms/InputText';
import Button from '../components/atoms/Button';
import { Cross } from '../assets/icons';
import { setValidator } from '../validation/validator';
import useForm from '../hooks/useForm';
import { useEffect, useState } from 'react';
import decode from 'jwt-decode';
import getUser from '../services/getUser';
import putLinks from '../services/putLinks';
import { toast } from 'react-toastify';
import { find } from '../utility/storage';

const Links = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null);

    const stateSchema = {
        spotify: { value: '', error: '' },
        instagram: { value: '', error: '' },
        facebook: { value: '', error: '' },
        tiktok: { value: '', error: '' },
        youtube: { value: '', error: '' },
        applemusic: { value: '', error: '' },
        amazonmusic: { value: '', error: '' },
        email: { value: '', error: '' },
        phone: { value: '', error: '' }
    };
    const rules = {
        spotify: setValidator(false, 'https'),
        instagram: setValidator(false, 'https'),
        facebook: setValidator(false, 'https'),
        tiktok: setValidator(false, 'https'),
        youtube: setValidator(false, 'https'),
        applemusic: setValidator(false, 'https'),
        amazonmusic: setValidator(false, 'https'),
        email: setValidator(false, 'optionalEmail'),
        phone: setValidator(false, 'phone')
    };

    const handleSubmit = (values) => {
        toast.dismiss();
        const _token = find('token').token;
        const _decoded = decode(_token);

        putLinks(_token, values)
            .then(() => {
                toast('Informazioni aggiornate!', {
                    autoClose: 3000,
                    type: 'success'
                });
                setTimeout(() => {
                    navigate(`/profile?user=${_decoded.username}`);
                }, 3000);
            })
            .catch(() =>
                toast('Verificare che i campi siano corretti!', { type: 'error', autoClose: 3000 })
            );
    };

    const {
        values,
        errors,
        dirty,
        touch,
        setValues,
        handleOnTouch,
        handleOnChange,
        handleOnSubmit,
        disable
    } = useForm(stateSchema, rules, handleSubmit);

    const { spotify, instagram, facebook, tiktok, youtube, applemusic, amazonmusic, email, phone } =
        values;

    const FIELDS = [
        {
            id: 'spotify',
            label: 'Spotify',
            placeholder: 'Inserisci il link al profilo Spotify',
            error: errors.spotify && (dirty.spotify || touch.spotify) && errors.spotify,
            val: spotify,
            change: handleOnChange,
            blur: handleOnTouch
        },
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
            id: 'email',
            label: 'Email',
            placeholder: "Inserisci un'email",
            error: errors.email && (dirty.email || touch.email) && errors.email,
            val: email,
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

    const token = find('token').token;
    const decoded = decode(token);

    useEffect(() => {
        if (!token) return navigate('/home');

        getUser(decoded.username, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(({ data }) => {
                setUserInfo(data.info);
            })
            .catch(() => navigate('/home'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (userInfo?.links) {
            setValues({
                spotify: userInfo.links.spotify,
                instagram: userInfo.links.instagram,
                facebook: userInfo.links.facebook,
                youtube: userInfo.links.youtube,
                amazonmusic: userInfo.links.amazonmusic,
                applemusic: userInfo.links.applemusic,
                tiktok: userInfo.links.tiktok,
                email: userInfo.links.email,
                phone: userInfo.links.phone
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInfo]);

    return (
        <div>
            <div className='w-full fixed top-0 left-0 z-10 px-5 py-5 flex items-center justify-between bg-white'>
                <h1 className='text-xl font-medium text-dark-grey-base'>Aggiungi i tuoi link</h1>
                <div onClick={() => navigate(`/profile?user=${decoded.username}`)}>
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
