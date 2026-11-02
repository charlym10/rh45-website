import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Item {
  number: string;
  title: string;
  text: string;
}

interface Group {
  title: string;
  items: Item[];
}

export function DirectionTable({ rows }: { rows: { title: string; text: string }[] }) {
  return (
    <Table className="text-base">
      <TableBody>
        {rows.map(({ title, text }) => (
          <TableRow key={title} className="hover:bg-transparent">
            <TableHead scope="row" className="h-auto w-32 py-4 align-top text-xl leading-7 font-semibold max-[620px]:w-24">
              {title}
            </TableHead>
            <TableCell className="py-4 whitespace-normal">{text}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function ItemCards({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 max-[620px]:grid-cols-1">
      {items.map(({ number, title, text }) => (
        <Card key={number} className="shadow-none">
          <CardContent>
            <div className="mb-2 font-mono text-[13px] leading-5 text-muted-foreground tabular-nums">{number}</div>
            <h3>{title}</h3>
            <p className="text-sm">{text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function ItemTable({ items }: { items: Item[] }) {
  return (
    <Table>
      <TableBody>
        {items.map(({ number, title, text }) => (
          <TableRow key={number} className="hover:bg-transparent">
            <TableCell className="w-12 py-4 align-top font-mono text-[13px] text-muted-foreground tabular-nums">{number}</TableCell>
            <TableHead scope="row" className="h-auto w-[38%] py-4 align-top text-base font-semibold whitespace-normal max-[620px]:w-auto">
              {title}
            </TableHead>
            <TableCell className="py-4 align-top whitespace-normal">{text}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

// Every panel stays in the HTML, so the content does not depend on JavaScript being loaded.
export function AboutTabs({ groups }: { groups: Group[] }) {
  return (
    <Tabs defaultValue={groups[0].title} className="gap-6">
      <TabsList className="h-auto w-full flex-wrap justify-start group-data-[orientation=horizontal]/tabs:h-auto">
        {groups.map(({ title }) => (
          <TabsTrigger key={title} value={title} className="flex-none cursor-pointer px-3 py-1.5">
            {title}
          </TabsTrigger>
        ))}
      </TabsList>
      {groups.map(({ title, items }, index) => (
        <TabsContent key={title} value={title} forceMount className="data-[state=inactive]:hidden">
          <h2 className="sr-only">{title}</h2>
          {index === groups.length - 1 ? <ItemTable items={items} /> : <ItemCards items={items} />}
        </TabsContent>
      ))}
    </Tabs>
  );
}
