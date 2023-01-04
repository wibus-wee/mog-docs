/*
 * @FilePath: /mog-docs/src/.vitepress/plugins/navbar.ts
 * @author: Wibus
 * @Date: 2022-10-05 21:24:06
 * @LastEditors: Wibus
 * @LastEditTime: 2022-10-23 21:52:57
 * Coding With IU
 */
import type { Plugin } from 'vite'

// Due to https://github.com/vuejs/theme/commit/842e4451fbf13925d1c67aa4274f86fc5a8510f7
export function NavbarFix(): Plugin {
  return {
    name: 'navbar-fix',
    enforce: 'pre',
    transform(code, id) {
      if (id.includes('VPNavBarTitle.vue') && !id.endsWith('.css')) {
        return `
<template>
  <a class="VPNavBarTitle" href="/" target="_blank">
<svg width="45px" height="25px" id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500"><defs>
<linearGradient id="未命名的渐变_586" y1="250" x2="500" y2="250" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9fd9f6"/><stop offset="1" stop-color="#fcdfb5"/></linearGradient></defs><rect id="矩形" class="cls-1" width="500" height="500" rx="105"/><rect id="矩形-2" data-name="矩形" class="cls-2" x="30.73" y="30.73" width="438.54" height="438.54" rx="92.09"/><g class="cls-3"><path id="矩形-3" data-name="矩形" class="cls-4" d="M101.81,93.63h74.25a11.77,11.77,0,0,1,12,11.5h0a11.77,11.77,0,0,1-12,11.5H101.81a11.78,11.78,0,0,1-12-11.5h0A11.78,11.78,0,0,1,101.81,93.63Z"/><path id="矩形备份-4" class="cls-4" d="M213.66,93.63h74.25a11.77,11.77,0,0,1,12,11.5h0a11.77,11.77,0,0,1-12,11.5H213.66a11.77,11.77,0,0,1-12-11.5h0A11.77,11.77,0,0,1,213.66,93.63Z"/><path id="矩形备份-6" class="cls-4" d="M325.5,93.63h74.25a11.77,11.77,0,0,1,12,11.5h0a11.77,11.77,0,0,1-12,11.5H325.5a11.77,11.77,0,0,1-12-11.5h0A11.77,11.77,0,0,1,325.5,93.63Z"/><path id="矩形-4" data-name="矩形" class="cls-4" d="M114.13,274.72h69.2a11.35,11.35,0,0,1,11.21,11.5h0a11.35,11.35,0,0,1-11.21,11.5h-69.2a11.36,11.36,0,0,1-11.21-11.5h0A11.36,11.36,0,0,1,114.13,274.72Z"/><path id="矩形备份-4-2" data-name="矩形备份-4" class="cls-4" d="M217,274.72h69.2a11.36,11.36,0,0,1,11.21,11.5h0a11.36,11.36,0,0,1-11.21,11.5H217a11.36,11.36,0,0,1-11.21-11.5h0A11.36,11.36,0,0,1,217,274.72Z"/><path id="矩形备份-6-2" data-name="矩形备份-6" class="cls-4" d="M319.79,274.72H389a11.36,11.36,0,0,1,11.21,11.5h0A11.36,11.36,0,0,1,389,297.72h-69.2a11.36,11.36,0,0,1-11.21-11.5h0A11.36,11.36,0,0,1,319.79,274.72Z"/><path id="矩形备份-5" class="cls-4" d="M277.94,129.84h85a11.5,11.5,0,0,1,11.5,11.5h0a11.5,11.5,0,0,1-11.5,11.5h-85a11.5,11.5,0,0,1-11.5-11.5h0A11.5,11.5,0,0,1,277.94,129.84Z"/><path id="矩形备份-2" class="cls-4" d="M146.44,129.84h101a11.5,11.5,0,0,1,11.5,11.5h0a11.5,11.5,0,0,1-11.5,11.5h-101a11.5,11.5,0,0,1-11.5-11.5h0A11.5,11.5,0,0,1,146.44,129.84Z"/><path id="矩形备份-3" class="cls-4" d="M123.91,166.06h260a11.5,11.5,0,0,1,11.5,11.5h0a11.5,11.5,0,0,1-11.5,11.5h-260a11.5,11.5,0,0,1-11.5-11.5h0A11.5,11.5,0,0,1,123.91,166.06Z"/><path id="矩形备份-3-2" data-name="矩形备份-3" class="cls-4" d="M123.12,347.16h260a11.49,11.49,0,0,1,11.5,11.5h0a11.5,11.5,0,0,1-11.5,11.5h-260a11.5,11.5,0,0,1-11.5-11.5h0A11.5,11.5,0,0,1,123.12,347.16Z"/><path id="矩形备份-7" class="cls-4" d="M104.69,202.28h137c5.76,0,10.44,5.15,10.44,11.5h0c0,6.35-4.68,11.5-10.44,11.5h-137c-5.77,0-10.44-5.15-10.44-11.5h0C94.25,207.43,98.92,202.28,104.69,202.28Z"/><path id="矩形备份-8" class="cls-4" d="M270.77,202.28h137c5.77,0,10.44,5.15,10.44,11.5h0c0,6.35-4.67,11.5-10.44,11.5h-137c-5.76,0-10.44-5.15-10.44-11.5h0C260.33,207.43,265,202.28,270.77,202.28Z"/><path id="矩形备份-12" class="cls-4" d="M155.72,310.94h64a11.5,11.5,0,0,1,11.5,11.5h0a11.5,11.5,0,0,1-11.5,11.5h-64a11.5,11.5,0,0,1-11.5-11.5h0A11.5,11.5,0,0,1,155.72,310.94Z"/><path id="矩形备份-16" class="cls-4" d="M254.22,310.94h101a11.5,11.5,0,0,1,11.5,11.5h0a11.5,11.5,0,0,1-11.5,11.5h-101a11.5,11.5,0,0,1-11.5-11.5h0A11.5,11.5,0,0,1,254.22,310.94Z"/><path id="矩形备份-15" class="cls-4" d="M303.08,383.37H407.35c6,0,10.9,5.15,10.9,11.5h0c0,6.35-4.88,11.5-10.9,11.5H303.08c-6,0-10.9-5.15-10.9-11.5h0C292.18,388.52,297.06,383.37,303.08,383.37Z"/><path id="矩形备份-14" class="cls-4" d="M92.65,383.37H269.91c6,0,10.9,5.15,10.9,11.5h0c0,6.35-4.88,11.5-10.9,11.5H92.65c-6,0-10.9-5.15-10.9-11.5h0C81.75,388.52,86.63,383.37,92.65,383.37Z"/><path id="矩形备份-9" class="cls-4" d="M114.05,238.5H255.87c6,0,10.8,5.15,10.8,11.5h0c0,6.35-4.84,11.5-10.8,11.5H114.05c-6,0-10.8-5.15-10.8-11.5h0C103.25,243.65,108.09,238.5,114.05,238.5Z"/><path id="矩形备份-10" class="cls-4" d="M287.33,238.5h103.3c6,0,10.8,5.15,10.8,11.5h0c0,6.35-4.83,11.5-10.8,11.5H287.33c-6,0-10.8-5.15-10.8-11.5h0C276.53,243.65,281.36,238.5,287.33,238.5Z"/></g><g id="T"><path id="路径" class="cls-5" d="M314.14,131.46A20.55,20.55,0,0,1,328,136.32c3.86,3.33,6.12,8,6.12,14.46,0,7.71-3,12.45-7.65,15.22a23.67,23.67,0,0,1-12.35,3.46H270v178.8c0,6.46-1.66,11.1-4.21,14.27-2.71,3.39-7.57,6-15.79,6s-13.17-2.73-15.9-6.31c-2.53-3.31-4.1-7.89-4.1-14h0V169.46H185.86c-5.83,0-10.32-1.53-13.68-4.09-3.73-2.84-6.32-7.51-6.32-14.91,0-7,2.51-11.68,6.44-14.72a21.54,21.54,0,0,1,13.56-4.28H314.14Z"/></g></svg>
    <span class="text">Mog</span>
  </a>
</template>

<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
}
.VPNavBarTitle:hover {
  opacity: 0.6;
}
.logo {
  position: relative;
}
.logo + .text {
  padding-left: 8px;
}
.text {
  font-size: 16px;
  font-weight: 500;
}
</style>
      `
      }
    },
  }
}