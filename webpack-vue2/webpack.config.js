module.exports = {
    /* �����ļ� */
    entry: './src/main.js',
    output: {
        /* ���Ŀ¼��û�����½� */
        //path: path.resolve(__dirname, './dist'),
		path:'./dist',
        /* ��̬Ŀ¼������ֱ�Ӵ�����ȡ�ļ� */
        publicPath: '/dist/',
        /* �ļ��� */
        filename: 'build.js'
    },
    module: {
        rules: [
            /* ��������vue��׺���ļ� */
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            /* ��babel������js�ļ�����es6���﷨ת�����������ʶ���﷨ */
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /* �ų�ģ�鰲װĿ¼���ļ� */
                exclude: /node_modules/
            }
        ]
    }
}