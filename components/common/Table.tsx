import { Button } from "../ui/button";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "../ui/table";
import { Search, PlusCircle } from "lucide-react";
import { Label } from "../ui/label";
import { DialogClose } from "@radix-ui/react-dialog";

export function CTable() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Produtos</h1>

      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="ID do pedido" />
          <Input name="name" placeholder="Nome do Produto" />
          <Button type="submit" variant="link">
            <Search className="w-4 h-4 mr-2" />
            Filtrar resultados
          </Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="w-4 h-4 mr-2" />
              Novo Produto
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>Novo Produto</DialogHeader>
            <DialogDescription>
              Criar um novo produto na tabela
            </DialogDescription>
            <form className="space-y-6">
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="name">Produto</Label>
                <Input className="col-span-3" id="name" name="name" />
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="price">Preço</Label>
                <Input className="col-span-3" id="price" name="price" />
              </div>
            </form>

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="submit">Salvar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>{index}</TableCell>
                <TableCell>Produto {index}</TableCell>
                <TableCell>R$190,00</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
