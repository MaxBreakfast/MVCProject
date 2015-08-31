var ImageModel = Backbone.Model.extend({

  defaults:{
    name: '',
    rating: '',
    fileName: ''
  },
  show: function(){
    this.trigger('show', this)
  }
})