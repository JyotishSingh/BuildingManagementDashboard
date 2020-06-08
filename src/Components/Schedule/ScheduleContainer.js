import React from 'react';
import ScheduleEvent from './ScheduleEvent';
import './Schedule.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function ScheduleContainer({ events }) {

    return (
        <>
            <div className="addIconHolder">
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </div>
            <div className="info-box-holder">
                <strong style={{ marginLeft: '6px' }}>Scheduled Events</strong>
                <ul>
                    {events.map((event, i) =>
                        <li key={event.id}>
                            <ScheduleEvent key={i} event={event} />
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}
