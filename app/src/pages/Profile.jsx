import decode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Camera, Cross, Edit, Logout, Microphone, Photo } from '../assets/icons';

import Button from '../components/atoms/Button';
import ExtendedAudioCard from '../components/molecules/ExtendedAudioCard';
import ExtendedVideoCard from '../components/molecules/ExtendedVideoCard';
import ExtendedPhotoCard from '../components/molecules/ExtendedPhotoCard';
import LinksPopup from '../components/molecules/LinksPopup';
import { find, remove } from '../utility/storage';
import getUser from '../services/getUser';
import STATIC_FILES from '../utility/constants';
import putToggleFOllow from '../services/putToggleFollow';

const navigation = ['Tutti', 'Photo', 'Audio', 'Video'];

const getContent = (type, contents) => {
    switch (type) {
        case 'tutti':
            return contents;

        case 'photo':
            return contents.filter((c) => c.type === 'photo');
        case 'audio':
            return contents.filter((c) => c.type === 'audio');

        case 'video':
            return contents.filter((c) => c.type === 'video');
        default:
            throw new Error(`Invalid content type 'type'`);
    }
};

const Profile = () => {
    const [linksPopup, setLinksPopup] = useState(false);
    const [currentPage, setCurrentPage] = useState('tutti');
    const [isSelectContentOpen, setSelectContentOpen] = useState(false);
    const [follow, toggleFollow] = useState(false);
    const [self, setSelf] = useState(null);

    const [userData, setUserData] = useState(null);

    const navigate = useNavigate();
    const { search } = useLocation();
    const user = new URLSearchParams(search).get('user');

    const onToggleFollow = () => {
        const token = find('token').token;

        toggleFollow((f) => !f);
        putToggleFOllow(token, { isFollowing: !follow, username: user }).catch((err) =>
            console.log(err)
        );
    };

    useEffect(() => {
        if (!user) return navigate('/home');

        const token = find('token').token;
        const decoded = decode(token);

        getUser(user, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(({ data }) => {
                setUserData(data);
                toggleFollow(data.info.followers.includes(decoded.email));
            })
            .catch(() => navigate('/home'));

        if (decoded.type === 'artist' && decoded.username === user) {
            setSelf(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <>
            {(self && (
                <div className='flex flex-col gap-6 relative bottom-5'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-6'>
                            <div
                                className='bg-gradient-to-br text-white from-profile-gradient-from to-profile-gradient-to to h-[208px] w-screen rounded-b-[20px]
                        relative right-5 flex justify-between items-start pt-12 px-5'
                            >
                                <p className='absolute bottom-5 text-xs font-bold rounded-[30px] px-2 py-1 bg-dark-grey-base'>
                                    {(userData && userData.info.followers.length) || 0} Fans
                                </p>

                                <div
                                    className='w-6'
                                    onClick={() => {
                                        remove('token');
                                        navigate('/login');
                                    }}
                                >
                                    <Logout />
                                </div>
                                <div className='flex flex-col items-center gap-4'>
                                    <img
                                        crossOrigin='anonymous'
                                        className='w-[94px] h-[94px] rounded-full border-[2px]'
                                        src={
                                            userData && userData.info.avatar
                                                ? `${STATIC_FILES}/${userData.info.avatar}`
                                                : '/logo-default.svg'
                                        }
                                    />
                                    <p>{(userData && userData.username) || `Nome D'arte`}</p>
                                </div>
                                <div className='w-6' onClick={() => navigate('/profile/edit')}>
                                    <Edit />
                                </div>
                            </div>
                            <p className='text-sm font-normal'>{userData && userData.info.bio}</p>

                            <Button
                                text='Modifica i tuoi link'
                                style='secondary'
                                size='large'
                                callback={() => navigate('/profile/links')}
                            />
                        </div>
                        <div className='w-screen relative right-5 flex justify-between text-center'>
                            {navigation.map((nav, i) => (
                                <p
                                    key={`${nav}-${i}`}
                                    id={nav.toLowerCase()}
                                    className={`w-1/4 px-[10px] py-3 font-medium border-b border-dark-grey-disabled ${
                                        currentPage === nav.toLowerCase()
                                            ? 'border-b-[2px] border-b-primary-base'
                                            : ''
                                    }`}
                                    onClick={({ target }) => {
                                        if (currentPage === target.id) return;
                                        setCurrentPage(target.id);
                                    }}
                                >
                                    {nav}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 pb-20'>
                        <p className='font-medium text-dark-grey-placeholder'>
                            <span className='font-bold text-dark-grey-base'>
                                {userData && getContent(currentPage, userData.contents).length}
                            </span>{' '}
                            Contenuti {currentPage === 'tutti' ? 'totali' : currentPage}
                        </p>
                        <div className='flex flex-col gap-4'>
                            {userData &&
                                getContent(currentPage, userData.contents).map((content, i) => {
                                    switch (content.type) {
                                        case 'photo':
                                            return (
                                                <ExtendedPhotoCard
                                                    key={`${content.title}-${i}`}
                                                    avatar={userData.info.avatar}
                                                    image={content.file}
                                                    title={content.title}
                                                    username={user}
                                                    description={content.description}
                                                    tags={[
                                                        ...(content.genres ? content.genres : []),
                                                        ...(content.instruments
                                                            ? content.instruments
                                                            : [])
                                                    ]}
                                                />
                                            );
                                        case 'audio':
                                            return (
                                                <ExtendedAudioCard
                                                    key={`${content.title}-${i}`}
                                                    username={user}
                                                    title={content.title}
                                                    thumbnail={content.thumbnail}
                                                    description={content.description}
                                                    audio={content.file}
                                                    avatar={userData.info.avatar}
                                                    tags={[
                                                        ...(content.genres ? content.genres : []),
                                                        ...(content.instruments
                                                            ? content.instruments
                                                            : [])
                                                    ]}
                                                />
                                            );
                                        case 'video':
                                            return (
                                                <ExtendedVideoCard
                                                    key={`${content.title}-${i}`}
                                                    username={user}
                                                    thumbnail={content.thumbnail}
                                                    title={content.title}
                                                    description={content.description}
                                                    avatar={userData.info.avatar}
                                                    video={content.file}
                                                    tags={[
                                                        ...(content.genres ? content.genres : []),
                                                        ...(content.instruments
                                                            ? content.instruments
                                                            : [])
                                                    ]}
                                                />
                                            );
                                    }
                                })}
                        </div>
                    </div>
                    {isSelectContentOpen && (
                        <div className='w-screen h-screen fixed left-0 top-0 z-40 backdrop-blur-[4px]'></div>
                    )}
                    <div
                        className={`flex flex-col items-end gap-5 fixed z-50 bottom-[100px] right-5 rounded-full`}
                        onClick={() => setSelectContentOpen((status) => !status)}
                    >
                        {isSelectContentOpen && (
                            <div className='flex flex-col gap-4 font-medium'>
                                <div
                                    className='flex items-center p-3 gap-2 rounded-lg border border-dark-grey-disabled bg-white'
                                    onClick={() => navigate('/profile/add-audio')}
                                >
                                    <Microphone />
                                    <span>Audio</span>
                                </div>
                                <div
                                    className='flex items-center p-3 gap-2 rounded-lg border border-dark-grey-disabled bg-white'
                                    onClick={() => navigate('/profile/add-video')}
                                >
                                    <Camera />
                                    <span>Video</span>
                                </div>
                                <div
                                    className='flex items-center p-3 gap-2 rounded-lg border border-dark-grey-disabled bg-white'
                                    onClick={() => navigate('/profile/add-photo')}
                                >
                                    <Photo />
                                    <span>Photo</span>
                                </div>
                            </div>
                        )}
                        <div
                            className={`p-[14px] rounded-full shadow-play-pause bg-primary-base transition-all ${
                                isSelectContentOpen ? 'bg-dark-grey-placeholder' : 'rotate-45'
                            }`}
                        >
                            <Cross />
                        </div>
                    </div>
                </div>
            )) || (
                <div className='flex flex-col gap-6 relative bottom-5'>
                    {linksPopup && <LinksPopup setOpen={setLinksPopup} />}
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-6'>
                            <div
                                className='bg-gradient-to-br text-white from-profile-gradient-from to-profile-gradient-to to h-[208px] w-screen rounded-b-[20px]
                                relative right-5 flex justify-center  pt-12 px-5'
                            >
                                {follow && (
                                    <p className='absolute bottom-5 left-5 text-xs font-semibold rounded-[30px] px-2 py-1 bg-dark-grey-base'>
                                        Seguito
                                    </p>
                                )}
                                <div className='flex flex-col items-center gap-4'>
                                    <img
                                        crossOrigin='anonymous'
                                        className='w-[94px] h-[94px] rounded-full border-[2px]'
                                        src={
                                            userData && userData.info.avatar
                                                ? `${STATIC_FILES}/${userData.info.avatar}`
                                                : '/logo-default.svg'
                                        }
                                    />
                                    <p>{(userData && userData.username) || `Nome D'arte`}</p>
                                </div>
                            </div>
                            <p className='text-sm font-normal'>{userData && userData.info.bio}</p>
                            {(!follow && (
                                <Button text='Segui' size='large' callback={onToggleFollow} />
                            )) || (
                                <Button
                                    text='Smetti di seguire'
                                    size='large'
                                    callback={onToggleFollow}
                                />
                            )}
                            <Button
                                text='Social links'
                                style='secondary'
                                size='large'
                                callback={() => setLinksPopup(true)}
                            />
                        </div>
                        <div className='w-screen relative right-5 flex justify-between text-center'>
                            {navigation.map((nav, i) => (
                                <p
                                    key={`${nav}-${i}`}
                                    id={nav.toLowerCase()}
                                    className={`w-1/4 px-[10px] py-3 font-medium border-b border-dark-grey-disabled ${
                                        currentPage === nav.toLowerCase()
                                            ? 'border-b-[2px] border-b-primary-base'
                                            : ''
                                    }`}
                                    onClick={({ target }) => {
                                        if (currentPage === target.id) return;
                                        setCurrentPage(target.id);
                                    }}
                                >
                                    {nav}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 pb-20'>
                        <p className='font-medium text-dark-grey-placeholder'>
                            <span className='font-bold text-dark-grey-base'>
                                {userData && getContent(currentPage, userData.contents).length}
                            </span>{' '}
                            Contenuti {currentPage === 'tutti' ? 'totali' : currentPage}
                        </p>
                        <div className='flex flex-col gap-4'>
                            {userData &&
                                getContent(currentPage, userData.contents).map((content, i) => {
                                    switch (content.type) {
                                        case 'photo':
                                            return (
                                                <ExtendedPhotoCard
                                                    key={`${content.title}-${i}`}
                                                    avatar={userData.info.avatar}
                                                    image={content.file}
                                                    title={content.title}
                                                    username={user}
                                                    description={content.description}
                                                    tags={[
                                                        ...(content.genres ? content.genres : []),
                                                        ...(content.instruments
                                                            ? content.instruments
                                                            : [])
                                                    ]}
                                                />
                                            );
                                        case 'audio':
                                            return (
                                                <ExtendedAudioCard
                                                    key={`${content.title}-${i}`}
                                                    username={user}
                                                    avatar={userData.info.avatar}
                                                    title={content.title}
                                                    thumbnail={content.thumbnail}
                                                    description={content.description}
                                                    audio={content.file}
                                                    tags={[
                                                        ...(content.genres ? content.genres : []),
                                                        ...(content.instruments
                                                            ? content.instruments
                                                            : [])
                                                    ]}
                                                />
                                            );
                                        case 'video':
                                            return (
                                                <ExtendedVideoCard
                                                    key={`${content.title}-${i}`}
                                                    username={user}
                                                    thumbnail={content.thumbnail}
                                                    title={content.title}
                                                    description={content.description}
                                                    avatar={userData.info.avatar}
                                                    video={content.file}
                                                    tags={[
                                                        ...(content.genres ? content.genres : []),
                                                        ...(content.instruments
                                                            ? content.instruments
                                                            : [])
                                                    ]}
                                                />
                                            );
                                    }
                                })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;
