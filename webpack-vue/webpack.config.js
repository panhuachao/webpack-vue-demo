module.exports = {
  //devtool: 'eval-source-map',//��������Source Maps��ѡ����ʵ�ѡ��
  entry:  __dirname + "/components/main.js",//�Ѷ���ἰ��Ψһ����ļ�
  output: {
    path: __dirname + "/src",//�������ļ���ŵĵط�
    filename: "bundle.js"//���������ļ����ļ���
  },
  module: {
    loaders: [
	   {
		 test: /\.js$/,
		 loader: 'babel',
		 exclude: /node_modules/
		 }
    ]
  }
}