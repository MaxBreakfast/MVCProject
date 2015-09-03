var AppModel = Backbone.Model.extend({
  initialize: function(params) {
    this.set('imageList', new ImageList());
    this.set('displayImage', new DisplayImage());
    this.set('ratingList', new DropDownList());

    params.ratings.on('update', function(rating) {
      this.get('displayImage').rate(rating);
    }, this);

    params.images.on('show', function(image) {
      this.get('displayImage').show(image);
    }, this);

  }
});
