var Backbone = require('backbone');

var BaseView = Backbone.View.extend({
  // model and collection binding
  setupModel: function(model) {
    this.model = model;
    return this;
  },
  setupCollection: function(collection) {
    this.collection = collection;
  },
  getModel: function() {
    return this.model;
  },
  getCollection: function() {
    return this.collection;
  },
  // render functions
  getRenderData: function() {
    return {};
  },
  render: function(render_data) {
    var view = this;
    var promise_or_json = render_data || this.getRenderData();
    // some magic to ensure json responses and promises
    // are both handled equally
    return Promise.resolve(promise_or_json).then(function(template_data) {
      view.$el.html(view.template(template_data));
      return view;
    });
  },
  empty: function() {
    this.undelegateEvents();
    this.$el.empty();
    this.stopListening();
    return this;
  },
});

module.exports = BaseView;
