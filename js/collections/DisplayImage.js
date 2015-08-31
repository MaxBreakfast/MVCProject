var DisplayImage = ImageList.extend({
    initialize: function() {
      },

    show: function(image) {
      console.log(this);
       this.trigger('display', this)
    }
})
