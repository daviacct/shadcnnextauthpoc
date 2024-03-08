import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },

      async authorize(credentials, req) {
        const response = await fetch(`http://localhost:4000/users?email=${credentials?.email}&password=${credentials?.password}`);
        const users = await response.json();

        const user = users[0];

        if (user) {
          return user;
        } else {
          return null;
        }

      },
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }) {
      session = token.user as any
      return session
    }
  }
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }