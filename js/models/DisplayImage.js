var DisplayImage = ImageModel.extend({


    show: function(image) {
      this.attributes = image.attributes;
      console.log(this);
       this.trigger('display', this);
    }

});