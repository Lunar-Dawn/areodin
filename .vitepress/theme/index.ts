import DefaultTheme from 'vitepress/theme'

import InfoBox from './InfoBox.vue'

import './custom.scss'

export default {
    extends: DefaultTheme,
    
    enhanceApp(ctx) {
        ctx.app.component('InfoBox', InfoBox)
    }
}
