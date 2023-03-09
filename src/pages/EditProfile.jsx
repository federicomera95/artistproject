import { useNavigate } from 'react-router-dom';
import { Cross } from '../assets/icons';

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
            <div className='flex flex-col gap-8 mb-28'>
                <div className='w-full z-10 fixed top-0 left-0 px-5 py-5 flex items-center justify-between bg-white'>
                    <h1 className='text-xl font-medium text-dark-grey-base'>Modifica profilo</h1>
                    <div onClick={() => navigate('/profile')}>
                        <Cross dark={true} />
                    </div>
                </div>
                <div className='flex flex-col gap-6 mt-16'>
                    <InputText
                        objInputText={{
                            id: 'edit-profile-username',
                            label: `Nome d'arte`,
                            placeholder: `Inserisci il tuo nome d'arte`
                        }}
                    />
                    <Textarea
                        id='edit-profile-description'
                        label='Descrizione'
                        placeholder={`Inserisci una descrizione`}
                    />
                    <ButtonFile />
                    <InputText
                        objInputText={{
                            id: 'edit-profile-age',
                            type: 'number',
                            label: `Età`,
                            placeholder: 'Inserisci la tua età'
                        }}
                    />
                    <CitySelect />
                </div>
            </div>
            <div className='w-full fixed bottom-0 left-0 z-10 px-5 py-[18px] shadow-navbar bg-white'>
                <Button id='save-profile' text='Salva' callback={handleSaveProfile} />
            </div>
        </div>
    );
};

export default EditProfile;
