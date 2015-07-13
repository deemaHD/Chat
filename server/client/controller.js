function Controller () {
    var socket,
        userName = '',
        dropDownList,
        data,
        time;

    if (userName === '') {
        renderLoginForm();
    }
    
    function renderLoginForm () {
        socket = new WebSocket("ws://localhost:8889");
        var loginView = new LoginView();
        $('body').html(loginView.render().$el);
        $('#enterChat').on('click', function () {
            userName = $('#userName').val();
            if (userName !== '') {
                startChat();
            }
        });
    }

    function startChat () {
        var chatView = new ChatView();
        $('body').html(chatView.render().$el);
        dropDownList = new DropDownListView({el: '.panel-heading'});
        dropDownList.render(userName);
        $('#btn-chat').on('click', function () {
            var msg = $('#btn-input').val();
            time = new Date();
            data = {
                userName: userName,
                message: msg,
                time: time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
            };
            socket.send(JSON.stringify(data));
            $('#btn-input').val('');
        });

        socket.onmessage = function(event) {
            var msgView = new MessageView(),
                incomingJSON = JSON.parse(event.data),
                $el = msgView.render(incomingJSON).$el;
            $('.chat').append($el);
        };
    }
    
    mediator.subscribe('logOutPressed', function () {
        socket.close();
        renderLoginForm();
    });
}