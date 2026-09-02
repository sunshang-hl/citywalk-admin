<template>
  <div class="citywalk-route-page art-full-height">
    <ElCard class="art-table-card">
      <template #header>
        <div class="flex items-center gap-2">
          <ElIcon><MapPin /></ElIcon>
          <span>{{ $t('menus.citywalk.route') }}</span>
        </div>
      </template>
      <ElEmpty
        description="示例模块：路线管理页面占位。请按 README 中的模块组织约定开发业务功能。"
      />
    </ElCard>
  </div>
</template>

<script setup lang="ts">
  import { MapPin } from '@element-plus/icons-vue'
</script>
