

// src/app/private/layout.tsx
import { ReactNode } from "react";
import Container from "@mui/material/Container";
import AuthGuard from "../../sections/Authguard";

export const metadata = { title: "Private | SnapZoska" };

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <AuthGuard>
      <Container>{children}</Container>
    </AuthGuard>
  );
}
