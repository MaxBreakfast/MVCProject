var DropDownView = Backbone.View.extend({
  tagName: 'select',

  doSomething: function(){
    var arg = arguments[0].target;
    console.log('heard change', arg);
  },
  initialize: function() {
    this.$el.on('change', this.doSomething);
    this.render();
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
