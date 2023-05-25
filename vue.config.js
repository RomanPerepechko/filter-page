const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
          scss: {
            additionalData: `@import "~@/assets/scss/common/texts.scss"; @import "~@/assets/scss/common/mixins.scss"; @import "~@/assets/scss/common/fonts.scss"; @import "~@/assets/scss/common/variables.scss"; @import "~@/assets/scss/common/transitions.scss"; @import "~@/assets/scss/default.scss";`
          },
        }
      }
})
