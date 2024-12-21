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
            className="hover:text-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Contract
          </a>
        </li>
        <li>
          <a
            href="https://x.com/lecroak"
            className="hover:text-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            X
          </a>
        </li>
        <li>
          <a
            href="/"
            className="hover:text-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Telegram
          </a>
        </li>
        <li>
          <a
            href="https://docs.lecroak.art"
            className="hover:text-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Docs
          </a>
        </li>
      </ul>
    </nav>
  );
}
