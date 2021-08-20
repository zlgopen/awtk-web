node gen_c.js
node gen_export.js
cp -vf ../../../awtk-binding/tools/code_gen/js/output/awtk_api.ts ../../gen/ts
cd ../../gen/ts && tsc && cd -
