var ImageListView = Backbone.View.extend({
    tagName: 'table',
    
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.children().detach();
        this.$el.html('<th>images</th>').append(
            this.collection.map(function(song) {
              return new ImageItemView({model: song}).render();
            })
        );
    }
})
