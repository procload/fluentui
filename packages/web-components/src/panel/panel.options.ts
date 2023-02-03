import { ValuesOf } from '@microsoft/fast-foundation';

/**
 * PanelSize constants
 * @public
 */
export const PanelSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  full: 'full',
  customWidth: 'custom-width',
} as const;

/**
 * The type for PanelSize
 * The width of the panel
 * @public
 */
export type PanelSize = ValuesOf<typeof PanelSize>;
