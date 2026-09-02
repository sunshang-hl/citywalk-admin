/**
 * CityWalk 路线模块 API（示例）
 *
 * citywalk 业务 API 按模块拆分：每个模块一个文件（src/api/citywalk/<module>.ts），
 * 统一从 '../request' 导入 postRpc / getView / getViewPage 等请求封装。
 * 后端视图/RPC 就绪后，参考 src/api/dict.ts 的写法补充接口。
 *
 * 开发/测试阶段与 OmniAdmin 共用同一套 OmniPG 后端（见 .env.development 头部注释）；
 * 正式上线前切换 citywalk 独立 API 地址即可，接口层代码无需变动。
 */
export const CITYWALK_ROUTE_MODULE_READY = false
