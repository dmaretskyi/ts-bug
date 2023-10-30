//
// Copyright 2023 DXOS.org
//

import { forwardRef, type PropsWithChildren } from 'react';

import { type MosaicActiveType } from '@ts-bug/b';


export type SectionProps = PropsWithChildren<{
  // Tile props.
  active?: MosaicActiveType;
}>;

export const Section = forwardRef<HTMLLIElement, SectionProps>(
  () => {
    
    return null
  },
);
