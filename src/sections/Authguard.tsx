// src/components/AuthGuard.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import { AuthService } from "../app/auth/authService";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = AuthService.isAuthenticated();

    if (!isAuthenticated) {
      router.push("/prihlasenie"); // Redirect to the login page
    }
  }, [router]);

  // Render children only if the user is authenticated
  return <>{AuthService.isAuthenticated() ? children : null}</>;
};

export default AuthGuard;
