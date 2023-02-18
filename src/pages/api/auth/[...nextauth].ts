import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    session({ session, user }) {
      if (user) {
        session.user.id = user.id;
        session.user.role = user.role;
      }
      return session;
    },
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      profile: (profile: GithubProfile) => {
        return {
          emailVerified: null,
          name: profile.name,
          email: profile.email,
          id: profile.id.toString(),
          image: profile.avatar_url,
          htmlUrl: profile.html_url,
          role: "USER",
        } satisfies User;
      },
    }),
  ],
};

export default NextAuth(authOptions);
