module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            title: 'Home Page',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        profile:{
            entry: 'src/pages/profile/main.js',
            title: 'Profile',
            template: 'public/index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'profile']
        },
        settings:{
            entry: 'src/pages/settings/main.js',
            title: 'Settings',
            template: 'public/index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'settings']
        },
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/mpa/'
    : '/'
}