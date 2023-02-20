import './genre-card.css';

const GenreCard = ({ text }) => {
    if (!text) throw new Error('Text is required!');

    return (
        <div
            className='flex items-center justify-center h-[90px]
            capitalize text-white font-medium text-sm rounded-lg bg-gradient-to-br from-primary-base to-[#3C0072]'
        >
            {text}
        </div>
    );
};

export default GenreCard;
