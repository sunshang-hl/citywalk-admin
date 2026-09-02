import { AppRouteRecord } from '@/types/router'

/**
 * CityWalk 业务路由（示例模块：路线管理）
 *
 * 本文件位于 router/modules/citywalk/ 子目录，由 src/router/modules/index.ts
 * 的 import.meta.glob 自动注册，无需修改任何公共文件。
 * 新增 citywalk 业务模块时，在 api/views/router/overlay 各层按模块名新增文件即可。
 */
export const citywalkRoutes: AppRouteRecord = {
  path: '/citywalk',
  name: 'Citywalk',
  component: '/index/index',
  meta: {
    title: 'menus.citywalk.title',
    icon: 'ri:map-2-line',
    roles: ['role_super_admin', 'tenant_admin']
  },
  children: [
    {
      path: 'route',
      name: 'CitywalkRoute',
      component: '/citywalk/route',
      meta: {
        title: 'menus.citywalk.route',
        keepAlive: true,
        roles: ['role_super_admin', 'tenant_admin']
      }
    }
  ]
}
