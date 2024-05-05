import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "./ui/dialog";
import Image from "next/image";

export function PreviewImageDialog({
  selectedFile,
  close,
  imageChange,
  setFlag,
}: {
  selectedFile: string;
  close: () => void;
  imageChange: any;
  setFlag: any;
}) {
  return (
    <Dialog open={!!selectedFile}>
      <DialogContent
        onInteractOutside={close}
        className="sm:max-w-[425px] bg-white border max-w-xl flex flex-col"
      >
        <DialogHeader>
          <div className="flex items-center relative h-3/4 my-auto">
            <Image
              src={selectedFile}
              alt="'selectedfile"
              width={400}
              height={400}
              className="rounded-md borded mx-auto border-gray-400 object-contain"
            />
          </div>
        </DialogHeader>

        <DialogFooter className="mx-auto flex items-center">
          <DialogClose asChild>
            <Button onClick={close} variant={"destructive"} size={"sm"}>
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={imageChange} size={"sm"}>
            Change
          </Button>
          <Button onClick={() => setFlag && setFlag(true)} size={"sm"}>
            Next
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
