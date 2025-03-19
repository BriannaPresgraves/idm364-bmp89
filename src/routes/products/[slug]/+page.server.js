import { supabase } from '$lib/server/supabase_client.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const { slug } = params;

  // Fetch current product
  const { data: product, error: productError } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .single();

  if (productError) {
    console.error("Supabase Error:", productError);
    throw error(500, productError.message);
  }
  
  if (!product) {
    throw error(404, 'Product not found');
  }

  return {
    product,
  };
}