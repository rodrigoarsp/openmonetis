import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: {
		absolute: "OpenMonetis | Suas finanças",
	},
	description: "Controle de finanças pessoais.",
	// Instância privada em produção: não indexar.
	robots: {
		index: false,
		follow: false,
	},
};

export default function LandingLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
