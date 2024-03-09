"use client";
import { useOS } from "@/hooks/use-os";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";

export default function CheckOS() {
  const [showDialog, setShowDialog] = useState(false);
  const checkOs = useOS();

  const handleContinune = () => {
    setShowDialog(false);
  };

  useEffect(() => {
    if (checkOs === "Android" || checkOs === "Ios") {
      setShowDialog(true);
    }
  }, [checkOs]);

  return (
    <>
      <AlertDialog open={showDialog}>
        <AlertDialogContent className="w-[95%] rounded-md border-none">
          <AlertDialogHeader>
            <AlertDialogTitle>Bạn có chắc chắn muốn tiếp tục?</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn đang truy cập trang web này từ thiết bị di động, điều này có
              thể mang lại trải nghiệm không tốt. Để có trải nghiệm tuyệt vời
              nhất, tôi khuyên bạn nên sử dụng máy tính.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleContinune}>
              Tiếp tục
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
