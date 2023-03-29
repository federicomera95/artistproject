import { Cross } from '../../assets/icons';
import { useNavigate } from 'react-router-dom';

const PopupElement = (props) => {
    return (
        <div className='flex flex-row'>
            <div className='flex flex-row w-full border-b-2 mb-1 p-3'>
                <img
                    className='w-10 h-10 bg-cover bg-center bg-no-repeat mr-5'
                    src='/cover-default.png'
                />
                <p className='text-xl pt-1'>{props.social}</p>
            </div>
            <div className='pt-4'>
                <a href={props.website}>
                    <svg
                        width='24'
                        height='25'
                        viewBox='0 0 24 25'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M19 9.45581V5.45581H15'
                            stroke='#4B5563'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M13 11.4558L19 5.45581'
                            stroke='#4B5563'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M20 13.4558V15.4558C20 18.2172 17.7614 20.4558 15 20.4558H9C6.23858 20.4558 4 18.2172 4 15.4558V9.45581C4 6.69439 6.23858 4.45581 9 4.45581H11'
                            stroke='#4B5563'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

const LinksPopup = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col shadow-xl rounded-xl mt-5'>
            <div className='flex flex-row w-full p-3'>
                <p className='text-xl font-bold w-full pl-2'>Social links</p>
                <div onClick={() => navigate('/profile/links')}>
                    <Cross dark />
                </div>
            </div>
            <div className='p-3'>
                <PopupElement social='Placeholder 1' website='#' />
                <PopupElement social='Placeholder 2' website='#' />
                <PopupElement social='Placeholder 3' website='#' />
                <PopupElement social='Placeholder 4' website='#' />
            </div>
        </div>
    );
};

export default LinksPopup;
