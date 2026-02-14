import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";
const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                <Image src="/assets/images/x.png" alt="Signalist logo" width={140} height={32} className="h-10 w-auto cursor-pointer"/>
                <p className="font-bold text-3xl text-white absolute left-20 top-4">Stocky</p>
                </Link>
                <nav className="hidden sm:block">
                    <NavItems />
                </nav>
                <UserDropdown />
            </div>

        </header>
    )
}
export default Header;
