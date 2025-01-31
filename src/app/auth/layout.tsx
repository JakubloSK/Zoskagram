
import Container from "@mui/material/Container";

export const metadata = { title: "Auth | SnapZoska" };

export default function AuthLayout( {children}:{children: React.ReactNode} ) {
    return(
        <Container>
            {children}
        </Container>
    );
};