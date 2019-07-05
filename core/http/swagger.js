const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

module.exports = (app, port, paths) => {
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc({
    swaggerDefinition: {
      info: {
        title: 'Awise-payment',
        version: '1.0.0',
        description: 'Payment API in relationship with stripe',
      },
      host: `localhost:${port}`,
      basePath: '/api',
      securityDefinitions: {
        ApiKeyAuth: {
          description: 'standard api key',
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
        },
      },
      servers: [
        {
          url: `http://localhost:${port}/`,
          description: 'First server',
        },
      ],
      paths,
    },
    apis: []
  })));
};