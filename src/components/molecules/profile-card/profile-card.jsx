import './profile-card.css';

const ProfileCard = ({ username, avatar }) => {
    if (!username || !avatar) throw new Error(`Props 'username' and 'avatar' are required`);

    return (
        <div className='profile-card'>
            <img src={avatar} />
            <p>{username}</p>
        </div>
    );
};

export default ProfileCard;
