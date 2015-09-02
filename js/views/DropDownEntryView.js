var DropDownEntryView = Backbone.View.extend({
  tagName: 'option',
  className: 'selector',

  template: _.template('<%= rating %>'),
  
  render : function(){
    return this.$el.html(this.template(this.model.attributes));

  }
});