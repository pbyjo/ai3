const path = require('path');

/* Plugins */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* -------------------- *\
    loaders independientes
\* -------------------- */
const babel = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    include: [
        path.resolve(__dirname, 'src'),
    ],
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

const html = {
    test: /\.html$/,
    use: [
        {
            loader: 'html-loader',
        }
    ]
}

const scss = {
    test: /\.css|.scss$/i,
    include: [
        path.resolve(__dirname, 'src', 'sass'),
        path.resolve(__dirname, 'node_modules', 'leaflet', 'dist')
    ],
    use: ['style-loader', 'css-loader', 'sass-loader'],
}

const fonts = {
    test: /\.(woff|woff2)$/i,
    use: {
        loader: 'url-loader',
        options: {
            limit: 10000,
            mimetype: "application/font-woff",
            name:"[name].[ext]",
            esModule: false,
            outputPath: "./assets/fonts",
            publicPath: "./src/assets/fonts"
        }
    }
}

const files = {
    test: /\.(png|svg|jp(e*)g|gif)$/,
    type: 'asset'
}

/* -------------------- *\
    Reglas
\* -------------------- */
const alias = {
    "@atoms": path.resolve(__dirname, 'src/atoms/'),
    "@components": path.resolve(__dirname, 'src/components/'),
    "@containers": path.resolve(__dirname, 'src/containers/'),
    "@pages": path.resolve(__dirname, 'src/pages/'),

    "@routes": path.resolve(__dirname, 'src/routes/'),
    "@public": path.resolve(__dirname, 'src/public/'),

    "@proyectos": path.resolve(__dirname, 'src/assets/proyectos'),
    "@galeria": path.resolve(__dirname, 'src/assets/galeria'),
    "@404": path.resolve(__dirname, 'src/assets/404'),
    "@icons": path.resolve(__dirname, 'src/assets/icons/'),
    "@logos": path.resolve(__dirname, 'src/assets/logos/'),
    "@styles": path.resolve(__dirname, 'src/sass/'),
    
    "@data": path.resolve(__dirname, 'src/data/'),
}

const rules = [
    babel,
    scss,
    fonts,
    files,
    html
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
            path: path.resolve(__dirname, 'build'),
            publicPath: '/'
        },

        resolve: {
            extensions: ['.js', '.jsx'],
            alias,
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