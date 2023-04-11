import ExtendedPhotoCard from '../components/molecules/ExtendedPhotoCard';
import ExtendedAudioCard from '../components/molecules/ExtendedAudioCard';
import ExtendedVideoCard from '../components/molecules/ExtendedVideoCard';
import useFetch from '../hooks/useFetch';
import { find } from '../utility/storage';

const Explore = () => {
    const [data, load, err, reload] = useFetch('/search/explore', {
        headers: {
            Authorization: `Bearer ${find('token').token}`
        }
    });

    return (
        <>
            <div className='flex flex-col items-center gap-y-10 pb-20'>
                {data &&
                    !err &&
                    !load &&
                    data.data.map((user, i) =>
                        user.contents.map((content, _i) => {
                            switch (content.type) {
                                case 'photo':
                                    return (
                                        <ExtendedPhotoCard
                                            key={`${i}-${_i}`}
                                            avatar={user.avatar}
                                            image={content.image}
                                            title={content.title}
                                            username={user.username}
                                            description={content.description}
                                            tags={[
                                                ...(content.genres ? content.genres : []),
                                                ...(content.instruments ? content.instruments : [])
                                            ]}
                                        />
                                    );
                                case 'audio':
                                    return (
                                        <ExtendedAudioCard
                                            key={`${i}-${_i}`}
                                            username={user.username}
                                            title={content.title}
                                            thumbnail={content.thumbnail}
                                            description={content.description}
                                            audio={content.audio}
                                            avatar={user.avatar}
                                            tags={[
                                                ...(content.genres ? content.genres : []),
                                                ...(content.instruments ? content.instruments : [])
                                            ]}
                                        />
                                    );
                                case 'video':
                                    return (
                                        <ExtendedVideoCard
                                            key={`${i}-${_i}`}
                                            username={user.username}
                                            thumbnail={content.thumbnail}
                                            title={content.title}
                                            description={content.description}
                                            avatar={user.avatar}
                                            video={content.video}
                                            tags={[
                                                ...(content.genres ? content.genres : []),
                                                ...(content.instruments ? content.instruments : [])
                                            ]}
                                        />
                                    );
                            }
                        })
                    )}
            </div>
        </>
    );
};

export default Explore;
