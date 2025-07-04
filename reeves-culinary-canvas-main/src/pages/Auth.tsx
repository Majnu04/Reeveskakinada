import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthForm from "@/components/AuthForm";
import { onAuthStateChanged, getAuth, signInWithPhoneNumber } from "firebase/auth";

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}

const AuthPage = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handlePhoneNumberSignIn = (phoneNumber: string) => {
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        // Error; SMS not sent
        console.error("Error during signInWithPhoneNumber:", error);
      });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/10 to-accent/10 animate-gradient-move">
        <div className="relative w-24 h-24 border-4 border-primary border-t-transparent rounded-full animate-spin">
          <span className="absolute inset-0 flex items-center justify-center text-primary font-bold text-lg animate-pulse">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  if (currentUser && location.pathname === "/auth") {
    const redirectTo = location.state?.from || "/";
    return <Navigate to={redirectTo} replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-background via-accent/10 to-primary/10 animate-gradient-move z-0" />
      <div className="relative w-full max-w-md bg-card rounded-3xl shadow-2xl p-8 sm:p-10 flex flex-col items-center border border-primary/10">
        <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-primary mb-6 text-center animate-fade-in-up">
          Join Reeves Culinary
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 text-center">
          Create your account for exclusive dining experiences
        </p>
        <button className="w-full py-3 px-6 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-all duration-300 mb-4">
          Continue with Google
        </button>
        <p className="text-xs sm:text-sm text-muted-foreground mb-4 text-center">
          or continue with email
        </p>
        <AuthForm />
      </div>
    </div>
  );
};

const auth = getAuth();
auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// auth.useDeviceLanguage();

export default AuthPage;
