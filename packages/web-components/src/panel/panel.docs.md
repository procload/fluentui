# Component Name

Panel

## Component Description

The panel gives users a quick entry point to configuration and information. It should be used when retaining context is beneficial to users. An overlay is optional depending on whether or not interacting with the background content is beneficial to the user’s context/scenario. An overlay makes the panel blocking and signifies that the users full attention is required when making configurations.

## Design Spec

[Link to Design Spec in Figma](https://www.figma.com/file/V2sDk36xZfp8tFhb53DfsT/Panel?node-id=2365%3A524305&t=C0Ug6Go5GArQaqZz-11)

## Engineering Spec

### Inputs

@attr size: small; medium; large; custom width; full width
@attr custom-width

### Outputs

NA

### Events

NA

### Slots

- Header: Includes header content, close button, additional buttons
- Body (default): The main content area
- Footer: Sits below body slot and usually contains action buttons

### CSS Variables

NA

## Accessibility

- [x] Find the matching component through WCAG's patterns: https://www.w3.org/WAI/ARIA/apg/patterns/https://www.w3.org/WAI/ARIA/apg/patterns/
- [ ] Are there any accessibility elements unique to this component?
- [ ] List ARIA attributes
  - [ ] aria-role: region
- [ ] Does the component support 400% zoom?
  - [ ] Yes, the content becomes full width at 320px and 256px is the starting viewport height
  - [ ] The header and footer are no longer sticky and scroll with the content at 400% zoom

## Preparation

- [x] [Find the base FAST Component](https://explore.fast.design/components/fast-accordion) this component will inherit from and document
  - No FAST component available
- [x] [Check the Fluent UI React V9 Component Spec](https://github.com/microsoft/fluentui/tree/master/specs) for differences and document
  - Fluent UI React V9 not completed
- [x] [Fluent UI React V9 Storybook](https://aka.ms/fluentui-storybook) for implementation differences and document
  - Fluent UI React V9 not completed
- [x] [Open GitHub issues related to component](https://github.com/microsoft/fluentui/wiki/Component-Implementation-Guide#find-open-issues-on-github)
  - [Issue #26598](https://github.com/microsoft/fluentui/issues/26598)
- [ ] [Component Spec authored](https://github.com/microsoft/fluentui/wiki/Component-Implementation-Guide#component-spec) and [reviewed](https://github.com/microsoft/fluentui/wiki/Component-Implementation-Guide#spec-review)

## Implementation

- [ ] [Initial documentation](https://github.com/microsoft/fluentui/wiki/Component-Implementation-Guide#documentation)
  - [ ] [Storybook stories](https://github.com/microsoft/fluentui/wiki/Component-Implementation-Guide#storybook-stories)
- [ ] [Component released as unstable](https://github.com/microsoft/fluentui/wiki/Component-Implementation-Guide#unstable-release) from `@fluentui/web-components/unstable`
- [ ] Uses design tokens for styling
- [ ] Renders correctly in High Contrast mode

## Validation

- [ ] [Add tests](https://github.com/microsoft/fluentui/wiki/Component-Implementation-Guide#tests)
  - [ ] Unit and conformance tests
  - [ ] Bundle size fixtures
  - [ ] Performance test scenario
  - [ ] Accessibility behavior tests
  - [ ] Create an issue and run [manual accessibility tests](https://github.com/microsoft/fluentui/wiki/Manual-Accessibility-Review-Checklist): [link to issue]
- [ ] [Validate with partners](https://github.com/microsoft/fluentui/wiki/Component-Implementation-Guide#validation)
- [ ] [Finalize documentation](https://github.com/microsoft/fluentui/wiki/Component-Implementation-Guide#finalize-documentation)
  - [ ] Review and add any missing storybook stories
  - [ ] Finalize migration guide
  - [ ] In package.json: Remove the alpha/beta tag from the version number in package.json
  - [ ] In package.json: Change beachball's `disallowedChangeTypes` to `"major", "prerelease"`
