import { ValuesOf } from '@microsoft/fast-foundation';

/**
 * ProgressBarThickness Constants
 * @public
 */
export const ProgressBarThickness = {
  medium: 'medium',
  large: 'large',
} as const;

/**
 * Applies bar thickness to the content
 * @public
 */
export type ProgressBarThickness = ValuesOf<typeof ProgressBarThickness>;

/**
 * ProgressBarShape Constants
 * @public
 */
export const ProgressBarShape = {
  rounded: 'rounded',
  rectangular: 'rectangular',
} as const;

/**
 * Applies bar shape to the content
 * @public
 */
export type ProgressBarShape = ValuesOf<typeof ProgressBarShape>;

/**
 * ProgressBarValidationState Constants
 * @public
 */
export const ProgressBarValidationState = {
  null: null,
  success: 'success',
  warning: 'warning',
  error: 'error',
} as const;

/**
 * Applies validation state to the content
 * @public
 */
export type ProgressBarValidationState = ValuesOf<typeof ProgressBarValidationState>;
