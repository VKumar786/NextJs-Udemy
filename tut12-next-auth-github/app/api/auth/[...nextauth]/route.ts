import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your password",
        },
      },
      async authorize(credentials, req) {
        const requestBody = {
          username: credentials?.username,
          password: credentials?.password,
        };

        const user = { id: "1", username: "vkumar786", password: "2024" };

        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    // signIn: "/",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    async jwt({ token, user }) {
      // the user present here gets the same data as received
      // from DB call  made above -> fetchUserInfo(credentials.opt)
      return { ...token, ...user };
    },
    async session({ session, user, token }) {
      // user param present in the session(function) does not recive
      //all the data from DB call -> fetchUserInfo(credentials.opt)
      return token;
    },
  },
  secret: process.env.JWT_SECRET,
});

export { handler as GET, handler as POST };
