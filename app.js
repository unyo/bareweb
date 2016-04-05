var Backbone = require('backbone');

var IndexView = require('./views/index-view');

var Router = Backbone.Router.extend({
  el: "#main",
  routes: {
    "": "index",
  },
  index: function() {
    console.log('index view');
    var view = new IndexView();
    this.showView(view);
  },
  showView: function(view) {
    var router = this;
    if (this.current_view) {
      this.current_view.empty()
      this.current_view.unbind();
    }
    this.current_view = view;
    this.current_view.setElement(this.el);
    return Promise.resolve(this.current_view.render());
  },
});

// start the app
var initialize = function() {
  var App = new Router();
  Backbone.history.start({
    pushState: false,
  });
};

module.exports = initialize();