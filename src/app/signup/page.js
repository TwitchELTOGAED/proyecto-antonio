'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '../lib/supabase';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    setLoading(true);

    try {
      const { data, error: supabaseError } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: { username: username, age: age }
        }
      });

      if (supabaseError) throw supabaseError;

      setSuccess('¡Registro completado! Ya puedes iniciar sesión.');
      
    } catch (err) {
      setError(err.message || 'Ocurrió un error al registrarse.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden py-10">
      <div className="absolute inset-0 z-0">
        <img src="/Ferrari_Leclerc2026.jpeg" alt="F1 Fondo" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 w-full max-w-md bg-[#E10600] rounded-3xl p-8 shadow-[0_0_50px_rgba(225,6,0,0.5)] mx-4">
        <Link href="/" className="absolute top-6 left-6 text-white hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
        </Link>

        <div className="text-center mb-6 mt-2">
          <h1 className="font-montserrat font-black text-3xl text-white uppercase leading-none tracking-tighter">DELTA TIME</h1>
          <p className="text-white/80 text-xs font-bold uppercase tracking-widest mt-1">Crear Cuenta</p>
        </div>

        {error && <div className="mb-4 bg-black/80 border border-white/50 text-white text-xs font-bold p-3 rounded-lg text-center uppercase">⚠️ {error}</div>}
        {success && <div className="mb-4 bg-green-500 text-white text-xs font-bold p-3 rounded-lg text-center uppercase">✅ {success}</div>}

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-white font-bold text-xs mb-1 ml-2 uppercase">Correo Electrónico</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white rounded-full py-2 px-4 text-black font-bold focus:outline-none" />
          </div>
          <div>
            <label className="block text-white font-bold text-xs mb-1 ml-2 uppercase">Nombre de Usuario</label>
            <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-white rounded-full py-2 px-4 text-black font-bold focus:outline-none" />
          </div>
          <div className="w-1/3">
            <label className="block text-white font-bold text-xs mb-1 ml-2 uppercase">Edad</label>
            <input type="number" required value={age} onChange={(e) => setAge(e.target.value)} className="w-full bg-white rounded-full py-2 px-4 text-black font-bold focus:outline-none" />
          </div>
          <div>
            <label className="block text-white font-bold text-xs mb-1 ml-2 uppercase">Contraseña</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-white rounded-full py-2 px-4 text-black font-bold focus:outline-none" />
          </div>
          <div>
            <label className="block text-white font-bold text-xs mb-1 ml-2 uppercase">Confirmar Contraseña</label>
            <input type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full bg-white rounded-full py-2 px-4 text-black font-bold focus:outline-none" />
          </div>
          <div className="pt-4 flex flex-col gap-3">
            <button type="submit" disabled={loading} className="w-full bg-white text-[#E10600] font-black py-3 rounded-full uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-lg disabled:opacity-50">
              {loading ? 'Procesando...' : 'Registrarse'}
            </button>
             <Link href="/login" className="w-full bg-black/20 text-white font-bold py-3 rounded-full uppercase tracking-wider text-center hover:bg-black/40 transition-colors border-2 border-transparent hover:border-white/20">
              Ya tengo cuenta
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}