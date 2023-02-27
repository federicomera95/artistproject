import { useNavigate } from 'react-router-dom';
import InputText from '../components/atoms/InputText';
import Button from '../components/atoms/Button';

const objInstagram = {
    id: 'instagram',
    label: 'Instagram',
    placeholder: 'Inserisci il link al profilo Instagram'
};

const objFacebook = {
    id: 'facebook',
    label: 'Facebook',
    placeholder: 'Inserisci il link al profilo Facebook'
};

const objTwitter = {
    id: 'twitter',
    label: 'Twitter',
    placeholder: 'Inserisci il link al profilo Twitter'
};

const objTikTok = {
    id: 'tiktok',
    label: 'Tik Tok',
    placeholder: 'Inserisci il link al profilo Tik Tok'
};

const objYouTube = {
    id: 'youtube',
    label: 'YouTube',
    placeholder: 'Inserisci il link al profilo YouTube'
};

const objAppleMusic = {
    id: 'applemusic',
    label: 'Apple Music',
    placeholder: 'Inserisci il link al profilo Apple Music'
};

const objAmazonMusic = {
    id: 'amazonmusic',
    label: 'Amazon Music',
    placeholder: 'Inserisci il link al profilo Amazon Music'
};

const objEmail = {
    id: 'email',
    label: 'Email',
    placeholder: "Inserisci un'email"
};

const objPhone = {
    id: 'phone',
    label: 'Telefono',
    placeholder: 'Inserisci un numero di telefono'
};

const Links = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='w-full fixed top-0 left-0 z-10 px-5 py-5 flex items-center justify-between bg-white'>
                <h1 className='text-xl font-medium text-dark-grey-base'>Aggiungi i tuoi link</h1>
                <img src='/icons/cross.svg' onClick={() => navigate('/profile')} />
            </div>

            <div className='mt-16 mb-24'>
                <form className='flex flex-col gap-[24px]'>
                    <div className='flex flex-col gap-[16px]'>
                        <InputText objInputText={objInstagram} />
                        <InputText objInputText={objFacebook} />
                        <InputText objInputText={objTwitter} />
                        <InputText objInputText={objTikTok} />
                        <InputText objInputText={objYouTube} />
                        <InputText objInputText={objAppleMusic} />
                        <InputText objInputText={objAmazonMusic} />
                        <InputText objInputText={objEmail} />
                        <InputText objInputText={objPhone} />
                    </div>
                    <div className='fixed bottom-0 left-0 z-10 w-full px-5 py-[18px] bg-white'>
                        <Button
                            id='links-sub'
                            text='Salva'
                            size='large'
                            style='primary'
                            type='submit'
                            callback={() => navigate('/profile')}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Links;
