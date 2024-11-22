function home_page_open() {
  var win = TWindow.open('home_page');
  var close = win.lookup("close", true);

  close.on(TEventType.CLICK, function(evt) {
    var e = TPointerEvent.cast(evt);
    var target = TButton.cast(e.target);

    console.log("click at " + e.x + " " + e.y + " on " + target.name);
    console.log("global: " + TGlobal.getPointerX() + " " + TGlobal.getPointerY() + " " + TGlobal.isPointerPressed());
    return TRet.OK;
  });
  
  win.layout();
}



