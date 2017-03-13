import React, { Component } from 'react';
import './App.css';
import ClockContainer from './components/clock/ClockContainer';
import GreetingContainer from './components/greeting/GreetingContainer';
import Settings from './components/Settings/settings.js';
import WeatherContainer from './components/weather/WeatherContainer';
import Todo from './components/todo/todo.js';
import Quotes from './components/quotes/quotes.js';


class App extends Component {
constructor(){
  super();
  this.state = {
    renderClock: true,
    renderWeather: true,
    renderTodo: true,
    renderGreeting: true,
    renderQuote: true
  }
}
  /*
  componentWillMount(){
    var num = 1;
    document.querySelector('screen').classList.add(`bgi${num}`);
  }
  */

  weatherSwitcher = () => {
    this.setState({
      renderWeather: !this.state.renderWeather
    })
  }

  clockSwitcher = () => {
    this.setState({
      renderClock: !this.state.renderClock
    })
  }

  todoSwitcher = () => {
    this.setState({
      renderTodo: !this.state.renderTodo
    })
  }

  greetingSwitcher = () => {
    this.setState({
      renderGreeting: !this.state.renderGreeting
    })
  }

  quoteSwitcher = () => {
    this.setState({
      renderQuote: !this.state.renderQuote
    })
  }


  render() {
    return (
      <div className="screen">
        {this.state.renderClock ? <ClockContainer /> : null}
        {this.state.renderWeather ? <WeatherContainer /> : <WeatherContainer hide={true} />}
        {this.state.renderTodo ? <Todo /> : null}
        {this.state.renderGreeting ? <GreetingContainer /> : null}
        <Settings weatherSwitcher={this.weatherSwitcher}
                  clockSwitcher={this.clockSwitcher}
                  todoSwitcher={this.todoSwitcher}
                  greetingSwitcher={this.greetingSwitcher}
                  quoteSwitcher={this.quoteSwitcher} />
        {this.state.renderQuote ? <Quotes /> : null}
      </div>
    );
  }
}

export default App;
