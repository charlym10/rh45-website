import { ArrowUpRight, ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const companyLinks = [
  { href: '/manifesto/', label: 'Manifesto' },
  { href: '/how-we-operate/', label: 'How we operate' },
  { href: '/about/', label: 'About' },
];

export function SiteHeader({ path }: { path: string }) {
  return (
    <nav className="shell flex h-(--nav-height) items-center justify-between gap-2">
      <a className="text-[22px] leading-7 font-semibold tracking-[-.02em]" href="/">
        Rh45
      </a>
      <div className="flex items-center gap-2">
        <div className="max-[620px]:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="cursor-pointer border-input shadow-none" variant="outline" size="sm">
                Company
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {companyLinks.map(({ href, label }) => (
                <DropdownMenuItem key={href} asChild>
                  <a className="cursor-pointer aria-[current]:font-semibold" href={href} aria-current={path === href ? 'page' : undefined}>
                    {label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="cursor-pointer hover:bg-muted-foreground max-[620px]:h-9" size="sm">
              Contact Rh45
              <ArrowUpRight />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Talk to Rh45.</DialogTitle>
              <DialogDescription>We welcome conversations with partners, suppliers, investors and collaborators.</DialogDescription>
            </DialogHeader>
            <Button asChild className="w-fit">
              <a href="mailto:info@rh45.ai">
                info@rh45.ai
                <ArrowUpRight />
              </a>
            </Button>
          </DialogContent>
        </Dialog>
        <div className="min-[621px]:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="cursor-pointer border-input shadow-none" variant="outline" size="icon" aria-label="Open navigation menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent aria-describedby={undefined}>
              <SheetHeader>
                <SheetTitle className="mb-0 text-base leading-6 tracking-normal">Company</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col px-4">
                {companyLinks.map(({ href, label }) => (
                  <a className="border-t py-4 aria-[current]:font-semibold" key={href} href={href} aria-current={path === href ? 'page' : undefined}>
                    {label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
