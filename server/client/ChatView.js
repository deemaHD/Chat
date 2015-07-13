var ChatView = Backbone.View.extend({
    tagName: 'div',
    className: 'container',
    
    template: _.template(chatViewTmp),
    
    events: {
        'click #dropDownList': 'eventHandler'
    },
    
    eventHandler: function () {
        $('.menu').toggleClass('hiden');    
    },
    
    render: function () {
        this.$el.append(this.template());
        return this;
    }
});