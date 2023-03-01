const ArrowDown = () => {
    return (
        <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M8 10L12 14L16 10'
                stroke='#4B5563'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const Cross = () => {
    return (
        <svg
            width='29'
            height='30'
            viewBox='0 0 29 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M21.929 7.9289L7.78689 22.071'
                stroke='#1F2937'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M21.9289 22.071L7.7868 7.9289'
                stroke='#1F2937'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const Edit = () => {
    return (
        <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.0419 17.8851L20.3219 7.60511C21.1029 6.82411 21.1029 5.55811 20.3219 4.77711L19.1999 3.65411C18.4189 2.87311 17.1529 2.87311 16.3719 3.65411L6.09093 13.9351C5.94493 14.0811 5.82293 14.2491 5.72793 14.4321L3.09793 19.5281C2.65193 20.3931 3.57893 21.3211 4.44393 20.8761L9.54293 18.2501C9.72793 18.1541 9.89593 18.0321 10.0419 17.8851Z'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M5.90991 14.1902L9.78991 18.0702'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M18 21H4.04004'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const Explore = ({ dark }) => {
    let color = '#9333EA';
    if (dark) color = '#4B5563';

    return (
        <svg
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.37252 3.49609C6.37252 5.70615 4.58091 7.49776 2.37085 7.49776C4.58091 7.49776 6.37252 9.28937 6.37252 11.4994C6.37252 9.28937 8.16412 7.49776 10.3742 7.49776C8.16412 7.49776 6.37252 5.70615 6.37252 3.49609Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.3771 15.5012C17.3771 12.7387 15.1376 10.4992 12.375 10.4992C15.1376 10.4992 17.3771 8.25964 17.3771 5.49707C17.3771 8.25964 19.6166 10.4992 22.3792 10.4992C19.6166 10.4992 17.3771 12.7387 17.3771 15.5012Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M17.3772 15.501V16.5014'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M17.3772 5.49749V4.49707'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M10.3742 21.5039V22.5043'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M10.3742 14.5014V13.501'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M6.37252 11.5V12.5004'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M6.37252 2.49609V3.49651'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.3742 14.001C10.3742 16.211 8.58262 18.0026 6.37256 18.0026C8.58262 18.0026 10.3742 19.7943 10.3742 22.0043C10.3742 19.7943 12.1658 18.0026 14.3759 18.0026C12.1658 18.0026 10.3742 16.211 10.3742 14.001Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const Eye = () => {
    return (
        <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M2.09009 13.09C7.56309 6.043 16.4361 6.043 21.9091 13.09'
                stroke='#4B5563'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M15.431 9.31802C17.1884 11.0754 17.1884 13.9246 15.431 15.682C13.6736 17.4393 10.8244 17.4393 9.06704 15.682C7.30968 13.9246 7.30968 11.0754 9.06704 9.31802C10.8244 7.56066 13.6736 7.56066 15.431 9.31802'
                stroke='#4B5563'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const Home = ({ dark }) => {
    let color = '#9333EA';
    if (dark) color = '#4B5563';

    return (
        <svg
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M20.717 8.79876L14.717 4.13176C13.634 3.28876 12.117 3.28876 11.033 4.13176L5.033 8.79876C4.302 9.36676 3.875 10.2408 3.875 11.1668V18.4998C3.875 20.1568 5.218 21.4998 6.875 21.4998H18.875C20.532 21.4998 21.875 20.1568 21.875 18.4998V11.1668C21.875 10.2408 21.448 9.36676 20.717 8.79876Z'
                stroke={color}
                strokeWidth='1.5'
            />
            <path
                d='M16.875 14.7378C14.665 16.9478 11.083 16.9478 8.875 14.7378'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const ToggleAudio = () => {
    return (
        <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M4.25 8.89015V3.98165C4.25 3.77415 4.378 3.58815 4.572 3.51465L8.822 1.89565C9.1495 1.77065 9.5 2.01265 9.5 2.36265V7.88715'
                stroke='#9333EA'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M9.13388 7.00381C9.62204 7.49197 9.62204 8.28342 9.13388 8.77158C8.64573 9.25973 7.85427 9.25973 7.36612 8.77158C6.87796 8.28342 6.87796 7.49197 7.36612 7.00381C7.85427 6.51566 8.64573 6.51566 9.13388 7.00381'
                stroke='#9333EA'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M3.88388 8.00381C4.37204 8.49197 4.37204 9.28342 3.88388 9.77158C3.39573 10.2597 2.60427 10.2597 2.11612 9.77158C1.62796 9.28342 1.62796 8.49197 2.11612 8.00381C2.60427 7.51566 3.39573 7.51566 3.88388 8.00381'
                stroke='#9333EA'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const ToggleVideo = () => {
    return (
        <svg
            width='13'
            height='12'
            viewBox='0 0 13 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.1034 5.1467L4.0214 1.4302C3.3549 1.0227 2.4999 1.5022 2.4999 2.2832L2.4999 9.7172C2.4999 10.4982 3.3549 10.9777 4.0214 10.5707L10.1034 6.8537C10.7419 6.4637 10.7419 5.5367 10.1034 5.1467Z'
                stroke='#9333EA'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const Profile = ({ dark }) => {
    let color = '#9333EA';
    if (dark) color = '#4B5563';

    return (
        <svg
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M14.5999 5.02513C15.9667 6.39197 15.9667 8.60804 14.5999 9.97488C13.233 11.3417 11.017 11.3417 9.65013 9.97488C8.28329 8.60804 8.28329 6.39197 9.65013 5.02513C11.017 3.65829 13.233 3.65829 14.5999 5.02513'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.125 19.0001V20.0001C4.125 20.5521 4.573 21.0001 5.125 21.0001H19.125C19.677 21.0001 20.125 20.5521 20.125 20.0001V19.0001C20.125 15.9741 16.173 14.0081 12.125 14.0081C8.077 14.0081 4.125 15.9741 4.125 19.0001Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const Search = ({ dark }) => {
    let color = '#9333EA';
    if (dark) color = '#4B5563';

    return (
        <svg
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M14.8181 6.08187C17.15 8.41369 17.15 12.1943 14.8181 14.5261C12.4863 16.858 8.70569 16.858 6.37387 14.5261C4.04204 12.1943 4.04204 8.41369 6.37387 6.08187C8.70569 3.75005 12.4863 3.75005 14.8181 6.08187'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M14.7749 14.5596L20.6249 20.4896'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const Upload = () => {
    return (
        <svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M7.51458 24.4853C4.08261 21.0533 3.05594 15.8919 4.91331 11.4078C6.77068 6.92371 11.1463 4 15.9999 4C20.8534 4 25.229 6.92371 27.0864 11.4078C28.9438 15.8919 27.9171 21.0533 24.4851 24.4853'
                stroke='#4B5563'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M15.9999 26.6667V14.6667'
                stroke='#4B5563'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M20 18.6667L16 14.6667L12 18.6667'
                stroke='#4B5563'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const Logout = () => {
    return (
        <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M3.99634 13.0002H15.0009'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M11.9998 9.99878L15.001 13L11.9998 16.0013'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M6.99756 10.1359V8.39813C6.99813 7.44473 7.67133 6.62418 8.60623 6.43731L19.6108 4.03031C20.225 3.95936 20.8399 4.15663 21.2982 4.57162C21.7565 4.98661 22.0137 5.57903 22.0038 6.19721V20.003C22.0041 20.5931 21.7438 21.1532 21.2927 21.5336C20.8415 21.914 20.2454 22.0758 19.6638 21.9758L8.65925 20.083C7.69882 19.9178 6.9971 19.0847 6.99756 18.1102V15.9723'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export {
    ArrowDown,
    Cross,
    Edit,
    Explore,
    Eye,
    Home,
    ToggleAudio,
    ToggleVideo,
    Profile,
    Search,
    Upload,
    Logout
};
