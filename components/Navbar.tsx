import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';
import MobileNav from './MobileNav';
import {autoPlacement} from "@floating-ui/dom";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
         <div className="logo-container">
          <Image
            src="/icons/logo.png"
            layout="intrinsic"
            width={75} // Double the original width (example)
            height={32} // Double the original height (example)
            alt="yoom logo"
            className="logo-image"
          />
        </div>
        <p className="text-[2px] font-extrabold text-white max-sm:hidden">
          .
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
