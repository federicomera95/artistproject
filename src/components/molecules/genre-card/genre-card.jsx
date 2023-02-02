import './genre-card.css';

const GenreCardComponent = ({text})=> {

    if(!text) throw new Error('Error, text is required!');

    return (
        <div className='genre-card'>
            {text}
        </div>
    );
};

export default GenreCardComponent;