var DropDownEntryView = Backbone.View.extend({
  tagName: 'option',
  className: 'selector',

  template: _.template('<%= rating %>'),

  initialize: function(){
    this.$el.on('select', this.doSomeStuff)
  },

  events:{
    'change .selector': function(){
      console.log('test123')
      this.model.show();
    }
  },

  doSomeStuff: function(){
    console.log('test124')
  },
  
  render : function(){
    return this.$el.html(this.template(this.model.attributes))

  }
})