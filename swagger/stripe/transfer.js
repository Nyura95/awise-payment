module.exports = {
  '/v1/stripe/transfer': {
    post: {
      tags: ['Transfer'],
      description: 'Transfer a payment for a guide',
      operationId: 'trasnferToGuide',
      security: [
        {
          ApiKeyAuth: []
        }
      ],
      parameters: [
        {
          name: 'ibBooking',
          type: 'number',
          in: 'formData',
          schema: {
            default: 888
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