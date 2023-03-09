import Button from '../components/atoms/Button';
import Chip from '../components/atoms/Chip';
import InputFile from '../components/atoms/InputFile';
import InputText from '../components/atoms/InputText';
import Textarea from '../components/atoms/Textarea';
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

const AddVideo = () => {
    const navigate = useNavigate();

    return (
        <div className='h-screen w-[100%] relative flex flex-col gap-[44px]'>
            <div className='w-full fixed z-50 bg-white right-0 top-0 px-[20px] py-[12px] flex items-center justify-between'>
                <p className='text-dark-grey-base font-medium text-xl tracking-wide py-2'>
                    Aggiungi video
                </p>
                <a className='w-7 h-7' onClick={() => navigate('/profile')}>
                    <Cross dark={true} />
                </a>
            </div>
            <div className='flex flex-col gap-6 pb-32 pt-[48px]'>
                <div className='flex flex-col gap-[24px]'>
                    <InputText
                        objInputText={{
                            id: 'title',
                            label: 'Titolo',
                            placeholder: 'Inserisci un titolo'
                        }}
                    />
                    <Textarea
                        id='Description'
                        label='Descrizione'
                        placeholder='Inserisci una descrizione'
                    />
                    <InputFile id='File' label='Selezione file' text='Massimo 5MB, .mp4' />
                    <InputFile
                        id='File'
                        label='Seleziona immagine di copertina'
                        text='Massimo 2MB, .png, .jpg'
                    />
                </div>
                <div className='flex flex-col gap-[24px]'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-dark-grey-base font-medium text-sm'>Genere</p>
                        <div className='flex flex-wrap gap-2'>
                            {genres.map(({ name, active }) => (
                                <Chip key={name} text={name} defaultActive={active} />
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-dark-grey-base font-medium text-sm'>Strumenti</p>
                        <div className='flex flex-wrap gap-2'>
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

export default AddVideo;
