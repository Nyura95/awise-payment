module.exports = {
  '/v1/stripe/connect/guide': {
    post: {
      tags: ['Connect'],
      description: 'Create a payment intent',
      operationId: 'createPI',
      security: [
        {
          ApiKeyAuth: []
        }
      ],
      parameters: [
        {
          name: 'accountToken',
          type: 'string',
          in: 'formData',
          required: true,
        },
      ],
      responses: {
        '200': {
          description: 'OK',
        },
      },
    },
  },
};