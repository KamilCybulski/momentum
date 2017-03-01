import React, { Component } from 'react';
import './settings.css';
import User from './user';
import Switch from './switch';
//import cog from '../Images/settings.png';



export default class Settings extends Component {
  render() {
    return (
      <div className="settings">
        <div id="settingcog">bob</div>
        <div className="settingGroups">
          <div>General</div>
          <div>ToDo</div>
          <div>Background</div>
          <div>Quotes</div>
        </div>
        <div className="setGeneral">
          <User />
          <div className="onOff">
            <div className="miniTitle underline">Widgets</div>
            <Switch item={'Weather'} />
            <Switch item={"Clock"} />
            <Switch item={"Focus"} />
            <Switch item={"Todo"} />
          </div>
        </div>
        <div className="setTodo">
        </div>
        <div className="setBackground">
        </div>
        <div className="setQuotes">
        </div>
      </div>
    );
  }
}
