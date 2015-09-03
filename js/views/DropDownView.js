var DropDownView = Backbone.View.extend({
  tagName: 'select',

  doSomething: function(){
    var ind = this.$el[0].selectedIndex;
    this.collection.models[ind].update();

    // console.log(this.collection);
  },
  initialize: function() {
    this.render();
  },

  events:{
    'change':'doSomething'
  },



  render: function() {
    this.$el.children().detach();
    this.$el.append(
      this.collection.map(function(rating){
        return new DropDownEntryView({model: rating}).render();
      })
    );
  }

});
