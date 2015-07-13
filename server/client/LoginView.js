var LoginView = Backbone.View.extend({
    tagName: 'div',
    className: 'login',
    template: _.template(loginTmp),
    
    render: function () {
        this.$el.append(this.template());
        return this;
    }
});