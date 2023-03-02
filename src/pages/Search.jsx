import CitySelect from '../components/atoms/CitySelect';
import TripleSelect from '../components/atoms/TripleSelect';
import InputText from '../components/atoms/InputText';
import RangeSlider from '../components/atoms/rangeSlider/rangeSlider';
import Button from '../components/atoms/Button';
import ChipSelect from '../components/molecules/ChipSelect';

const Search = () => {
    const handleSearch = () => {};

    return (
        <div className='flex flex-col gap-6 mb-24'>
            <InputText
                objInputText={{
                    id: 'research',
                    label: 'Cerca',
                    placeholder: 'Inserisci un nome, un genere, etc...'
                }}
                search
            />
            <h3 className='font-medium text-dark-grey-placeholder'>Filtri</h3>
            <div className='flex flex-col gap-8'>
                <TripleSelect label='Tipologia' choices={['Foto', 'Video', 'Audio']} />
                <RangeSlider id='slider' />
                <TripleSelect label='Sesso' choices={['Uomo', 'Donna', 'Altro']} />
                <CitySelect />
                <ChipSelect type='Genere' />
                <ChipSelect type='Strumenti' />
                <Button text='Cerca' callback={handleSearch} />
            </div>
        </div>
    );
};

export default Search;
