import React from 'react'
import Progressbar from '../ProgressBar/Progressbar';
import ScheduleContainer from '../Schedule/ScheduleContainer';

const Room = ({ data: { params, events } }) => {
    return (
        <>
            <div className='progress-bar-container'>
                {params.map((param, i) => <Progressbar key={i} data={param} />)}
            </div>
            <div>
                <ScheduleContainer events={events} />
            </div>
        </>
    )
}

export default Room