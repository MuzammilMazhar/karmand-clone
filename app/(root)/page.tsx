"use client"


import { useStoreModal } from "@/hooks/use-store-model";
import { useEffect } from "react";



const SetupPage =() => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() =>{
if (!isOpen){
  onOpen();
}
  }, [isOpen,onOpen]);
  return (
<div>
Root Pages
</div>

  );
}


export default SetupPage;