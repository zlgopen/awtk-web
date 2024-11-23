function home_page_open() {
  var win = TWindow.open("home_page");
  var send = win.lookup("send", true);
  var send_text = win.lookup("send_text", true);
  var recv_text = win.lookup("recv_text", true);
  const ws = new WebSocket("ws://localhost:8090");

  send.on(TEventType.CLICK, function (evt) {
    const message = send_text.getText();
    ws.send(message);
    return TRet.OK;
  });

  ws.onopen = () => {
    recv_text.setText("Connected to the server");
  };

  ws.onmessage = (event) => {
    recv_text.setText(event.data);
  };

  ws.onclose = () => {
    recv_text.setText("close");
  };

  win.layout();
}
