var AppView = Backbone.View.extend({
    el: '#app',
    initialize: function() {
        this.list = new ImageListView({
            collection: this.model.get('images')
        });
        this.image = new ImageView({
            collection: this.model.get('displayImage')
        });
        this.render();
    },

    render: function() {
        this.$el.append([
            this.list.$el,
            this.image.$el
        ]);
        
        return this;
    }
})
