var DropDownModel = Backbone.Model.extend({

  defaults: {
    rating: ''
  },
  update: function(){
    this.trigger('update', this);
  }
});
