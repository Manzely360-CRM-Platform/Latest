import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Shield } from 'lucide-react';

interface PartnerLoginProps {
  onNavigate: (page: string) => void;
  onLoginSuccess: () => void;
}

export default function PartnerLogin({ onNavigate, onLoginSuccess }: PartnerLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;

      const { data: profile, error: profileError } = await supabase
        .from('user_profiles')
        .select('role')
        .eq('id', data.user.id)
        .maybeSingle();

      if (profileError) throw profileError;

      if (!profile || profile.role !== 'partner') {
        await supabase.auth.signOut();
        throw new Error('Access denied. This login is for partners only.');
      }

      onLoginSuccess();
      onNavigate('home');
    } catch (err: any) {
      setError(err.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark pt-24 pb-16 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-brand-orange/20">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center">
              <Shield className="w-8 h-8 text-brand-orange" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white text-center mb-2">
            The Y Network
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Partner Login
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-4 mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                placeholder="partner@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-medium py-3 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging in...' : 'Login as Partner'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Regular user?{' '}
              <button
                onClick={() => onNavigate('login')}
                className="text-brand-orange hover:text-brand-orange-hover font-medium"
              >
                Login here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
