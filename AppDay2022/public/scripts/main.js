var socket = io();
$('#form').submit(function () {
    var message = $('#input').val();
    if (message) {
    socket.emit('chat message', {user:$("#name").val(), msg:message});
    $("#input").val("");
    }
    return false;
    })

socket.on('chat message', function(msg){
    console.log(msg)
    $('#messages').append("<li>"+msg.user + " : " + msg.message+"</li>");
    window.scrollTo(0, document.body.scrollHeight);
});