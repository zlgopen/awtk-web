# AWTK 应用程序

C 语言开发的 AWTK 示例程序，用于生成 WEB 应用程序。

用于演示 mutable 图片的使用方法。

注意：
  * 从资源管理器中获取的图片是非 mutable 的，其对应浏览器中 Image 对象。
  * 通过 bitmap_create_ex 创建的是 mutable 的，其对应浏览器中 Canvas 对象，如果要显示到界面上，只能使用 RGBA8888 的格式。
  * 可以用 image\_blend 将非 mutable 的图片，绘制到 mutable 的的图片上。

```c
/**
 * @method image_blend
 * 把图片指定的区域渲染到framebuffer指定的区域，src的大小和dst的大小不一致则进行缩放。
 *
 * @param {bitmap_t*} dst 目标图片对象。
 * @param {bitmap_t*} src 源图片对象。
 * @param {const rectf_t*} dst_r 目的区域。
 * @param {const rectf_t*} src_r 源区域。
 * @param {uint8_t} global_alpha 全局alpha。
 *
 * @return {ret_t} 返回RET_OK表示成功，否则表示失败，返回失败则上层用软件实现。
 */
ret_t image_blend(bitmap_t* dst, bitmap_t* src, const rectf_t* dst_r, const rectf_t* src_r,
                  uint8_t global_alpha);
```                  