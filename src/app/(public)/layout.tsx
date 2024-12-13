

import Container from "@mui/material/Container";

export const metedata = { title: "Public | SnapZoska" };

export default function PublicLayout( {children}:{children: React.ReactNode} ) {
    return(
        <Container>
            {children}
        </Container>
    );
};