import { Cross, Share } from '../../assets/icons';
import { Link } from 'react-router-dom';

const LINKS = [
    {
        social: 'Instagram',
        url: ''
    },
    {
        social: 'Facebook',
        url: ''
    },
    {
        social: 'Twitter',
        url: ''
    },
    {
        social: 'TikTok',
        url: ''
    },
    {
        social: 'YouTube',
        url: ''
    },
    {
        social: 'Apple Music',
        url: ''
    },
    {
        social: 'Amazon Music',
        url: ''
    },
    {
        social: 'Email',
        url: ''
    },
    {
        social: 'Telefono',
        url: ''
    }
];

const PopupLink = ({ social, url }) => {
    return (
        <Link href={url}>
            <div className='flex py-4 px-1 items-center justify-between shadow-card-bot'>
                <div className='flex items-center gap-4'>
                    <img className='w-8 h-8 bg-cover bg-center' src='/cover-default.png' />
                    <p>{social}</p>
                </div>
                <Share />
            </div>
        </Link>
    );
};

const LinksPopup = ({ setOpen }) => {
    return (
        <>
            <div className='w-screen h-screen fixed left-0 top-0 z-40 backdrop-blur-[4px]'></div>
            <div className='flex flex-col gap-4 p-4 shadow-navbar rounded-t-lg bg-white fixed z-50 left-0 right-0 bottom-0'>
                <div className='flex items-center justify-between'>
                    <p className='text-lg font-semibold'>Social links</p>
                    <div onClick={() => setOpen(false)}>
                        <Cross dark />
                    </div>
                </div>
                <div className='flex flex-col'>
                    {LINKS.length > 0 &&
                        LINKS.map(({ social, url }, i) => (
                            <PopupLink key={i} social={social} url={url} />
                        ))}
                </div>
            </div>
        </>
    );
};

export default LinksPopup;
