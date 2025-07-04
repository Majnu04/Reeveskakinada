import React, { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
      {user ? (
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-block w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-600">
              {user.email?.[0]?.toUpperCase()}
            </span>
            <div>
              <p className="font-semibold text-lg">{user.email}</p>
              <p className="text-sm text-gray-500">Signed in</p>
            </div>
          </div>
          <button onClick={handleSignOut} className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition">Sign Out</button>
        </div>
      ) : (
        <form className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-2 text-center">Sign In or Create Account</h2>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <div className="flex gap-2">
            <button onClick={handleSignIn} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition" disabled={loading}>
              Sign In
            </button>
            <button onClick={handleSignUp} className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition" disabled={loading}>
              Sign Up
            </button>
          </div>
          <div className="flex items-center gap-2 my-2">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <button type="button" onClick={handleGoogleSignIn} className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center gap-2 font-semibold shadow-sm transition" disabled={loading}>
            <svg width="20" height="20" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M43.6 20.5H42V20H24v8h11.3C34.7 32.1 29.9 35 24 35c-6.1 0-11.3-4.9-11.3-11S17.9 13 24 13c2.6 0 5 .8 6.9 2.3l6.5-6.5C34.6 5.5 29.6 3.5 24 3.5 12.4 3.5 3 12.9 3 24.5S12.4 45.5 24 45.5c11.1 0 20.5-9 20.5-20.5 0-1.4-.1-2.4-.3-3.5z"/><path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.5 16.1 18.9 13 24 13c2.6 0 5 .8 6.9 2.3l6.5-6.5C34.6 5.5 29.6 3.5 24 3.5c-7.2 0-13.4 4.1-16.7 10.2z"/><path fill="#FBBC05" d="M24 45.5c5.8 0 10.7-1.9 14.2-5.2l-6.6-5.4c-2 1.4-4.5 2.2-7.6 2.2-5.9 0-10.7-3.9-12.4-9.1l-6.5 5c3.3 6.1 9.5 10.1 16.5 10.1z"/><path fill="#EA4335" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-4.2 5.5-7.3 5.5-4.2 0-7.7-3.5-7.7-7.7s3.5-7.7 7.7-7.7c2.1 0 4 .8 5.4 2.1l6.5-6.5C34.6 5.5 29.6 3.5 24 3.5c-7.2 0-13.4 4.1-16.7 10.2z"/></g></svg>
            Continue with Google
          </button>
        </form>
      )}
    </div>
  );
};

export default AuthForm;
