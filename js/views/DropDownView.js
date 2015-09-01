var DropDownView = Backbone.View.extend({
  tagName: 'select',
  id: 'ratingSelector',

  doSomething: function(){
    console.log('test')
  },
  initialize: function() {
    this.$el.on('change', this.doSomething);
    this.render();
  },

   events:{
    'change .ratingSelector': 'doSomething'
  },



  render: function() {
    this.$el.children().detach();
    this.$el.append(
      this.collection.map(function(rating){
        return new DropDownEntryView({model: rating}).render();
      })
    )
  }

})
