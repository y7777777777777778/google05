self.__uv$config = {
    prefix: '/proxy2/static/tiw/',
    bare: 'https://useclassplay.vercel.app/fq/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/proxy2/static/uv/uv.handler.js',
    bundle: '/proxy2/static/uv/uv.bundle.js',
    config: '/proxy2/static/uv/uv.config.js',
    sw: '/proxy2/static/uv/uv.sw.js',
};
