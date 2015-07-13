var DropDownListView = Backbone.View.extend({
    template: _.template(dropDownListTmp),
    
    events: {
        'click .logOut': 'logOut'
    },
    
    logOut: function () {
        mediator.publish('logOutPressed');    
    },
    
    render: function (name) {
        this.$el.append(this.template({userName: name}));
    }
});