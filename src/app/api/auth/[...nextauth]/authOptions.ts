<<<<<<< HEAD
// src\app\api\auth\[...nextauth]\authOptions.ts
=======
//src\app\api\auth\[...nextauth]\authOptions.ts
>>>>>>> 91f5159319e4d6a56fccb38a43d4804284ac2b4e

import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

<<<<<<< HEAD
export const authOptions: NextAuthOptions = {

    providers: [
=======

export const authOptions: NextAuthOptions = {

  providers: [
>>>>>>> 91f5159319e4d6a56fccb38a43d4804284ac2b4e
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/prihlasenie',
    signOut: '/auth/odhlasenie',
  },
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // Redirect to home page after sign-in
      return baseUrl || url; // baseUrl is automatically set from NEXTAUTH_URL in .env
    },
  },
};
<<<<<<< HEAD
=======



>>>>>>> 91f5159319e4d6a56fccb38a43d4804284ac2b4e
