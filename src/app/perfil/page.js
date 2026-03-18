'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabase';
import SectionTitle from '../components/SectionTitle';

export default function PerfilPage() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('user');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
     
      if (typeof window !== 'undefined') {
        setRole(localStorage.getItem('userRole') || 'user');
      }

      
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        setUser(user);
      } else {
        
        router.push('/');
      }
      setLoading(false);
    };

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    
    await supabase.auth.signOut();
    
    
    if (typeof window !== 'undefined') {
      localStorage.removeItem('userRole');
    }
    
   
    router.push('/');
  };

  if (loading) {
    return <div className="min-h-screen bg-black text-[#E10600] flex items-center justify-center font-black uppercase tracking-widest text-xl">Cargando telemetría...</div>;
  }

  if (!user) return null; 

  
  const username = user.user_metadata?.username || 'Piloto Anónimo';
  const age = user.user_metadata?.age || 'Desconocida';

  return (
    <main className="min-h-screen bg-black text-[#F5F5F5] pb-20 pt-8 z-0 relative">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        
        <SectionTitle title="Mi Perfil" />

        <div className="bg-[#2E2E2E] rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl mt-8 relative overflow-hidden">
        
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E10600] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            
            <div className="w-32 h-32 bg-[#E10600] rounded-full flex items-center justify-center text-6xl font-black text-white border-4 border-black shadow-lg">
              {username.charAt(0).toUpperCase()}
            </div>

           
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-black text-white mb-2 uppercase">{username}</h2>
              <p className="text-gray-400 mb-1 font-medium">📧 Correo: <span className="text-white">{user.email}</span></p>
              <p className="text-gray-400 mb-4 font-medium">🎂 Edad: <span className="text-white">{age} años</span></p>

              <div className="inline-block bg-black px-4 py-2 rounded-full border border-[#E10600]/50 text-[#E10600] text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(225,6,0,0.3)]">
                Licencia: {role === 'admin' ? 'Administrador FIA 👑' : 'Piloto Oficial 🏎️'}
              </div>
            </div>
          </div>

          
          <div className="mt-10 pt-8 border-t border-gray-700 flex justify-center md:justify-end relative z-10">
            <button 
              onClick={handleLogout}
              className="bg-black text-white font-bold py-3 px-8 rounded-full border-2 border-gray-600 hover:border-[#E10600] hover:text-[#E10600] transition-colors uppercase text-sm tracking-wider"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}