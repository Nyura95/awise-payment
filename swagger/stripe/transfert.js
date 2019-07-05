module.exports = {
  '/v1/stripe/transfert': {
    post: {
      tags: ['Transfert'],
      description: 'Transfert a payment for a guide',
      operationId: 'trasnfertToGuide',
      security: [
        {
          ApiKeyAuth: []
        }
      ],
      parameters: [
        {
          name: 'amount',
          type: 'number',
          in: 'formData',
          schema: {
            default: 3000
          },
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