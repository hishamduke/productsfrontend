import Link from "next/link";

export default function Footer() {
  return (
    <div className="grid p-4  w-full  grid-cols-3 gap-4 mb-4 border-t lg:border-0 pt-4">
      <div className="grid gap-3">
        <div className="font-semibold">Footer</div>
        <address className="grid gap-0.5 not-italic text-muted-foreground">
          <span>Placeholder</span>
          <span>Random text</span>
          <span>Placeholder</span>
        </address>
      </div>
      <div className="grid auto-rows-max gap-3 text-center">
        <div className="font-semibold">Footer section</div>
        <div className="text-muted-foreground">Random placeholder text</div>
      </div>
      <div className="grid auto-rows-max gap-3 text-right">
        <div className="font-semibold">Navigate this page</div>
        <Link href={"/"}>
          <div className="text-muted-foreground">Show all products</div>
        </Link>
      </div>
    </div>
  );
}
