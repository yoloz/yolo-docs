## npm-check-updates

npm 中有一个插件 npm-check-updates,该插件可以帮我们一键升级

1. 安装该插件`npm install -g npm-check-updates`;
2. 在有`package.json`的目录执行`npm-check-updates`或者 `ncu`简写命令检查是否有更新（该插件会去 npm 官网查询是否有最新版本），如果有的话会列出列表;
3. 执行`ncu -u`会发现package.json里面的依赖版本号已经变成最新版本;
4. 然后执行`npm install`即可；

## npm
* 执行`npm outdated`列出依赖的版本信息，如下：
```log
Package                           Current   Wanted  Latest  Location                                       Depended by
@types/node                       17.0.45  17.0.45  20.8.6  node_modules/@types/node                       test
@typescript-eslint/eslint-plugin   5.62.0   5.62.0   6.8.0  node_modules/@typescript-eslint/eslint-plugin  test
@typescript-eslint/parser          5.62.0   5.62.0   6.8.0  node_modules/@typescript-eslint/parser         test
@vitejs/plugin-vue                  2.3.4    2.3.4   4.4.0  node_modules/@vitejs/plugin-vue                test
@vueuse/core                       9.13.0   9.13.0  10.5.0  node_modules/@vueuse/core                      test
eslint-plugin-n                    15.7.0   15.7.0  16.2.0  node_modules/eslint-plugin-n                   test
eslint-plugin-vue                   8.7.1    8.7.1  9.17.0  node_modules/eslint-plugin-vue                 test
lint-staged                        13.3.0   13.3.0  15.0.1  node_modules/lint-staged                       test
typescript                          4.9.5    4.9.5   5.2.2  node_modules/typescript                        test
vite                               2.9.16   2.9.16  4.4.11  node_modules/vite                              test
vite-plugin-dts                    0.9.10   0.9.10   3.6.0  node_modules/vite-plugin-dts                   test
websocket-ts                        1.1.1    1.1.1   2.1.5  node_modules/websocket-ts                      test
```
然后手动更新`package.json`文件，或者直接`npm update`批量更新