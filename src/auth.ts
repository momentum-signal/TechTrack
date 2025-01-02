import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn() {
      return true;
    },

    async redirect({ url, baseUrl }) {
      // If a valid callbackUrl is provided, return it
      if (url) {
        if (url.startsWith("/")) return `${baseUrl}${url}`; // Relative URL
        else if (new URL(url).origin === baseUrl) return url; // Same origin URL
      }

      // Default to baseUrl if no valid callback URL is provided
      return baseUrl;
    },
  },
});
