import { ArrowUpRight, Building2, ChevronDown, ChevronRight, House, PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const companyLinks = [
  { href: '/manifesto/', label: 'Manifesto' },
  { href: '/how-we-operate/', label: 'How we operate' },
  { href: '/about/', label: 'About' },
];

const menuItem = 'flex w-full cursor-pointer items-center gap-2 rounded-md p-2 text-sm hover:bg-sidebar-accent aria-[current]:bg-sidebar-accent aria-[current]:font-medium';

function MobileMenu({ path }: { path: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative -mr-2 cursor-pointer after:absolute after:-inset-x-1 after:-inset-y-1.5" variant="ghost" size="icon-sm" aria-label="Open navigation menu">
          <PanelLeft />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-72 gap-0 bg-sidebar text-sidebar-foreground" side="right" aria-describedby={undefined}>
        <SheetHeader className="px-4 pb-2">
          <SheetTitle className="mb-0 text-xs leading-4 font-medium tracking-normal text-muted-foreground">Rh45</SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col gap-1 px-2">
          <li>
            <a className={menuItem} href="/" aria-current={path === '/' ? 'page' : undefined}>
              <House className="size-4" aria-hidden="true" />
              Home
            </a>
          </li>
          <Collapsible asChild defaultOpen className="group/collapsible">
            <li>
              <CollapsibleTrigger className={menuItem}>
                <Building2 className="size-4" aria-hidden="true" />
                Company
                <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" aria-hidden="true" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ul className="mx-3.5 flex translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5">
                  {companyLinks.map(({ href, label }) => (
                    <li key={href}>
                      <a className={menuItem} href={href} aria-current={path === href ? 'page' : undefined}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </li>
          </Collapsible>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

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
            <Button className="relative cursor-pointer after:absolute after:-inset-y-1.5 after:inset-x-0 hover:bg-muted-foreground" size="sm">
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
          <MobileMenu path={path} />
        </div>
      </div>
    </nav>
  );
}
