import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import connectDB from "./lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Github({
      clientId: process.env.NEXT_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_GITHUB_CLIENT_SERVER,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  //   callbacks: {
  //     async signIn({ account, profile }) {
  //       if (account?.provider === "github") {
  //         await connectDB();

  //         try {
  //         } catch (error) {}
  //       }
  //     },
  //   },
});
