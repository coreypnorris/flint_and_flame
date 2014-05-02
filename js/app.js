App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about');
  this.route('credits', { path: '/thanks' });
});

App.IndexController = Ember.Controller.extend({
  productsCount: 3,
  logo: 'images/logo-small.png',
  time: function(){
    return (new Date()).toDateString();
  }.property()
});
