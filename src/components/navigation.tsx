export function Navigation() {
  return (
    <nav className="font-condiment">
      <ul
        className="flex flex-wrap gap-4 text-xl sm:text-2xl lg:text-3xl text-black 
        sm:gap-6 
        lg:gap-8"
      >
        <li>
          <a
            href="/"
            className="hover:text-gray-500 transition-colors focus:outline-none "
          >
            Contract
          </a>
        </li>
        <li>
          <a
            href="https://x.com/lecroak"
            className="hover:text-gray-500 transition-colors focus:outline-none "
          >
            X
          </a>
        </li>
        <li>
          <a
            href="/"
            className="hover:text-gray-500 transition-colors focus:outline-none "
          >
            Telegram
          </a>
        </li>
        <li>
          <a
            href="https://docs.lecroak.art"
            className="hover:text-gray-500 transition-colors focus:outline-none "
          >
            Docs
          </a>
        </li>
      </ul>
    </nav>
  );
}
