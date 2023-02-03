import { FluentDesignSystem } from '../fluent-design-system.js';
import { Panel } from './panel.js';
import { styles } from './panel.styles.js';
import { template } from './panel.template.js';

/**
 * The Fluent Panel Element.
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-panel\>
 */
export const definition = Panel.compose({
  name: `${FluentDesignSystem.prefix}-panel`,
  template,
  styles,
});
