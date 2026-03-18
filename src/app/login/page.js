'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [pin, setPin] = useState('');
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');

    if (isAdminMode) {
      if (email !== 'admin@deltatime.com') {
        setError('Este correo no es un correo de administrador válido.');
        return;
      }
      if (pin !== '3314') {
        setError('PIN de seguridad incorrecto.');
        return;
      }
    }

    setLoading(true);

    try {
      const { data, error: supabaseError } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (supabaseError) throw supabaseError;

      if (isAdminMode) {
        localStorage.setItem('userRole', 'admin');
      } else {
        localStorage.setItem('userRole', 'user');
      }

      router.push('/home');
      
    } catch (err) {
      setError('Correo o contraseña incorrectos. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/Ferrari_Leclerc2026.jpeg" alt="F1 Fondo" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-black/70"></div> 
      </div>

      <div className="relative z-10 w-full max-w-md bg-[#E10600] rounded-3xl p-8 shadow-[0_0_50px_rgba(225,6,0,0.5)] mx-4">
        <Link href="/" className="absolute top-6 left-6 text-white hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
        </Link>

        <div className="text-center mb-8 mt-2">
          <h1 className="font-montserrat font-black text-4xl text-white uppercase leading-none tracking-tighter">DELTA<br/>TIME</h1>
        </div>

        {error && <div className="mb-6 bg-black/80 border border-white/50 text-white text-xs font-bold p-3 rounded-lg text-center uppercase">⚠️ {error}</div>}

        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block text-white font-bold text-sm mb-1 ml-2 uppercase">Correo Electrónico</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white rounded-full py-3 px-6 text-black font-bold focus:outline-none focus:ring-4 focus:ring-black/20" />
          </div>

          <div>
            <label className="block text-white font-bold text-sm mb-1 ml-2 uppercase">Contraseña</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-white rounded-full py-3 px-6 text-black font-bold focus:outline-none focus:ring-4 focus:ring-black/20" />
          </div>

          <div className="flex items-center ml-2 mt-2">
            <input type="checkbox" id="adminCheck" checked={isAdminMode} onChange={(e) => setIsAdminMode(e.target.checked)} className="mr-2 w-4 h-4 cursor-pointer" />
            <label htmlFor="adminCheck" className="text-white text-sm font-bold cursor-pointer">Iniciar como Administrador</label>
          </div>

          {isAdminMode && (
            <div className="animate-fade-in">
              <label className="block text-[#FFD700] font-black text-sm mb-1 ml-2 uppercase">PIN de Seguridad (4 dígitos)</label>
              <input type="password" maxLength="4" required={isAdminMode} value={pin} onChange={(e) => setPin(e.target.value)} className="w-full bg-black border-2 border-[#FFD700] text-[#FFD700] tracking-[1em] text-center rounded-full py-3 px-6 font-black focus:outline-none" placeholder="••••" />
            </div>
          )}

          <div className="pt-4 flex flex-col gap-4">
            <button type="submit" disabled={loading} className="w-full bg-white text-[#E10600] font-black py-3 rounded-full uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-lg disabled:opacity-50">
              {loading ? 'Iniciando...' : 'Iniciar Sesión'}
            </button>
            <p className="text-center text-white text-sm font-medium">¿No tienes cuenta? <Link href="/signup" className="underline hover:text-black transition-colors">Regístrate aquí</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}