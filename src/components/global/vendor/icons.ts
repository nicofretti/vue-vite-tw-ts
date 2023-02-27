import { Moon, Sun, SignOutAlt } from '@vicons/fa'
import { App, Component } from 'vue'

const icons: Record<string, Component> = {
  Moon,
  Sun,
  SignOutAlt
}

export default {
  install(app: App) {
    for (const [name, component] of Object.entries(icons))
      app.component(name, component)
  }
}
