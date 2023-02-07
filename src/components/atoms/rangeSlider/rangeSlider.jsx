import './rangeSlider.css';

import { useState } from 'react';

const RangeSliderComponent = ({
    label,
    id,
    defaultValues = [15, 70],
    minValue = 15,
    maxValue = 70,
    minDistance = 1,
    disabled
}) => {
    if (!label || !id) throw new Error(`Props 'label' and 'id' are required`);

    if (minValue >= maxValue) throw new Error(`Prop 'minValue' must be less than 'maxValue'`);

    if (defaultValues.some((val) => val < minValue || val > maxValue))
        throw new Error(
            `Prop 'defaultValues' must contain 2 numbers between 'minValue' and 'maxValue'`
        );

    const [values, setValues] = useState({ min: defaultValues[0], max: defaultValues[1] });

    const handleChange = ({ target }) => {
        if (values.max - values.min <= minDistance ) {
            if(target.id === 'min'){
                if(target.value < values.max && target.value < values.min){
                    setValues({...values,[target.id]: target.value});
                }else{
                    setValues({...values,[target.id]: values.max - minDistance});
                }
            }
            if(target.id === 'max'){
                if(target.value > values.max && target.value > values.min){
                    setValues({...values,[target.id]: target.value});
                }else{
                    setValues({...values,[target.id]: values.min + minDistance});
                }
            }
            //&& (target.value < values.max && target.value > values.min)
            // setValues({...values,
            //     [target.id]:target.id === 'min' ? Number(values.max - minDistance) : Number(values.min + minDistance)
            // });
        } else {
            setValues({...values,[target.id]: Number(target.value)
            });
        }
    };

    return (
        <div className='slider-wrapper'>
            <div className='slider'>
                <div
                    className='track'
                    style={{
                        left: `${((values.min - minValue) / 100) * 100}%`, // 0 -> 100
                        right: `${100 - (values.max / maxValue) * 100}%` // 
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
                    value={values.min}
                    onChange={handleChange}
                />
                <input
                    id='max'
                    type='range'
                    className='range-max'
                    min={minValue}
                    max={maxValue}
                    value={values.max}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default RangeSliderComponent;
