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

const Cross = ({ dark }) => {
    let color = '#ffffff';
    if (dark) color = '#1F2937';

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
                stroke={color}
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M21.9289 22.071L7.7868 7.9289'
                stroke={color}
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

const HideEye = () => {
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
                stroke='#' //'#4B5563'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='#4B5563'
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

const ToggleVideo = ({ w, h }) => {
    return (
        <svg
            width={w ? w : '13'}
            height={h ? h : '12'}
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

const PauseAudio = () => {
    return (
        <svg
            width='11'
            height='11'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.5 14.5V14.5C11.5685 14.5 10.8125 13.772 10.8125 12.875L10.8125 3.125C10.8125 2.228 11.5685 1.5 12.5 1.5V1.5C13.4315 1.5 14.1875 2.228 14.1875 3.125L14.1875 12.875C14.1875 13.772 13.4315 14.5 12.5 14.5Z'
                stroke='#9333EA'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.5 14.5V14.5C2.5685 14.5 1.8125 13.772 1.8125 12.875L1.8125 3.125C1.8125 2.228 2.5685 1.5 3.5 1.5V1.5C4.4315 1.5 5.1875 2.228 5.1875 3.125L5.1875 12.875C5.1875 13.772 4.4315 14.5 3.5 14.5Z'
                stroke='#9333EA'
                strokeWidth='2'
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

const Microphone = () => {
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
                d='M12.0002 14.5743V14.5743C10.2942 14.5737 8.91144 13.191 8.91089 11.485V6.33587C8.91144 4.62993 10.2942 3.24713 12.0002 3.24658V3.24658C13.7061 3.24713 15.0889 4.62993 15.0895 6.33587V11.485C15.0897 12.3044 14.7643 13.0904 14.1849 13.6698C13.6055 14.2492 12.8196 14.5746 12.0002 14.5743Z'
                stroke='#9333EA'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M19.0031 11.6499C19.0031 15.5175 15.8678 18.6528 12.0002 18.6528V18.6528C8.13263 18.6528 4.99731 15.5175 4.99731 11.6499'
                stroke='#9333EA'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12.0002 20.7537V18.6528'
                stroke='#9333EA'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const Camera = () => {
    return (
        <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M16 10.2924L19.4752 8.15023C19.7837 7.96003 20.171 7.95165 20.4875 8.12832C20.8039 8.30499 21 8.63906 21 9.00149V15.9983C21 16.3607 20.8039 16.6948 20.4875 16.8714C20.171 17.0481 19.7838 17.0397 19.4753 16.8496L16 14.7074'
                stroke='#9333EA'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <rect
                x='3'
                y='6'
                width='13'
                height='13'
                rx='3'
                stroke='#9333EA'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const Photo = () => {
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
                d='M19.9969 21H4.00293C2.89793 21 2.00293 20.105 2.00293 19V5C2.00293 3.895 2.89793 3 4.00293 3H19.9969C21.1019 3 21.9969 3.895 21.9969 5V19C21.9969 20.105 21.1009 21 19.9969 21Z'
                stroke='#9333EA'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M9.41422 7.58579C10.1953 8.36684 10.1953 9.63317 9.41422 10.4142C8.63317 11.1953 7.36684 11.1953 6.58579 10.4142C5.80474 9.63317 5.80474 8.36684 6.58579 7.58579C7.36684 6.80474 8.63317 6.80474 9.41422 7.58579'
                stroke='#9333EA'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M22 15.9999L17.781 12.6249C17.35 12.2799 16.72 12.3499 16.375 12.7809L13.039 16.9509C12.694 17.3819 12.065 17.4519 11.633 17.1069L9.765 15.6119C9.34 15.2719 8.721 15.3339 8.372 15.7529L4 20.9999'
                stroke='#9333EA'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const CheckMark = () => {
    return (
        <svg
            width='24'
            height='24'
            viewBox='0 0 25 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <circle
                cx='12.5001'
                cy='12.0003'
                r='9.00375'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M8.94263 12.3392L11.1105 14.5071L11.0965 14.4931L15.9876 9.60205'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const DeleteMark = () => {
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
                d='M7.414 20.414L3.586 16.586C3.211 16.211 3 15.702 3 15.172V8.828C3 8.298 3.211 7.789 3.586 7.414L7.414 3.586C7.789 3.211 8.298 3 8.828 3H15.171C15.701 3 16.21 3.211 16.585 3.586L20.413 7.414C20.789 7.789 21 8.298 21 8.828V15.171C21 15.701 20.789 16.21 20.414 16.585L16 21H8.828C8.298 21 7.789 20.789 7.414 20.414V20.414Z'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M9 15L15 9'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M15 15L9 9'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const Bookmark = () => {
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
                d='M4.99731 19.5035V6.99832C4.99731 5.34078 6.34102 3.99707 7.99856 3.99707H16.0019C17.6594 3.99707 19.0031 5.34078 19.0031 6.99832V19.5035C19.0033 19.6911 18.8985 19.8629 18.7318 19.9487C18.565 20.0345 18.3643 20.0198 18.2118 19.9107L12.2914 15.6809C12.1173 15.5563 11.8832 15.5563 11.7091 15.6809L5.78864 19.9097C5.63629 20.0187 5.43579 20.0335 5.26911 19.9479C5.10243 19.8624 4.99754 19.6909 4.99731 19.5035Z'
                stroke='#1F2937'
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
    HideEye,
    Home,
    ToggleAudio,
    ToggleVideo,
    PauseAudio,
    Profile,
    Search,
    Upload,
    Logout,
    Microphone,
    Camera,
    Photo,
    CheckMark,
    DeleteMark,
    Bookmark
};
