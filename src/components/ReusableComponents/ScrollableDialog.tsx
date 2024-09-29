import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "../ui/scroll-area";

interface ScrollableDialogProps {
    title: string;
    description: string;
    triggerText: string;
    children: React.ReactNode;
}

const ScrollableDialog: React.FC<ScrollableDialogProps> = ({ title, description,
    triggerText, children }) => (
    <Dialog>
        <DialogTrigger
            className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">
            {triggerText}
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <p>{description}</p>
            </DialogHeader>
            <ScrollArea className="h-[600px] rounded-md border p-4">
                {children}
            </ ScrollArea>
        </DialogContent>
    </Dialog>
);
export default ScrollableDialog;