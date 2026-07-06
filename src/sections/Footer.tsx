function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">
      <div className="mx-auto max-w-7xl px-6 text-center text-slate-500">
        © {new Date().getFullYear()} Amil Jason. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;