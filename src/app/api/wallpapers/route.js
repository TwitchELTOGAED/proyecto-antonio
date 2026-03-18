import { NextResponse } from 'next/server';
import { supabase } from '../../lib/supabase';

//LEER FOTO
export async function GET() {
  try {
    const { data, error } = await supabase.from('wallpapers').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//SUBIR FOTo
export async function POST(request) {
  try {
    const { titulo, fotografo, imagen, user_email } = await request.json();
    
    const { data, error } = await supabase
      .from('wallpapers')
      .insert([{ titulo, fotografo, imagen, user_email }])
      .select();
      
    if (error) throw error;
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//BORRAR 
export async function DELETE(request) {
  try {
    const id = new URL(request.url).searchParams.get('id');
    const { error } = await supabase.from('wallpapers').delete().eq('id', id);
    if (error) throw error;
    return NextResponse.json({ message: 'Wallpaper borrado' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}