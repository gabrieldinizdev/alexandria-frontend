import { decodeToken } from "react-jwt";

import NextAuth, { type User } from "next-auth";
import type { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { LoginAction } from "@/actions/auth";
import type { LoginInput } from "@/interfaces/inputs";

const providers: Provider[] = [
  GitHub,
  Google,
  Credentials({
    credentials: {
      email: {},
      password: {},
    },
    authorize: async (credentials) => {
      const payload = credentials as LoginInput;

      const response = await LoginAction(payload);

      if (response?.error) throw new Error("Credentials are invalid");

      const { data } = response!;

      const user = decodeToken<User>(data)!;

      return user;
    },
  }),
];

export const providersList = Object.values(
  providers
    .filter((provider) => (provider as any)?.id !== "credentials")
    .map((provider) => {
      if (typeof provider === "function") {
        const data = provider();
        return { id: data.id, name: data.name };
      }

      return { id: provider.id, name: provider.name };
    })
);

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  callbacks: {
    authorized: async (user) => {
      return !!user.auth;
    },
  },
  pages: {
    signIn: "/auth/sign-in",
  },
});
