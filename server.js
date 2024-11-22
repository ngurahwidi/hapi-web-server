const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();