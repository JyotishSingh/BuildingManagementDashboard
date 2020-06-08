import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Components/Navigation/Sidebar';
import HomeIcon from '@material-ui/icons/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Room from './Components/Room/Room';

const App = () => {
  const [path, setPath] = useState('New');

  const data = [
    {
      name: 'Building',
      floors: [
        {
          name: "Floor1",
          rooms: [
            {
              name: 'Room1',
              params: [
                {
                  name: "Temparature",
                  value: 23,
                  unit: '\u00b0',
                  color: '#ff2a79',
                  minValue: 1,
                  maxValue: 35
                },
                {
                  name: "Humidity",
                  value: 40,
                  unit: '%',
                  color: '#29bae9',
                  minValue: 1,
                  maxValue: 100
                }
              ],
              events: [
                {
                  id: 1,
                  name: 'Temperature',
                  value: 25,
                  time: '5:30',
                  unit: 'C'
                },
                {
                  id: 2,
                  name: 'Humidity',
                  value: 50,
                  time: '10:00',
                  unit: '%'
                }
              ]
            },
            {
              name: 'Room2',
              params: [
                {
                  name: "Temparature",
                  value: 15,
                  unit: '\u00b0',
                  color: '#ff2a79',
                  minValue: 1,
                  maxValue: 35
                },
                {
                  name: "Humidity",
                  value: 20,
                  unit: '%',
                  color: '#29bae9',
                  minValue: 1,
                  maxValue: 100
                }
              ],
              events: [
                {
                  id: 1,
                  name: 'Temperature',
                  value: 25,
                  time: '5:30',
                  unit: 'C'
                },
                {
                  id: 2,
                  name: 'Humidity',
                  value: 50,
                  time: '10:00',
                  unit: '%'
                }
              ]
            }
          ]
        }
      ]
    }
  ]

  const pathName = window.location.pathname;
  useEffect(() => {
    const pathArr = pathName.split('/').join('->');
    setPath(pathArr)
  }, [pathName]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          Building Management Dashboard
      </header>
        <div className='path'>{path}</div>
      </div>
      <div className="nav-top">
        <span ><HomeIcon /></span> SmartHouse
      </div>
      <Sidebar data={data} />

      <Router>
        <Switch>
          {
            data.map(b => b.floors.map(f => f.rooms.map(r => {
              return <Route exact path={`/${b.name}/${f.name}/${r.name}`} component={() => <Room data={r} />} />
            }
            )))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
