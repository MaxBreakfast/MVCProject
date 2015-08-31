var AppModel = Backbone.Model.extend({
  initialize: function(params){
    this.set('imageList', new ImageList());
    this.set('displayImage', new DisplayImage())


    params.images.on('show', function(image){
      this.get('displayImage').show(image);
    }, this)

  }
})