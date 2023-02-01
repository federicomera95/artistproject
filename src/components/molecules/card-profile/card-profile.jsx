import './card-profile.css';

const CardProfile = ({ text, src }) => {
    if (!text || !src) throw new Error(`Props 'text' and 'src' are required`);

    return (
        <div className='card-profile'>
            <img src={src} />
            <p>{text}</p>
        </div>
    );
};

export default CardProfile;
