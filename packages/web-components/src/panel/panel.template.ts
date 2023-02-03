import { ElementViewTemplate, html } from '@microsoft/fast-element';
import type { Panel } from './panel.js';

/**
 * @internal
 */
export const template: ElementViewTemplate<Panel> = html<Panel>`<slot></slot>`;
