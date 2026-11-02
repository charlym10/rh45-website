import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Item {
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
      {items.map(({ title, text }) => (
        <Card key={title} className="shadow-none last:odd:col-span-full">
          <CardContent>
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
        {items.map(({ title, text }) => (
          <TableRow key={title} className="hover:bg-transparent">
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

// Radix builds element ids from the value, so it cannot contain spaces.
const tabValue = (title: string) => title.toLowerCase().replace(/\s+/g, '-');

// Every panel stays in the HTML, and the about page shows them all when JavaScript is off.
export function AboutTabs({ groups }: { groups: Group[] }) {
  return (
    <Tabs defaultValue={tabValue(groups[0].title)} className="gap-6">
      <TabsList className="h-auto w-full flex-wrap justify-start group-data-[orientation=horizontal]/tabs:h-auto">
        {groups.map(({ title }) => (
          <TabsTrigger key={title} value={tabValue(title)} className="flex-none cursor-pointer px-3 py-1.5 max-[620px]:min-h-11">
            {title}
          </TabsTrigger>
        ))}
      </TabsList>
      {groups.map(({ title, items }, index) => (
        <TabsContent key={title} value={tabValue(title)} forceMount className="data-[state=inactive]:hidden">
          <h2 className="sr-only">{title}</h2>
          {index === groups.length - 1 ? <ItemTable items={items} /> : <ItemCards items={items} />}
        </TabsContent>
      ))}
    </Tabs>
  );
}
