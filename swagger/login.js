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
            default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU4OCwiZm5hbWUiOiJKb3NlcGhpbmUiLCJsbmFtZSI6IkdPVVJFVFRFIiwiZW1haWwiOiJ4eEB4eC54eCIsImlhdCI6MTU1ODA5OTYwMSwiZXhwIjoxNTU4MTU5NjAxfQ.-5Cei12bC327CV6NKrWZzKA8ZAxktz-aniB60nDThjw',
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