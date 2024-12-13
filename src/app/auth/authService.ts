// src/app/auth/authService.ts
export class AuthService {
    static isAuthenticated(): boolean {
      // Check for the presence of an auth token or session.
      // Example: Check localStorage or cookies for a valid token.
      return !!localStorage.getItem("authToken"); // Replace with your auth logic
    }
  
    static login(token: string): void {
      localStorage.setItem("authToken", token); // Save auth token
    }
  
    static logout(): void {
      localStorage.removeItem("authToken"); // Clear auth token
    }
  }
  