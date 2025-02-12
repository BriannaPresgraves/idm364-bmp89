import { error } from '@sveltejs/kit';
import { slugify } from '$lib/utils';
import { products } from '$lib/data';

export function load({ params }) {
  const product = products.find(p => slugify(p.name) === params.slug);
  if (!product) throw error(404, 'Product not found');
  return { product };
}