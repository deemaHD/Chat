var MessageView = Backbone.View.extend({
    template: _.template(messageTmp),
    
    render: function (message) {
        this.$el.html(this.template(message));
        return this;
    }
});