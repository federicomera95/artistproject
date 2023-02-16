import InputFileComponent from '../components/atoms/input-file/input-file';
import InputTextComponent from '../components/atoms/input/inputText';
import ButtonComponent from '../components/atoms/button/button';
import ChipComponent from '../components/atoms/chip/chip';


const genres = [
    {name:'Pop', active: false},
    {name:'Hip Hop', active: false},
    {name:'Rap', active: false},
    {name:'Rock', active: true},
    {name:'Classico', active: false},
    {name:'Instrumental', active: false},
    {name:'Chill', active: false},
    {name:'Jazz', active: false},
    {name:'Tecno', active: false},
];

const instruments = [
    {name:'Chitarra elettrica', active: true},
    {name:'Tastiera', active: false},
    {name:'Chitarra Classica', active: false},
    {name:'Batteria', active: true},
    {name:'Sassofono', active: false},
    {name:'Violino', active: false},
];



const AddContentAudio = () => {
    return (
        <div className='h-screen w-[100%] relative'> 
            <div className='sticky top-0 z-20 bg-white right-0 px-5'>
                <div className='flex items-center justify-between py-3'>
                    <p className='text-dark-grey-base font-medium text-xl tracking-wide'>Aggiungi audio</p>
                    <a>
                        <img className='w-7 h-7' src='/icons/cross.svg'/>
                    </a>
                </div>
            </div>
            <div className='flex flex-col gap-8 px-5 pt-5 pb-11'>
                <div className='flex flex-col gap-6'>
                    <InputTextComponent objInputText={{ id: 'title', label: 'titolo', placeholder: 'Inserisci un titolo'}}/>
                            {/* inserire textarea*/}
                    <InputFileComponent id='file_audio' label='seleziona file' text='Massimo 2MB, .mp3'/>
                    <InputFileComponent id='file_thumbnail_audio' label='seleziona immagine di copertina' text='Massimo 2MB, .jpg, .png'/>
                    <div className='flex flex-col gap-2'>
                        <p className='text-dark-grey-base font-medium text-sm'>Genere</p>
                        <div className='flex flex-wrap gap-[8px]'>
                            {genres.map(({name, active}) => <ChipComponent key={name} text={name} defaultActive={active}/>)}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-dark-grey-base font-medium text-sm'>Strumenti</p>
                        <div className='flex flex-wrap gap-[8px]'>
                            {instruments.map(({name, active}) => <ChipComponent key={name} text={name} defaultActive={active}/>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full sticky bottom-0 right-0 z-20 bg-white py-[18px] px-5 shadow-navbar'>
                <ButtonComponent id='upload-audio' text='Carica Audio' size='medium' style='primary'/>
            </div>
        </div>
    );
};

export default AddContentAudio;