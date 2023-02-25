import { useNavigate } from 'react-router-dom';

import Button from '../components/atoms/Button';
import ButtonFile from '../components/atoms/ButtonFile';
import CitySelect from '../components/atoms/CitySelect';
import InputText from '../components/atoms/InputText';
import Textarea from '../components/atoms/Textarea';

const EditProfile = () => {
    const navigate = useNavigate();

    const handleSaveProfile = () => {
        navigate('/profile');
    };

    return (
        <div>
            <div className='flex flex-col gap-8'>
                <div className='flex justify-between'>
                    <h1 className='text-xl font-medium text-dark-grey-base'>Modifica profilo</h1>
                    <img src='/icons/cross.svg' onClick={() => navigate('/profile')} />
                </div>
                <div className='flex flex-col gap-6'>
                    <InputText
                        objInputText={{
                            id: 'edit-profile-username',
                            label: `Nome d'arte`,
                            placeholder: `Inserisci il tuo nome d'arte`
                        }}
                    />
                    <Textarea id='edit-profile-description' label='Descrizione' />
                    <ButtonFile />
                    <InputText
                        objInputText={{
                            id: 'edit-profile-age',
                            label: `Età`,
                            placeholder: 'Inserisci la tua età'
                        }}
                    />
                    <CitySelect />
                </div>
            </div>
            <div className='w-full fixed bottom-0 left-0 px-5 py-[18px] shadow-navbar'>
                <Button id='save-profile' text='Salva' callback={handleSaveProfile} />
            </div>
        </div>
    );
};

export default EditProfile;
