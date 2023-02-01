import './photo-card.css';

const PhotoCard = ({ username, avatar, photo, text }) => {
    if (!username || !avatar || !photo || !text)
        throw new Error(`Props 'username', 'avatar', 'photo' and 'text' are required`);

    return (
        <div className='photo-card'>
            <div className='card-top'>
                <img src={avatar} />
                <p>{username}</p>
            </div>
            <div className='card-bot'>
                <img src={photo} />
                <p>{text}</p>
            </div>
        </div>
    );
};

export default PhotoCard;
