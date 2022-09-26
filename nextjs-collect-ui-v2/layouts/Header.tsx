import { PATH } from "constants/path";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="layout-container">
        <nav className="h-[70px] flex items-center">
          <Link href={PATH.home}>
            <a>
              <h1 className="text-lg font-semibold">FrontendUI</h1>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
