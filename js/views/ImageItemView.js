var ImageItemView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<tr><td><%= name %></td></tr>'),

  events:{
    'click': function(){
      this.model.show();
    }
  },
  
  render : function(){
    return this.$el.html(this.template(this.model.attributes))

  }
})