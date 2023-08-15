import { expect, test } from '@playwright/test';
import type { Locator, Page } from '@playwright/test';
import { fixtureURL } from '../helpers.tests.js';
import type { CounterBadge } from './counter-badge.js';

test.describe('CounterBadge component', () => {
  let page: Page;
  let element: Locator;
  let root: Locator;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    element = page.locator('fluent-counter-badge');
    root = page.locator('#root');

    await page.goto(fixtureURL('components-badge-counter-badge--counter-badge'));
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('should not render icon when iconPosition is none', async () => {
    await root.evaluate(node => {
      node.innerHTML = /* html */ `
                  <fluent-counter-badge count="100"></fluent-counter-badge>
              `;
    });

    const shadowContent = await page.evaluate(() => {
      const element = document.querySelector('fluent-counter-badge');
      const startSlot = element?.shadowRoot?.querySelector('slot[name="start"]') as HTMLSlotElement;
      const endSlot = element?.shadowRoot?.querySelector('slot[name="end"]') as HTMLSlotElement;
      return {
        startContent: startSlot ? startSlot.assignedNodes()[0]?.textContent || '' : '',
        endContent: endSlot ? endSlot.assignedNodes()[0]?.textContent || '' : '',
      };
    });

    expect(shadowContent.startContent).toBe('');
    expect(shadowContent.endContent).toBe('');
  });

  test('should render icon at start when iconPosition is start', async () => {
    await root.evaluate(node => {
      node.innerHTML = /* html */ `
                    <fluent-counter-badge count="100"><span slot="start">Icon</span></fluent-counter-badge>
                `;
    });

    const shadowContent = await page.evaluate(() => {
      const element = document.querySelector('fluent-counter-badge');
      const startSlot = element?.shadowRoot?.querySelector('slot[name="start"]') as HTMLSlotElement;
      const endSlot = element?.shadowRoot?.querySelector('slot[name="end"]') as HTMLSlotElement;
      return {
        startContent: startSlot ? startSlot.assignedNodes()[0]?.textContent || '' : '',
        endContent: endSlot ? endSlot.assignedNodes()[0]?.textContent || '' : '',
      };
    });

    expect(shadowContent.startContent).not.toBe('');
    expect(shadowContent.endContent).toBe('');
  });

  test('should render icon at end when iconPosition is end', async () => {
    await root.evaluate(node => {
      node.innerHTML = /* html */ `
                        <fluent-counter-badge count="100"><span slot="end">Icon</span></fluent-counter-badge>
                    `;
    });

    const shadowContent = await page.evaluate(() => {
      const element = document.querySelector('fluent-counter-badge');
      const startSlot = element?.shadowRoot?.querySelector('slot[name="start"]') as HTMLSlotElement;
      const endSlot = element?.shadowRoot?.querySelector('slot[name="end"]') as HTMLSlotElement;
      return {
        startContent: startSlot ? startSlot.assignedNodes()[0]?.textContent || '' : '',
        endContent: endSlot ? endSlot.assignedNodes()[0]?.textContent || '' : '',
      };
    });

    expect(shadowContent.startContent).toBe('');
    expect(shadowContent.endContent).not.toBe('');
  });

  test('should handle overflow count property correctly', async () => {
    await root.evaluate(node => {
      node.innerHTML = /* html */ `
                <fluent-counter-badge count="101" overflow-count="100"></fluent-counter-badge>
            `;
    });

    await expect(element).toHaveAttribute('overflow-count', '100');

    const shadowContent = await page.evaluate(() => {
      const element = document.querySelector('fluent-counter-badge');
      return element?.shadowRoot?.textContent;
    });

    expect(shadowContent).toContain('100+');
  });

  test('should reflect the count attribute properly', async () => {
    await root.evaluate(node => {
      node.innerHTML = /* html */ `
                <fluent-counter-badge count="5"></fluent-counter-badge>
            `;
    });
    await expect(element).toHaveAttribute('count', '5');

    const shadowContent = await page.evaluate(() => {
      const element = document.querySelector('fluent-counter-badge');
      return element?.shadowRoot?.textContent;
    });

    expect(shadowContent).toContain('5');
  });

  test('should show 0 when showZero attribute is present and value is 0', async () => {
    await root.evaluate(node => {
      node.innerHTML = /* html */ `
                <fluent-counter-badge show-zero count="0"></fluent-counter-badge>
            `;
    });
    await expect(element).toHaveAttribute('show-zero', '');
    await expect(element).toHaveJSProperty('showZero', true);

    const shadowContent = await page.evaluate(() => {
      const element = document.querySelector('fluent-counter-badge');
      return element?.shadowRoot?.textContent;
    });
    expect(shadowContent).toContain('0');
  });

  test('should render correctly with dot attribute', async () => {
    await root.evaluate(node => {
      node.innerHTML = /* html */ `
                  <fluent-counter-badge dot count="5"></fluent-counter-badge>
              `;
    });

    await expect(element).toHaveJSProperty('dot', true);

    const shadowContent = await page.evaluate(() => {
      const element = document.querySelector('fluent-counter-badge');
      return element?.shadowRoot?.textContent;
    });
    expect(shadowContent).not.toContain('5');
  });

  test('should reflect shape attribute and update property', async () => {
    await element.evaluate((node: CounterBadge) => {
      node.shape = 'circular';
    });
    await expect(element).toHaveAttribute('shape', 'circular');
    await expect(element).toHaveJSProperty('shape', 'circular');

    await element.evaluate((node: CounterBadge) => {
      node.shape = 'rounded';
    });
    await expect(element).toHaveAttribute('shape', 'rounded');
    await expect(element).toHaveJSProperty('shape', 'rounded');
  });

  test('should reflect color attribute and update property', async () => {
    await element.evaluate((node: CounterBadge) => {
      node.color = 'brand';
    });
    await expect(element).toHaveAttribute('color', 'brand');
    await expect(element).toHaveJSProperty('color', 'brand');

    await element.evaluate((node: CounterBadge) => {
      node.color = 'danger';
    });
    await expect(element).toHaveAttribute('color', 'danger');
    await expect(element).toHaveJSProperty('color', 'danger');

    await element.evaluate((node: CounterBadge) => {
      node.color = 'important';
    });
    await expect(element).toHaveAttribute('color', 'important');
    await expect(element).toHaveJSProperty('color', 'important');

    await element.evaluate((node: CounterBadge) => {
      node.color = 'informative';
    });
    await expect(element).toHaveAttribute('color', 'informative');
    await expect(element).toHaveJSProperty('color', 'informative');

    await element.evaluate((node: CounterBadge) => {
      node.color = 'severe';
    });
    await expect(element).toHaveAttribute('color', 'severe');
    await expect(element).toHaveJSProperty('color', 'severe');

    await element.evaluate((node: CounterBadge) => {
      node.color = 'success';
    });
    await expect(element).toHaveAttribute('color', 'success');
    await expect(element).toHaveJSProperty('color', 'success');

    await element.evaluate((node: CounterBadge) => {
      node.color = 'subtle';
    });
    await expect(element).toHaveAttribute('color', 'subtle');
    await expect(element).toHaveJSProperty('color', 'subtle');

    await element.evaluate((node: CounterBadge) => {
      node.color = 'warning';
    });
    await expect(element).toHaveAttribute('color', 'warning');
    await expect(element).toHaveJSProperty('color', 'warning');
  });

  test('should reflect size attribute and update property', async () => {
    await element.evaluate((node: CounterBadge) => {
      node.size = 'tiny';
    });
    await expect(element).toHaveAttribute('size', 'tiny');
    await expect(element).toHaveJSProperty('size', 'tiny');

    await element.evaluate((node: CounterBadge) => {
      node.size = 'extra-small';
    });
    await expect(element).toHaveAttribute('size', 'extra-small');
    await expect(element).toHaveJSProperty('size', 'extra-small');

    await element.evaluate((node: CounterBadge) => {
      node.size = 'small';
    });
    await expect(element).toHaveAttribute('size', 'small');
    await expect(element).toHaveJSProperty('size', 'small');

    await element.evaluate((node: CounterBadge) => {
      node.size = 'medium';
    });
    await expect(element).toHaveAttribute('size', 'medium');
    await expect(element).toHaveJSProperty('size', 'medium');

    await element.evaluate((node: CounterBadge) => {
      node.size = 'large';
    });
    await expect(element).toHaveAttribute('size', 'large');
    await expect(element).toHaveJSProperty('size', 'large');

    await element.evaluate((node: CounterBadge) => {
      node.size = 'extra-large';
    });
    await expect(element).toHaveAttribute('size', 'extra-large');
    await expect(element).toHaveJSProperty('size', 'extra-large');
  });

  test('should reflect appearance attribute and update property', async () => {
    await element.evaluate((node: CounterBadge) => {
      node.appearance = 'filled';
    });
    await expect(element).toHaveAttribute('appearance', 'filled');
    await expect(element).toHaveJSProperty('appearance', 'filled');

    await element.evaluate((node: CounterBadge) => {
      node.appearance = 'ghost';
    });
    await expect(element).toHaveAttribute('appearance', 'ghost');
    await expect(element).toHaveJSProperty('appearance', 'ghost');
  });
});
