import './rangeSlider.css';

import { useState } from 'react';

const RangeSliderComponent = ({
    label,
    id,
    defaultValues = [26, 48],
    minValue = 18,
    maxValue = 65,
    minDistance = 1,
    disabled
}) => {
    if (!label || !id) throw new Error(`Props 'label' and 'id' are required`);

    if (minValue >= maxValue) throw new Error(`Prop 'minValue' must be less than 'maxValue'`);

    if (defaultValues.some((val) => val < minValue || val > maxValue))
        throw new Error(
            `Prop 'defaultValues' must contain 2 numbers between 'minValue' and 'maxValue'`
        );

    const [min, setMin] = useState(defaultValues[0]);
    const [max, setMax] = useState(defaultValues[1]);

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
        let fixed = base;

        if (base <= 10) {
            fixed += expr * 1;
        } else if (base > 10 && base <= 20) {
            fixed += expr * 2.2;
        } else if (base > 20 && base <= 30) {
            fixed += expr * 3.4;
        } else if (base > 30 && base <= 40) {
            fixed += expr * 4.6;
        } else if (base > 40 && base <= 50) {
            fixed += expr * 5.8;
        } else if (base > 50 && base <= 60) {
            fixed += expr * 7;
        } else if (base > 60 && base <= 70) {
            fixed += expr * 8.2;
        } else if (base > 70 && base <= 80) {
            fixed += expr * 9.4;
        } else if (base > 80 && base <= 90) {
            fixed += expr * 10.6;
        } else if (base > 90 && base <= 100) {
            fixed += expr * 11.8;
        }
        return fixed;
    };

    const getRight = () => {
        const base = 100 - (max * 100) / maxValue;
        const expr = (100 * maxValue) / (100 * minValue);
        let fixed = base;

        if (base <= 10) {
            fixed += expr * 1;
        } else if (base > 10 && base <= 20) {
            fixed += expr * 2;
        } else if (base > 20 && base <= 30) {
            fixed += expr * 3;
        } else if (base > 30 && base <= 40) {
            fixed += expr * 4;
        } else if (base > 40 && base <= 50) {
            fixed += expr * 5;
        } else if (base > 50 && base <= 60) {
            fixed += expr * 6;
        } else if (base > 60 && base <= 70) {
            fixed += expr * 7;
        } else if (base > 70 && base <= 80) {
            fixed += expr * 8;
        } else if (base > 80 && base <= 90) {
            fixed += expr * 9;
        } else if (base > 90 && base <= 100) {
            fixed += expr * 10;
        }

        return fixed;
    };

    return (
        <div className='slider-wrapper'>
            <label className='text-sm font-semibold text-dark-grey-base relative bottom-6'>
                {label}
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

export default RangeSliderComponent;
