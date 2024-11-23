function pointerToString(pointer) {
  return pointer && Module.UTF8ToString(pointer, 1024) || null;
}

function wstrToString(wcharPtr) {
  let str = "";
  let i = 0;
  while(true) {
    const wchar = Module.getValue(wcharPtr + i * 4, "i32");

    if (wchar) {
      str += String.fromCharCode(wchar);
      i++;
    } else {
      break;
    }
  }

  return str;
}

