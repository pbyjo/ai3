const path = require('path');

/* Plugins */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* -------------------- *\
    loaders independientes
\* -------------------- */
const babel = {
    test: /\.(js|jsx)$/,
    include: path.resolve(__dirname, 'src'),
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic' // 'classic'
                }
            ] 
        ]
    }
}

const scss = {
    test: /\.css|.scss$/,
    include: [
        path.resolve(__dirname, 'src', 'sass')
    ],
    use: ['style-loader', 'css-loader', 'sass-loader'],
}

/* -------------------- *\
    Reglas
\* -------------------- */
const rules = [
    babel,
    scss
]

/* -------------------- *\
    MAIN CONFIGURATION
\* -------------------- */
module.exports = (env, argv) => {
    const {mode} = argv
    const isProduction = mode === 'production'
    return {
        /* mode: 'development', */
        entry: './src/index.js',
        output: {
            filename: isProduction 
                ? '[name].[contenthash].js'  
                : 'bundle.js',
            path: path.resolve(__dirname, 'package'),
            publicPath: '/'
        },

        module: {
            rules,
        },

        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        },
        
        devServer: {
            open: false,
            port: 3000,
            compress: true,
            historyApiFallback: true,
        },

        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css'
            }),
            new HtmlWebpackPlugin(
                {
                    template: './src/public/index.html'
                }
            )
        ],

        devtool: 'source-map'
    }
}

/* -------------------- *\
    Conceptos !important 
\* -------------------- */
const notes = {
    webpack: 'npm i --save-dev webpack webpack-cli',
    react: 'npm i react react-dom -E (dependencias Exactas)',
    loader: 'loader, cargador es una biblioteca o un tipo de preprocesador que transforma codigo y hará que webpack lo entienda conectandolo a la app y que finalmente llegue al navegador',
    plugin: 'Estos añaden funcionalidad a webpack, quiero generar un archivo html'
}