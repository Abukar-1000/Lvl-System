import { ThemeProvider, useTheme } from "@mui/material/styles";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";


export default function Providers({ client, theme, children }) {
    const darkThemeBackground = "#121212";
    
    useEffect(() => {
        document.body.style.backgroundColor = darkThemeBackground;
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={client}>
                {children}
            </QueryClientProvider>
        </ThemeProvider>
    );
}