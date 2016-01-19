let {
    HOST = '127.0.0.1',
    PORT = 8080,
    NODE_ENV = 'development',
    USERNAME = 'default'
    } = process.env;

const IS_PROD = NODE_ENV === 'production';

export default {
    HOST,
    IS_PROD,
    PORT
};
