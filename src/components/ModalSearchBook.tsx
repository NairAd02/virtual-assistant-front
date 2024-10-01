import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";



export function ModalSearchBook() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Pulse para buscar información de algún libro</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle>Busqueda Avanzada de Libros</DialogTitle>
                    <DialogDescription>
                        Se le dará información sobre los libros que coincidan con la información que desea
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col items-center gap-4">
                        <Label htmlFor="username">
                            Introduzca cualquier dato que crea relevante acerca de lo que desea buscar:
                        </Label>
                        <Textarea />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Buscar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
