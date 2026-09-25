import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Immo RCA — Immobilier en Centrafrique", description: "Trouvez maisons, appartements, terrains et locaux en République centrafricaine." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}