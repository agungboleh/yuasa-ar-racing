
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080d16] text-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-red-600/20 blur-[120px]" />

      <div className="relative mx-auto flex min-h-screen max-w-lg flex-col px-6 py-8">
        {/* Navbar */}
        <header className="flex items-center justify-between">
          <div className="text-2xl font-black tracking-wider">
            YUASA<span className="text-red-500">.</span>
          </div>

          <div className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold tracking-widest text-gray-300">
            AR RACING
          </div>
        </header>

        {/* Hero */}
        <section className="flex flex-1 flex-col items-center justify-center py-16 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-500">
            Become The Racer
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">
            Feel The
            <span className="mt-2 block text-red-500">Power.</span>
          </h1>

          <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
            Rasakan pengalaman menjadi pembalap dalam permainan AR Racing
            bersama Yuasa.
          </p>

          {/* Racing visual placeholder */}
          <div className="relative my-10 flex h-64 w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-gray-800 to-[#111827]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.2),transparent_65%)]" />

            <div className="relative text-center">
              <div className="text-7xl">🏎️</div>
              <p className="mt-4 text-xs font-semibold tracking-[0.3em] text-gray-400">
                YOUR RACE STARTS HERE
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider">
              How To Play
            </h2>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex gap-3">
                <span className="font-bold text-red-500">01</span>
                <p>Aktifkan kamera smartphone kamu.</p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-red-500">02</span>
                <p>Gunakan AR Racing Helmet pada wajahmu.</p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-red-500">03</span>
                <p>Mulai permainan dan jadilah pembalap!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-5 text-center">
          <p className="text-xs tracking-wider text-gray-500">
            POWERED BY YUASA
          </p>
        </footer>
      </div>
    </main>
  );
}
