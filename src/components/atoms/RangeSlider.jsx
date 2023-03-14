import '../../styles/slider-thumb.css';

import { useState } from 'react';

const RangeSlider = ({ id, defaultValues = [25, 45] }) => {
    if (!id) throw new Error(`Props 'label' and 'id' are required`);

    const [min, setMin] = useState(defaultValues[0]);
    const [max, setMax] = useState(defaultValues[1]);

    const minValue = 18;
    const maxValue = 65;
    const minDistance = 1;

    const handleChange = ({ target }) => {
        if (max - min <= minDistance) {
            if (target.id === 'min') {
                if (target.value < max && target.value < min) {
                    setMin(target.value);
                } else {
                    setMin(max - minDistance);
                }
            }
            if (target.id === 'max') {
                if (target.value > max && target.value > min) {
                    setMax(target.value);
                } else {
                    setMax(min + minDistance);
                }
            }
        } else {
            target.id === 'min' ? setMin(Number(target.value)) : setMax(Number(target.value));
        }
    };

    const getLeft = () => {
        const base = ((min - minValue) * 100) / maxValue;
        const expr = ((minValue / 10) * 100) / maxValue;

        return base + expr * (base / 9);
    };

    const getRight = () => {
        const base = 100 - (max * 100) / maxValue;
        const expr = (100 * maxValue) / (100 * minValue);

        return base + expr * (base / 12);
    };

    return (
        <div className='flex flex-col gap-6'>
            <label className='text-sm font-semibold text-dark-grey-base relative top-2'>Età</label>
            <div className='flex relative font-semibold text-sm text-primary-base'>
                <p className='absolute' style={{ left: `${getLeft()}%` }}>
                    {min}
                </p>
                <p className='absolute' style={{ right: `${getRight()}%` }}>
                    {max}
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
                    value={min}
                    onChange={handleChange}
                />
                <input
                    id='max'
                    type='range'
                    className='range-max w-full h-2 absolute -top-8 pointer-events-none outline-none appearance-none bg-transparent'
                    min={minValue}
                    max={maxValue}
                    value={max}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default RangeSlider;
