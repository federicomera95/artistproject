const Chip = ({ text, active, callback }) => {
    return (
        <div className='inline-flex justify-center'>
            <span
                onClick={callback}
                className={`
                px-2 py-1 rounded-full font-medium text-[12px]
                flex align-center w-max cursor-pointer 
                active:bg-gray-300 transition duration-300 ease
                ${
                    active
                        ? 'text-white bg-primary-base'
                        : 'text-primary-base bg-primary-background'
                }`}
            >
                {text}
            </span>
        </div>
    );
};

export default Chip;
