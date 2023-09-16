"use client";

import { useCallback, useRef, ReactNode, useState } from "react";

import { useRouter } from "next/navigation";

import Image from "next/image";

const Modal = ({ children }: { children: ReactNode }) => {
  const [display, setdisplay] = useState(true);

  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const onDismiss = useCallback(() => {
    router.push("/services");
    setdisplay(false);
  }, [router]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  return (
    <div
      ref={overlay}
      className={`${display ? "block" : "hidden"} modal `}
      onClick={handleClick}
    >
      <button
        type="button"
        onClick={onDismiss}
        className="absolute lg:top-8 top-3 right-3"
      >
        <Image src="/close-white.svg" width={17} height={17} alt="close" />
      </button>
      <div ref={wrapper} className="modal_wrapper">
        {children}
      </div>
    </div>
  );
};

export default Modal;
