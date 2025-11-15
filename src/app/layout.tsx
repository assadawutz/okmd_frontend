import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="th">
            <body>{children}</body>
        </html>
    );
}
