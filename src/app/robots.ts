import type { MetadataRoute } from "next";

// Instância privada: bloqueia a indexação por buscadores.
export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				disallow: "/",
			},
		],
	};
}
