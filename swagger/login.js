module.exports = {
  '/v1/login/server': {
    post: {
      tags: ['Login'],
      description: 'Login',
      operationId: 'login',
      parameters: [
        {
          name: 'token',
          type: 'string',
          in: 'formData',
          schema: {
            default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImZuYW1lIjoiR2VyYXJkIiwibG5hbWUiOiJHVVlPVCIsImVtYWlsIjoiZ3VpZGVAcXEucXEiLCJpYXQiOjE1NTgwOTk2MjgsImV4cCI6MTU1ODE1OTYyOH0.TUO6nYcMv6U2Kl24nBzwtEquY3J1Neo-6ayvles0vl4',
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