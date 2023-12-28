import { SignedOut } from "@clerk/nextjs";
import { Button } from "@components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-start justify-between">
        <Link href={"/"} className="w-36">
          <Image src={"/assets/images/logo.svg"} width={128} height={38} alt="Evently Logo" />
        </Link>

        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <Button asChild className="rounded-full">
              <Link href={"/sign-in"}>
                Login
              </Link>
            </Button>
          </SignedOut>

        </div>
      </div>
    </header>
  );
}

export default Header;