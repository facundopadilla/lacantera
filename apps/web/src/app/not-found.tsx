import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center py-24">
        <div className="text-center">
          <p className="font-display font-black text-8xl text-neutral-200 leading-none mb-4">
            404
          </p>
          <h1 className="font-display font-bold text-2xl text-stone-deep mb-3">
            Página no encontrada
          </h1>
          <p className="text-neutral-500 text-sm mb-8">
            La página que buscás no existe o fue movida.
          </p>
          <Link
            href="/"
            className="text-sm font-semibold text-copper hover:underline underline-offset-4"
          >
            ← Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
