var ImageListView = Backbone.View.extend({
  tagName:'table',
  template: _.template('<tr><td><%= name %></td></tr>'),
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.children().detach();
    var that= this;
    this.collection.each(function(image){
      console.log(image);
    })
  }
})