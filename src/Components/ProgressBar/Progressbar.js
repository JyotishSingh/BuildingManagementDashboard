import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Progressbar.css'

const Progressbar = ({ data }) => {
    const { name, value, unit, color, minValue, maxValue } = data;

    return (
        <>
            <div className="progress-bar">
                <h3>{name}</h3>
                <CircularProgressbar
                    value={value}
                    text={`${value}${unit}`}
                    minValue={minValue}
                    maxValue={maxValue}
                    styles={buildStyles({
                        textSize: '24px',
                        pathTransitionDuration: 0.5,
                        pathColor: color,
                        textColor: '#000',
                        trailColor: '#d6d6d6',
                        backgroundColor: 'rgba(255, 255, 0)',
                    })}
                />
            </div>
        </>
    )
}

export default Progressbar
