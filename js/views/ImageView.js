var ImageView = Backbone.View.extend({


  template: _.template('<td><img src="<%= fileName %>"></td><td><%= name %>: <%= rating %></td>'),

initialize: function(){
  this.collection.on('display', this.render, this);
},

  render: function(){
    return this.$el.html(this.template(this.collection.attributes))
  }
})