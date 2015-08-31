var ImageView = Backbone.View.extend({


  template: _.template('<tr><td><img src="<%= fileName %>"></td></tr><tr><td><%= rating %></td</tr>'),

initialize: function(){
  this.collection.on('display', this.render, this);
},

  render: function(){
    console.log(this.collection)
    return this.$el.html(this.template(this.model.attributes))
  }
})