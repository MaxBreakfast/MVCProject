var DisplayImage = ImageModel.extend({


    show: function(image) {
      this.attributes = image.attributes;
       this.trigger('display', this);
    },
    rate: function(rating){
      console.log(rating);
      this.attributes.rating = rating.attributes.rating;
      this.trigger('display', this);
    }


});