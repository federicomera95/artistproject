import '../../styles/slider-thumb.css';

const RangeSlider = ({ rangeSliderProps }) => {
    const { id, val, change } = rangeSliderProps;

    if (!id) throw new Error(`Props 'label' and 'id' are required`);

    const minValue = 18;
    const maxValue = 65;
    const minDistance = 1;

    const getLeft = () => {
        const base = ((val[0] - minValue) * 100) / maxValue;
        const expr = ((minValue / 10) * 100) / maxValue;

        return base + expr * (base / 9);
    };

    const getRight = () => {
        const base = 100 - (val[1] * 100) / maxValue;
        const expr = (100 * maxValue) / (100 * minValue);

        return base + expr * (base / 12);
    };

    return (
        <div className='flex flex-col gap-6'>
            <label className='text-sm font-semibold text-dark-grey-base relative top-2'>Età</label>
            <div className='flex relative font-semibold text-sm text-primary-base'>
                <p className='absolute' style={{ left: `${getLeft()}%` }}>
                    {val[0]}
                </p>
                <p className='absolute' style={{ right: `${getRight()}%` }}>
                    {val[1]}
                </p>
            </div>
            <div className='slider h-2 relative bg-primary-disabled rounded-[30px]'>
                <div
                    className='h-full absolute bg-primary-base  rounded-[30px]'
                    style={{
                        left: `${getLeft()}%`,
                        right: `${getRight()}%`
                    }}
                ></div>
            </div>
            <div className='range-input relative'>
                <input
                    id='min'
                    type='range'
                    className='range-min w-full h-2 absolute -top-8 pointer-events-none outline-none appearance-none bg-transparent'
                    min={minValue}
                    max={maxValue}
                    value={val[0]}
                    onChange={(e) => change(e, id, minDistance)}
                />
                <input
                    id='max'
                    type='range'
                    className='range-max w-full h-2 absolute -top-8 pointer-events-none outline-none appearance-none bg-transparent'
                    min={minValue}
                    max={maxValue}
                    value={val[1]}
                    onChange={(e) => change(e, id, minDistance)}
                />
            </div>
        </div>
    );
};

export default RangeSlider;
