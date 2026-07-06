import { navigation } from "../data/navigation";

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#"
          className="text-2xl font-bold tracking-tight text-white"
        >
          AJ
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {navigation.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="group relative text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
              >
                {item.label}

                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;