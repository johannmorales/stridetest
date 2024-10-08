"use client";

import { createContext, useContext } from "react";

const PageMetadataContext = createContext({});

export function MetadataProvider({ metadata, children }) {
  return (
    <PageMetadataContext.Provider value={metadata}>
      {children}
    </PageMetadataContext.Provider>
  );
}

export function useMetadata() {
  return useContext(PageMetadataContext);
}
