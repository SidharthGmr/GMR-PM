import path from 'path';

const port = process.env.PORT || 4000;

// Determine the server URL used in Swagger UI. When deployed on Vercel,
// VERCEL_URL is set to <project>.vercel.app. Prefer an explicit PUBLIC_URL
// if provided (useful for custom domains). Fallback to localhost for dev.
//const publicUrl = 'https://backend-ruddy-tau-76.vercel.app/docs';

export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TCI API 🏨',
      version: '1.0.0',
      description: 'API documentation for TCI Platform',
    },
    // Use a relative server URL so Swagger UI uses the current origin.
    // This avoids localhost being embedded at build time when deployed to Vercel.
    // servers: [{ url: '/' }],
    components: {
      securitySchemes: {
        bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      },
      // --- MOVED SCHEMAS INSIDE COMPONENTS ---
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: { type: 'string', example: 'STU-2025-1234' },
            name: { type: 'string', example: 'John Doe' },
            email: { type: 'string', example: 'john@example.com' },
            role: {
              type: 'string',
              enum: ['ADMIN', 'STUDENT'],
              example: 'STUDENT',
            },
          },
        },
        LoginRequest: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: { type: 'string' },
            password: { type: 'string' },
          },
        },
        Product: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Wireless Mouse' },
            brandNameId: { type: 'integer', nullable: true, example: 2 },
            slug: { type: 'string', example: 'wireless-mouse' },
            description: { type: 'string', nullable: true, example: 'A high-precision wireless mouse' },
            sku: { type: 'string', example: 'SKU-001' },
            price: { type: 'number', example: 999.99 },
            cost: { type: 'number', nullable: true, example: 500 },
            stock: { type: 'integer', example: 50 },
            lowStockThreshold: { type: 'integer', nullable: true, example: 5 },
            categoryId: { type: 'integer', example: 3 },
            images: { type: 'array', items: { type: 'string' }, example: ['https://example.com/image1.jpg'] },
            storeId: { type: 'integer', nullable: true, example: 1 },
            status: { type: 'string', enum: ['Published', 'Draft', 'Trash'], example: 'Published' },
            displayOrder: { type: 'integer', nullable: true, example: 0 },
            createdById: { type: 'integer', example: 1 },
            updatedById: { type: 'integer', nullable: true, example: 2 },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time', nullable: true },
          },
        },
        CreateProductRequest: {
          type: 'object',
          required: ['name', 'slug', 'sku', 'price', 'categoryId'],
          properties: {
            name: { type: 'string', example: 'Wireless Mouse' },
            brandNameId: { type: 'integer', nullable: true, example: 2 },
            slug: { type: 'string', example: 'wireless-mouse' },
            description: { type: 'string', nullable: true, example: 'A high-precision wireless mouse' },
            sku: { type: 'string', example: 'SKU-001' },
            price: { type: 'number', example: 999.99 },
            cost: { type: 'number', nullable: true, example: 500 },
            stock: { type: 'integer', example: 50 },
            lowStockThreshold: { type: 'integer', nullable: true, example: 5 },
            categoryId: { type: 'integer', example: 3 },
            images: { type: 'array', items: { type: 'string' }, example: ['https://example.com/image1.jpg'] },
            storeId: { type: 'integer', nullable: true, example: 1 },
            status: { type: 'string', enum: ['Published', 'Draft', 'Trash'], example: 'Published' },
            displayOrder: { type: 'integer', nullable: true, example: 0 },
          },
        },
        UpdateProductRequest: {
          type: 'object',
          properties: {
            name: { type: 'string', example: 'Wireless Mouse' },
            brandNameId: { type: 'integer', nullable: true, example: 2 },
            slug: { type: 'string', example: 'wireless-mouse' },
            description: { type: 'string', nullable: true, example: 'A high-precision wireless mouse' },
            sku: { type: 'string', example: 'SKU-001' },
            price: { type: 'number', example: 999.99 },
            cost: { type: 'number', nullable: true, example: 500 },
            stock: { type: 'integer', example: 50 },
            lowStockThreshold: { type: 'integer', nullable: true, example: 5 },
            categoryId: { type: 'integer', example: 3 },
            images: { type: 'array', items: { type: 'string' }, example: ['https://example.com/image1.jpg'] },
            storeId: { type: 'integer', nullable: true, example: 1 },
            status: { type: 'string', enum: ['Published', 'Draft', 'Trash'], example: 'Published' },
            displayOrder: { type: 'integer', nullable: true, example: 0 },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [
    './src/routes/*.ts',
    './src/routes/*.js',
    './dist/routes/*.js',
    './api/*.ts', // if vercel uses api folder
  ],
};
