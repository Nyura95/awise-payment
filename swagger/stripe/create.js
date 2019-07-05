module.exports = {
  '/v1/stripe/payment': {
    post: {
      tags: ['Create'],
      description: 'Create a payment intent',
      operationId: 'createPI',
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
        {
          name: 'token',
          type: 'string',
          in: 'formData',
          schema: {
            default: 'tok_visa'
          },
          required: false,
        },
        {
          name: 'idBooking',
          type: 'number',
          in: 'formData',
          schema: {
            default: 648
          },
          required: true,
        },
        {
          name: 'card',
          type: 'number',
          in: 'formData',
          maxLength: 16,
          minLength: 16,
          required: false,
        },
        {
          name: 'expMonth',
          type: 'number',
          in: 'formData',
          maxLength: 2,
          minLength: 2,
          required: false,
        },
        {
          name: 'expYear',
          type: 'number',
          in: 'formData',
          maxLength: 4,
          minLength: 4,
          required: false,
        },
        {
          name: 'cvc',
          type: 'number',
          in: 'formData',
          example: {
            default: {
              value: 123
            }
          },
          maxLength: 3,
          minLength: 3,
          required: false,
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