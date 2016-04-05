import BaseView from './base-view';
import IndexCSS from '../css/index.sass';
import React from 'react';
import ReactDOM from 'react-dom';

class Content extends React.Component {
  render() {
    return (
      <div>
        <span id="event" className={IndexCSS.green}>Welcome!</span> You are now ready to start building your application.
      </div>
    );
  }
}

class IndexView extends BaseView {
  constructor(options) {
    super(options);
    this.template = require('../jade/index.jade');
    this.events = {
      "click #event": "clickEvent",
    };
  }
  clickEvent() {
    console.log('event triggered');
  }
  render() {
    var view = this;
    BaseView.prototype.render.apply(this, arguments).then(() => {
      var target = view.$el.find('#content')[0];
      ReactDOM.render(<Content />, target);
    });
  }
}

module.exports = IndexView;