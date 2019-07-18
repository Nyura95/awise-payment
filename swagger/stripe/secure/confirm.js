module.exports = {
  '/v1/stripe/secure/confirm': {
    post: {
      tags: ['Secure'],
      description: 'Confirm payment intent secure',
      operationId: 'confirmPISecure',
      security: [
        {
          ApiKeyAuth: []
        }
      ],
      parameters: [
        {
          name: 'idBooking',
          type: 'number',
          in: 'formData',
          schema: {
            default: 648
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