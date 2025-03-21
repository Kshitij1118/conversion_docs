"use client";
import React, { ReactNode } from "react";
import { LiveblocksProvider, ClientSideSuspense } from "@liveblocks/react";
import Loader from "@/components/Loader";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <LiveblocksProvider
      authEndpoint="/api/liveblocks-auth"
      // publicApiKey={
      //   "pk_dev_SFlK6Vl2TUBOZ9UXxww67NUX8-9CFooByXWE5e-KfDnGcZLFVoxpdpiMdj-HMl19"
      // }
    >
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
