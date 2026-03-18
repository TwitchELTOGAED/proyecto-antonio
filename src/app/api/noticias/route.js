import { NextResponse } from 'next/server';
import { supabase } from '../../lib/supabase';

//LEER NOTICIAS
export async function GET() {
  try {
    const { data, error } = await supabase.from('noticias').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//CREAR NOTICIA
export async function POST(request) {
  try {
    const { titulo, contenido, imagen, autor } = await request.json();
    
    //Si el autor/categoría viene vacío o nulo, le forzamos un texto
    const autoroficial = autor ? autor : 'F1 Noticias';

    const { data, error } = await supabase
      .from('noticias')
      .insert([{ 
        titulo: titulo, 
        contenido: contenido, 
        imagen: imagen, 
        autor: autoroficial
      }])
      .select();
      
    if (error) throw error;
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//BORRAR NOTICIA
export async function DELETE(request) {
  try {
    const id = new URL(request.url).searchParams.get('id');
    const { error } = await supabase.from('noticias').delete().eq('id', id);
    if (error) throw error;
    return NextResponse.json({ message: 'Noticia borrada' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}