import InputText from '../components/atoms/InputText';
import Button from '../components/atoms/Button';
import { Link } from 'react-router-dom';

const Links = () => {
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

    return (
        <>
            <div>
                <div className='flex flex-col'>
                    <div className='ml-auto'>
                        <Link to='/profile'>
                            <Button text='X' size='large' />
                        </Link>
                    </div>
                    <div>
                        <h1 className='text-3xl mt-1 pb-10 mb-5'>
                            <strong>Aggiungi i tuoi link</strong>
                        </h1>
                    </div>
                </div>
            </div>

            <div>
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
                    <Button
                        id='links_sub'
                        text='Salva'
                        size='large'
                        style='primary'
                        type='submit'
                    />
                </form>
            </div>
        </>
    );
};

export default Links;
