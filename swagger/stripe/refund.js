module.exports = {
  '/v1/stripe/refund': {
    post: {
      tags: ['Refund'],
      description: 'Refund a payment intent',
      operationId: 'refundPI',
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