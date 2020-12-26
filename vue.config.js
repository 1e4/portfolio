module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'ian.pe - portfolio';	// Replace your title here
                return args;
            });
    }
};
