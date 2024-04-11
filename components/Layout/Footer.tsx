import Link from "next/link";

export default function Footer() {
  return (
    <div className="grid p-4  w-full  grid-cols-3 gap-4 mb-4 border-t lg:border-0 pt-4 mt-16">
      <div className="grid auto-rows-max gap-0.5">
        <div className="font-semibold">My profile</div>
        <Link href={"/login"}>
          <div className="text-muted-foreground">Login</div>
        </Link>
        <Link href={"/signup"}>
          <div className="text-muted-foreground">Register</div>
        </Link>
        <Link href={"/profile"}>
          <div className="text-muted-foreground">My profile</div>
        </Link>
      </div>

      <div className="grid auto-rows-max gap-0.5 text-center">
        <div className="font-semibold">Place holder</div>
        <div className="text-muted-foreground">123 placeholder text</div>
        <div className="text-muted-foreground">Dummy text</div>
      </div>

      <div className="grid auto-rows-max gap-0.5 text-right">
        <div className="font-semibold">Explore this website</div>
        <Link href={"/products"}>
          <div className="text-muted-foreground">Show all products</div>
        </Link>
        <Link href={"/"}>
          <div className="text-muted-foreground">Featured Products</div>
        </Link>
      </div>
    </div>
  );
}
