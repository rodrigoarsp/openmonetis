import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
	appId: "com.openmonetis.app",
	appName: "OpenMonetis",
	webDir: "public",
	server: {
		// URL de produção (servidor próprio)
		url: process.env.CAPACITOR_SERVER_URL || "https://financas.rodrigors.online",
		cleartext: false,
	},
};

export default config;
