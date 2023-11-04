import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import style from './../../HW11.module.css';

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            classes={{
                  thumb: `${style.customThumb}`,
                  track: `${style.customTrack}`,
                  rail: `${style.customRail}`,
                }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
