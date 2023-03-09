import InputFile from '../components/atoms/InputFile';
import InputText from '../components/atoms/InputText';
import Button from '../components/atoms/Button';
import Chip from '../components/atoms/Chip';
import TextArea from '../components/atoms/Textarea';
import { Cross } from '../assets/icons';
import { useNavigate } from 'react-router-dom';

const genres = [
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

const instruments = [
    { name: 'Chitarra elettrica', active: true },
    { name: 'Tastiera', active: false },
    { name: 'Chitarra Classica', active: false },
    { name: 'Batteria', active: true },
    { name: 'Sassofono', active: false },
    { name: 'Violino', active: false }
];

const AddAudio = () => {
    const navigate = useNavigate();

    return (
        <div className='h-screen w-[100%] relative flex flex-col gap-[44px]'>
            <div className='w-full fixed z-50 bg-white right-0 top-0 px-[20px] py-[12px] flex items-center justify-between'>
                <p className='text-dark-grey-base font-medium text-xl tracking-wide py-2'>
                    Aggiungi audio
                </p>
                <a className='w-7 h-7' onClick={() => navigate('/profile')}>
                    <Cross dark={true} />
                </a>
            </div>
            <div className='flex flex-col gap-8 pb-32 pt-[48px]'>
                <div className='flex flex-col gap-6'>
                    <InputText
                        objInputText={{
                            id: 'title',
                            label: 'titolo',
                            placeholder: 'Inserisci un titolo'
                        }}
                    />
                    <TextArea
                        id='description'
                        label='Descrizione'
                        placeholder='Inserire descrizione'
                    />
                    <InputFile id='file_audio' label='seleziona file' text='Massimo 2MB, .mp3' />
                    <InputFile
                        id='file_thumbnail_audio'
                        label='seleziona immagine di copertina'
                        text='Massimo 2MB, .jpg, .png'
                    />
                    <div className='flex flex-col gap-2'>
                        <p className='text-dark-grey-base font-medium text-sm'>Genere</p>
                        <div className='flex flex-wrap gap-[8px]'>
                            {genres.map(({ name, active }) => (
                                <Chip key={name} text={name} defaultActive={active} />
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-dark-grey-base font-medium text-sm'>Strumenti</p>
                        <div className='flex flex-wrap gap-[8px]'>
                            {instruments.map(({ name, active }) => (
                                <Chip key={name} text={name} defaultActive={active} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full fixed bottom-0 right-0 shadow-navbar py-[18px] px-5 bg-white z-10'>
                <Button id='upload-photo' style='primary' text='Carica foto' size='medium' />
            </div>
        </div>
    );
};

export default AddAudio;
