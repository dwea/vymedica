export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center text-sm text-slate-500 sm:flex-row sm:justify-between sm:text-left">
        <p>&copy; {new Date().getFullYear()} Vymedica. All rights reserved.</p>
        <p>Connecting Canadian biotech with the Chinese market.</p>
      </div>
    </footer>
  );
}
