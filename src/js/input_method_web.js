function InputMethodWeb() {}

InputMethodWeb.init = function () {
  if (!InputMethodWeb.edit) {
    InputMethodWeb.edit = EditElement.create('input');
  }
}

InputMethodWeb.start = function (x, y, w, h) {
  InputMethodWeb.init();
  InputMethodWeb.edit.moveResize(x, y, w, h);
  InputMethodWeb.edit.setFontSize(18);
  InputMethodWeb.edit.show();

  EventsSource.fixPointerUp();
  console.log('InputMethodWeb.start');

  return true;
}

InputMethodWeb.initEdit = function (_text, _font, fontSize, _textColor, _bgColor) {
  let text = pointerToString(_text);
  let font = pointerToString(_font);
  let bgColor = pointerToString(_bgColor);
  let textColor = pointerToString(_textColor);

  InputMethodWeb.edit.setText(text || '');
  InputMethodWeb.edit.setFont(font);
  InputMethodWeb.edit.setBgColor(bgColor);
  InputMethodWeb.edit.setFontSize(fontSize);
  InputMethodWeb.edit.setTextColor(textColor);

  return true;
}

InputMethodWeb.stop = function () {
  let value = InputMethodWeb.edit.getText() || '';

  Awtk.onImCommit(value, 0);
  InputMethodWeb.edit.hide();
  console.log('InputMethodWeb.stop');

  return true;
}