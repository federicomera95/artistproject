import './rangeSlider.css';

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
        <div className='slider-wrapper'>
            <label className='text-sm font-semibold text-dark-grey-base relative bottom-7'>
                Età
            </label>
            <div className='flex relative font-semibold text-sm text-primary-base'>
                <p className='absolute bottom-2' style={{ left: `${getLeft()}%` }}>
                    {min}
                </p>
                <p className='absolute bottom-2' style={{ right: `${getRight()}%` }}>
                    {max}
                </p>
            </div>
            <div className='slider'>
                <div
                    className='track'
                    style={{
                        left: `${getLeft()}%`,
                        right: `${getRight()}%`
                    }}
                ></div>
            </div>
            <div className='range-input'>
                <input
                    id='min'
                    type='range'
                    className='range-min'
                    min={minValue}
                    max={maxValue}
                    value={min}
                    onChange={handleChange}
                />
                <input
                    id='max'
                    type='range'
                    className='range-max'
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
