<template>
  <n-config-provider data-cy="app" :theme="theme" :class="{ dark: mode }">
    <n-layout position="absolute">
      <n-layout-header class="py-2" bordered>
        <div class="flex justify-between items-center px-2">
          <n-h2 class="my-auto">Vue-BoilerPlate</n-h2>
          <div class="flex items-center space-x-4">
            <n-switch data-cy="dark-mode" v-model:value="mode">
              <template #checked> Dark</template>
              <template #unchecked> Light</template>
              <template #checked-icon>
                <n-icon>
                  <moon/>
                </n-icon>
              </template>
              <template #unchecked-icon>
                <n-icon>
                  <sun/>
                </n-icon>
              </template>
            </n-switch>
            <n-button>
              <template #icon>
                <n-icon>
                  <sign-out-alt/>
                </n-icon>
              </template>
              Logout
            </n-button>
          </div>
        </div>
      </n-layout-header>
    </n-layout>
  </n-config-provider>
</template>

<script setup lang="ts">
import {darkTheme, lightTheme} from 'naive-ui'
import {computed, ref, watchEffect, h} from 'vue'

const darkStore = localStorage.getItem('dark')
const prefersDark: boolean = darkStore
    ? darkStore === 'true'
    : window.matchMedia('(prefers-color-scheme: dark)').matches

const mode = ref<boolean>(prefersDark)
const theme = computed(() => (mode.value ? darkTheme : lightTheme))

watchEffect(() => {
  localStorage.setItem('dark', `${mode.value}`)
});
</script>
