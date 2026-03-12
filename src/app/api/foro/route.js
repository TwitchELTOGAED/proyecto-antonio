import { NextResponse } from 'next/server';
import { supabase } from '../../lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('foro_temas')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    const { titulo, categoria, contenido } = body;

    if (!titulo || !categoria || !contenido) {
      return NextResponse.json({ error: 'Faltan campos' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('foro_temas')
      .insert([
        
        { titulo: titulo, autor: 'Usuario', categoria: categoria, contenido: contenido }
      ])
      .select();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al procesar' }, { status: 500 });
  }
}


//3.DELETE: Borrar un tema

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Falta el ID del tema' }, { status: 400 });
    }


    const { error } = await supabase
      .from('foro_temas')
      .delete()
      .eq('id', id);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    
    return NextResponse.json({ message: 'Tema borrado correctamente' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al procesar la petición' }, { status: 500 });
  }
}



//4.PUT: Actualizar/Editar un tema

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, titulo, categoria, contenido } = body;

    
    if (!id || !titulo || !categoria || !contenido) {
      return NextResponse.json({ error: 'Faltan campos para actualizar' }, { status: 400 });
    }

    
    const { data, error } = await supabase
      .from('foro_temas')
      .update({ titulo: titulo, categoria: categoria, contenido: contenido })
      .eq('id', id)
      .select();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}