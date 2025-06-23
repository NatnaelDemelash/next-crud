import { integer, text, numeric, pgTable } from 'drizzle-orm/pg-core';

export const product = pgTable('product', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(), // e.g. 199.99
  quantity: integer('quantity').notNull(), // how many units available
});
