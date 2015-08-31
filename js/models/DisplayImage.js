var DisplayImage = ImageModel.extend({
      initialize: function() {
      },

    show: function(image) {
      console.log(this.attributes = image)
       this.trigger('display', this)
    }

})