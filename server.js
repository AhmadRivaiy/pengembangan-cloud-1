const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: '0.0.0.0',
        "routes": {
            "cors": {
                "origin": ["http://localhost:3000", "http://ahmadr901-fe-cicd.s3-website-ap-southeast-2.amazonaws.com"],
                "headers": ["Accept", "Content-Type"],
                "additionalHeaders": ["X-Requested-With"]
            }
        }
    });

    await server.start();
    server.route(routes);
    console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();