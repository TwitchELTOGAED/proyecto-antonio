import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Creamos y exportamos el cliente (el "puente") para usarlo en nuestras APIs
export const supabase = createClient(supabaseUrl, supabaseAnonKey);