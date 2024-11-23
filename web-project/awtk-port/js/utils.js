function pointerToString(pointer) {
  return pointer && Module.UTF8ToString(pointer, 1024) || null;
}

function wstrToString(pointer) {
  return pointer && Module.UTF32ToString(pointer) || null;
}

window.wstrToString = wstrToString;
window.pointerToString = pointerToString;

