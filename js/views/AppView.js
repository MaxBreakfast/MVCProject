var AppView = Backbone.View.extend({
    el: '#app',
    initialize: function() {
        this.list = new ImageListView({
            collection: this.collection
        })
        this.render();
    },

    render: function() {
        this.$el.append([
            this.list.$el
        ])
        return this;
    }
})
