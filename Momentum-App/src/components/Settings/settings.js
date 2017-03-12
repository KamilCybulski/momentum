import React, { Component } from 'react';
import './settings.css';
import User from './user';



export default class Settings extends Component {

  toggleSettings(){
    var settingsClass = document.querySelector(".settings").classList;
    settingsClass.toggle('hideSettings');
  }

  render() {
    return (
      <div>
        <div id="settingscog" onClick={this.toggleSettings.bind(this)} >
          <img id="cog" alt="settings" src="http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Settings-icon.png" />
        </div>
        <div className="settings hideSettings">
          <div className="settingGroups">
            <div>General</div>
            <div>ToDo</div>
            <div>Background</div>
            <div>Quotes</div>
          </div>
          <div className="setGeneral shown">
            <User />
            <div className="onOff">
              <div className="miniTitle"><strong>Widgets</strong></div>
              <div className="underline" />
              <button onClick={this.props.weatherSwitcher}>weather</button>
              <button onClick={this.props.clockSwitcher}>clock</button>
              <button onClick={this.props.greetingSwitcher}>greeting</button>
              <button onClick={this.props.quoteSwitcher}>quote</button>
              <button onClick={this.props.todoSwitcher}>todo</button>
            </div>
          </div>
          <div className="setTodo hidden">
          </div>
          <div className="setBackground hidden">
          </div>
          <div className="setQuotes hidden">
          </div>
        </div>
      </div>
    );
  }
}
