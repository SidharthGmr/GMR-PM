import { Status } from "@prisma/client";

export interface ProductDto {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
  sku: string;
  price: number;
  cost?: number | null;
  stock: number;
  lowStockThreshold?: number | null;
  categoryId: number;
  images: string[];
  status: Status;
  createdById: number;
  updatedById?: number | null;
  createdAt: Date;
  updatedAt: Date | null;
}

export interface CreateProductDto {
  name: string;
  slug: string;
  description?: string | null;
  sku: string;
  price: number;
  cost?: number | null;
  stock?: number;
  lowStockThreshold?: number | null;
  categoryId: number;
  images?: string[];
  status?: Status;
  createdById: number;
}

export interface UpdateProductDto {
  name?: string;
  slug?: string;
  description?: string | null;
  sku?: string;
  price?: number;
  cost?: number | null;
  stock?: number;
  lowStockThreshold?: number | null;
  categoryId?: number;
  images?: string[];
  status?: Status;
  updatedById?: number | null;
  updatedAt?: Date;
}
