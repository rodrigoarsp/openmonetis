import {
	RiAndroidLine,
	RiArrowRightLine,
	RiBankCardLine,
	RiPieChartLine,
	RiShieldCheckLine,
} from "@remixicon/react";
import Link from "next/link";
import { Suspense } from "react";
import { AnimatedThemeToggler } from "@/shared/components/animated-theme-toggler";
import { Logo } from "@/shared/components/brand/logo";
import { Button } from "@/shared/components/ui/button";
import { getOptionalUserSession } from "@/shared/lib/auth/server";
import { isSignupDisabled } from "@/shared/lib/auth/signup";

const highlights = [
	{
		icon: RiBankCardLine,
		title: "Contas e cartões",
		description: "Lançamentos, faturas e extratos em um só lugar.",
	},
	{
		icon: RiPieChartLine,
		title: "Orçamentos e relatórios",
		description: "Acompanhe categorias, metas e a evolução do mês.",
	},
	{
		icon: RiShieldCheckLine,
		title: "Seus dados, seu servidor",
		description: "Tudo hospedado por você, com acesso protegido.",
	},
];

function AndroidDownloadButton() {
	return (
		<a
			href="/downloads/openmonetis.apk"
			download="OpenMonetis.apk"
			className="w-full sm:w-auto"
		>
			<Button size="lg" variant="outline" className="w-full gap-2 sm:w-auto">
				<RiAndroidLine className="size-5" />
				Baixar app Android
			</Button>
		</a>
	);
}

async function HomeActions() {
	const session = await getOptionalUserSession();
	const signupDisabled = isSignupDisabled();

	if (session?.user) {
		return (
			<>
				<Link prefetch href="/dashboard" className="w-full sm:w-auto">
					<Button size="lg" className="w-full gap-2 sm:w-auto">
						Ir para o dashboard
						<RiArrowRightLine className="size-5" />
					</Button>
				</Link>
				<AndroidDownloadButton />
			</>
		);
	}

	return (
		<>
			<Link href="/login" className="w-full sm:w-auto">
				<Button size="lg" className="w-full gap-2 sm:w-auto">
					Entrar
					<RiArrowRightLine className="size-5" />
				</Button>
			</Link>
			{!signupDisabled && (
				<Link href="/signup" className="w-full sm:w-auto">
					<Button size="lg" variant="outline" className="w-full sm:w-auto">
						Criar conta
					</Button>
				</Link>
			)}
			<AndroidDownloadButton />
		</>
	);
}

function HomeActionsFallback() {
	return (
		<Link href="/login" className="w-full sm:w-auto">
			<Button size="lg" className="w-full gap-2 sm:w-auto">
				Entrar
				<RiArrowRightLine className="size-5" />
			</Button>
		</Link>
	);
}

export default function Page() {
	return (
		<div className="flex min-h-screen flex-col">
			<header className="flex items-center justify-between px-4 py-3 md:px-8">
				<Logo variant="full" />
				<AnimatedThemeToggler />
			</header>

			<main className="flex flex-1 flex-col items-center justify-center px-4 pb-16">
				<div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center md:gap-6">
					<h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
						Suas finanças,
						<span className="text-primary"> do seu jeito</span>
					</h1>

					<p className="max-w-xl text-base text-muted-foreground md:text-lg">
						Controle lançamentos, cartões, orçamentos e relatórios com total
						privacidade.
					</p>

					<div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
						<Suspense fallback={<HomeActionsFallback />}>
							<HomeActions />
						</Suspense>
					</div>
				</div>

				<ul className="mx-auto mt-14 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
					{highlights.map(({ icon: Icon, title, description }) => (
						<li
							key={title}
							className="rounded-xl border bg-card p-5 text-left shadow-xs"
						>
							<Icon className="mb-3 size-6 text-primary" aria-hidden="true" />
							<h2 className="text-sm font-semibold">{title}</h2>
							<p className="mt-1 text-sm text-muted-foreground">
								{description}
							</p>
						</li>
					))}
				</ul>
			</main>
		</div>
	);
}
