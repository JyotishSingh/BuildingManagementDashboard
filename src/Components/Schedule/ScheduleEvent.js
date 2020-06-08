import React from 'react';
import './Schedule.css';
import { formatDate } from '../../utils/FormatDate';
import OpacityIcon from '@material-ui/icons/Opacity';
import { Icon } from '@iconify/react';
import thermometerIcon from '@iconify/icons-mdi/thermometer';

const ScheduleEvent = ({ event }) => {
    const currDate = formatDate(new Date());
    const { name, value, time, unit } = event;

    return (
        <>
            <div className='schedule'>
                <span className="icon">
                    {name === 'Temperature' ? <Icon icon={thermometerIcon} className='thermometer' /> : <OpacityIcon fontSize="large" />}
                </span>
                <ul>
                    <li>{currDate}</li>
                    <li>{`Set ${name} to ${value}${unit} at ${time}`}</li>
                </ul>
                <span>Cancel</span>
            </div>
        </>
    )
}

export default ScheduleEvent
