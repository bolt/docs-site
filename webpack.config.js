let Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/assets/')
    .setPublicPath('/assets')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(false)
    .disableSingleRuntimeChunk()

    .addEntry('app', './assets/js/app.js')

    // Babel
    .configureBabel(function(babelConfig) {
        babelConfig.plugins.push('@babel/plugin-proposal-object-rest-spread');
    })

    // Loaders
    .addLoader({
        test: /\.(js)$/,
        exclude: /node_modules\/(?!(bootstrap)\/).*/,
        loader: 'babel-loader',
        query: {
            presets: ['@babel/preset-env'],
        },
    })
    .enableSassLoader()

    .autoProvidejQuery()
;

const config = Encore.getWebpackConfig();

config.watchOptions = {
    poll: true,
    ignored: /node_modules/,
};

module.exports = config;
