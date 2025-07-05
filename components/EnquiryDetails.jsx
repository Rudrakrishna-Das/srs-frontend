import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { PhoneCall } from "lucide-react";

const EnquiryDetails = ({ phone }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          onClick={() => setOpen(true)}
          className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-2 cursor-pointer rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-300"
        >
          Enquiry Call
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] rounded-2xl shadow-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold mb-2">
            <PhoneCall className="inline-block w-6 h-6 mr-2" />
            Call Us For Enquiry
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500 dark:text-gray-400">
            We're available every day between 9 AM and 9 PM
          </DialogDescription>
        </DialogHeader>

        <div className="bg-gray-100 dark:bg-gray-800 px-6 py-4 rounded-xl text-center mt-4">
          <p className="text-lg font-semibold tracking-wide">{phone}</p>
        </div>

        <DialogFooter className="mt-6 flex justify-center">
          <DialogClose asChild>
            <button className="px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300 font-medium">
              Close
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryDetails;
