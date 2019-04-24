function pointerToString(pointer) {
  return pointer && Module.UTF8ToString(pointer, 1024) || null;
}