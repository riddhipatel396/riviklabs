export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 font-display font-bold">
              <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent text-white text-sm">R</span>
              Rivik Labs
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Beautiful software that solves everyday problems.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
            <div>
              <div className="font-display font-semibold mb-3">Company</div>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground">About</a></li>
                <li><a href="#products" className="hover:text-foreground">Products</a></li>
                <li><span className="opacity-60">Careers · Soon</span></li>
              </ul>
            </div>
            <div>
              <div className="font-display font-semibold mb-3">Resources</div>
              <ul className="space-y-2 text-muted-foreground">
                <li><span className="opacity-60">Blog · Soon</span></li>
                <li><span className="opacity-60">Docs · Soon</span></li>
                <li><span className="opacity-60">Support · Soon</span></li>
              </ul>
            </div>
            <div>
              <div className="font-display font-semibold mb-3">Legal</div>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {year} Rivik Labs. All rights reserved.</div>
          <div>Crafted independently · Worldwide</div>
        </div>
      </div>
    </footer>
  );
}
