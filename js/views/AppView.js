var AppView = Backbone.View.extend({
  el: '#app',
  initialize: function() {
    this.list = new ImageListView({
      collection: this.model.get('images')
    });
    this.image = new ImageView({
      collection: this.model.get('displayImage')
    });
    this.rating = new DropDownView({
      collection: this.model.get('ratings')
    });

    this.render();
  },

  render: function() {
    this.$el.append([
      this.list.$el,
      this.image.$el,
      this.rating.$el
    ]);

    return this;
  }
})
