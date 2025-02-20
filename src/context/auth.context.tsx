import { createContext, useContext, useEffect, useState } from "react";
import {
  useAuth as useAuthClerk,
  useOAuth,
  useSignIn,
  useSignUp,
  useUser,
} from "@clerk/clerk-expo";
import { router } from "expo-router";
import * as Linking from "expo-linking";

type AuthContextProps = {
  user: any | null;
  initialized: boolean;
  isSignedIn: boolean;
  loading: boolean;
  error: string | null;
  clearError: () => void;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  initialized: false,
  isSignedIn: false,
  loading: false,
  error: null,
  clearError: () => {},
  register: async () => {},
  login: async () => {},
  loginWithGoogle: async () => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { isSignedIn, getToken, signOut } = useAuthClerk();

  const { signIn, setActive, isLoaded } = useSignIn();

  const {
    signUp,
    setActive: setActiveRegister,
    isLoaded: isLoadedRegister,
  } = useSignUp();

  const googleOAuth = useOAuth({ strategy: "oauth_google" });

  const { user } = useUser();

  const [initialized, setInitialized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = () => setError(null);

  const register = async (email: string, password: string) => {
    if (!isLoadedRegister) return;

    setLoading(true);
    try {
      const result = await signUp.create({ emailAddress: email, password });
      await setActiveRegister({ session: result.createdSessionId });
      router.replace("/(tabs)/home");
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  async function loginWithGoogle() {
    setLoading(true);
    try {
      const redirectUrl = Linking.createURL("/");
      const oAuthFlow = await googleOAuth.startOAuthFlow({
        redirectUrl,
      });

      if (oAuthFlow.authSessionResult?.type === "success") {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
        }
      }
    } catch (error: any) {
      setError(error.message || "Erro ao fazer login com Google:");
    } finally {
      setLoading(false);
    }
  }

  const login = async (email: string, password: string) => {
    if (!isLoaded) return;
    setLoading(true);
    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      await setActive({ session: result.createdSessionId });
      router.replace("/(tabs)/home");
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut();
      router.replace("/(public)/welcome");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setInitialized(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isSignedIn: !!isSignedIn,
        initialized,
        loading,
        error,
        clearError,
        register,
        login,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
