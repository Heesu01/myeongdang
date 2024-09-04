const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const usersRouter = require('./routes/users');

const app = express();

// Swagger 옵션 설정
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
    },
  },
  apis: [path.join(__dirname, './routes/*.js')], // 문서화할 경로를 설정
};

// Swagger 문서 생성
const specs = swaggerJsdoc(options);

// Swagger UI를 Express에 통합
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// 라우트 추가
app.use('/', usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
