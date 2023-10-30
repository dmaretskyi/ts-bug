import { forwardRef, type PropsWithChildren } from "react";

import { type ExportedType } from "@ts-bug/b";

export type Props = PropsWithChildren<{
  // Tile props.
  active?: ExportedType;
}>;

export const Component = forwardRef<HTMLLIElement, Props>(() => {
  return null;
});
