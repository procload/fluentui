import { attr, FASTElement, observable } from '@microsoft/fast-element';
import { ARIAGlobalStatesAndProperties } from '@microsoft/fast-foundation';
import { SelectSize } from './select.options.js';

/**
 * The base class used for constructing a fluent-slider custom element
 * @public
 */
export class Select extends FASTElement {
  constructor() {
    super();
    Object.assign(this, new ARIAGlobalStatesAndProperties()); // Assigns ARIA global states and properties to the element
  }

  /**
   * The name of the select element
   *
   * @public
   * @remarks
   * HTML Attribute: name
   */
  @attr
  public name?: string;

  /**
   * The required boolean attribute of the select element
   *
   * @public
   * @remarks
   * HTML Attribute: required
   */
  @attr({ mode: 'boolean' })
  public required?: boolean;

  /**
   * The autofocus attribute of the select
   *
   * @public
   * @remarks
   * HTML Attribute: autofocus
   */
  @attr({ mode: 'boolean' })
  public autofocus: boolean;

  /**
   * The autocomplete attribute of the select
   *
   * @public
   * @remarks
   * HTML Attribute: autocomplete
   */
  @attr
  public autocomplete?: string;

  /**
   * The size of the select
   *
   * @public
   * @remarks
   * HTML Attribute: control-size
   */
  @attr
  public controlSize?: SelectSize;

  /**
   * The disabled state of the select
   *
   * @public
   * @remarks
   * HTML Attribute: disabled
   */
  @attr({ mode: 'boolean' })
  public disabled?: boolean;

  /**
   * The options of the select
   *
   * @public
   */
  @observable
  public options?: HTMLOptionElement[];

  // Getters and setters
  // Returns the select element
  public get selectElement(): HTMLSelectElement | null {
    return this.shadowRoot?.querySelector('select') ?? null;
  }

  // Returns the index of the selected option
  public get selectedIndex(): number {
    return this.selectElement ? this.selectElement.selectedIndex : 0;
  }

  // Sets the index of the selected option
  public set selectedIndex(value: number) {
    if (this.selectElement) {
      this.selectElement.selectedIndex = value;
    }
  }

  // Returns the value of the selected option
  public get value(): string {
    return this.selectElement ? this.selectElement.value : '';
  }

  // Sets the value of the selected option
  public set value(value: string) {
    if (this.selectElement) {
      this.selectElement.value = value;
    }
  }

  // Returns the number of options in the select element
  public get length(): number {
    return this.selectElement ? this.selectElement.length : 0;
  }

  public handleChange(): void {
    this.$emit('change');
  }

  public handleInput(): void {
    this.$emit('input');
  }

  public connectedCallback(): void {
    super.connectedCallback();
    if (this.selectElement) {
      this.setOptions();
    }
  }

  // Sets the options of the select element
  private setOptions(): void {
    this.options = Array.from(this.querySelectorAll('option')) as HTMLOptionElement[];
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // Adds an option to the select element
  public add(option: HTMLOptionElement, index?: number | null): void {
    if (this.selectElement) {
      this.selectElement.add(option, index);
    }
  }

  // Removes an option from the select element
  public removeOption(index: number): void {
    if (this.selectElement) {
      this.selectElement.remove(index);
    }
  }

  public handleSlotChange() {
    // Sets the options of the select element
    this.setOptions();
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Select extends ARIAGlobalStatesAndProperties {}
// applyMixins(Select, [ARIAGlobalStatesAndProperties]);
