App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about');
  this.route('credits', { path: '/thanks' });
  this.resource('products');
});

App.IndexController = Ember.Controller.extend({
  productsCount: 3,
  logo: 'images/logo-small.png',
  time: function(){
    return (new Date()).toDateString();
  }.property()
});

App.AboutController = Ember.Controller.extend({
  contactName: 'Corey',
  avatar: 'images/avatar.png',
  open: function() {
    var day = (new Date().getDay());
    if ( day !== 0 ) {
      return 'Open';
    } else {
      return 'Closed';
    }
  }.property()
});

App.ProductsRoute = Ember.Route.extend({
  model: function() {
    return App.PRODUCTS;
  }
});

App.PRODUCTS = [
  {
    title: 'Flint',
    price: 3,
    description: 'Flint is...',
    isOnSale: true,
    image: 'images/products/flint.png'
  },
  {
    title: 'Kindling',
    price: 2,
    description: 'Kindling is...',
    isOnSale: false,
    image: 'images/products/kindling.png'
  }
]
