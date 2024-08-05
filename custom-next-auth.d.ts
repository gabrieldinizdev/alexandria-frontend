import "next-auth";

declare module "next-auth" {
  interface User {
    createdAt?: string;
    expiresIn?: string;
  }

  interface CredentialsConfig {
    authorize: (credentials: Record<string, unknown>) => any;
  }
}
