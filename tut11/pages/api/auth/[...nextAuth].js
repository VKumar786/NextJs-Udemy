import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "../../../lib/auth";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const { email } = credentials;
        const users = await (await fetch("http://localhost:3001/users")).json();
        const existingUser = users.find((user) => user.email === email);
        if (!existingUser) {
          res.status(422).json({ message: "No User Found!" });
          return;
        }

        const isValid = await verifyPassword(
          credentials.password,
          existingUser[0].password
        );
        if (!isValid) {
          res.status(422).json({ message: "Invalid Password!" });
          return;
        }

        return { email: existingUser[0].email };
      },
    }),
  ],
});
