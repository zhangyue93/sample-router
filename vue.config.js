const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: [
		'vuetify'
		],
	lintOnSave: false,
	configureWebpack: {
		resolve: {
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				},
			extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
				},
		
		}
	
	  
 
})