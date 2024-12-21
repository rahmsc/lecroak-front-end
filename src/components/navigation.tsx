export function Navigation() {
  return (
    <nav className="font-condiment pr-4 pt-4">
      <ul className="flex gap-8 text-3xl text-black">
        <li>
          <a href="/gallery" className="hover:text-gray-500 transition-colors">
            Gallery
          </a>
        </li>
        <li>
          <a href="/connect" className="hover:text-gray-500 transition-colors">
            Connect
          </a>
        </li>
        <li>
          <a
            href="https://x.com/lecroak"
            className="hover:text-gray-500 transition-colors"
          >
            X
          </a>
        </li>
        <li>
          <a href="/telegram" className="hover:text-gray-500 transition-colors">
            Telegram
          </a>
        </li>
        <li>
          <a href="/docs" className="hover:text-gray-500 transition-colors">
            Docs
          </a>
        </li>
      </ul>
    </nav>
  );
}
