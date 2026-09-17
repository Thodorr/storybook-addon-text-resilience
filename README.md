# Storybook Addon Text Resilience

A Storybook addon for manually checking how UI components respond to increased text spacing.

The addon adds a toolbar control that applies the text spacing values from
[WCAG 2.2 Success Criterion 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
inside the story preview.

## Installation

Install the addon as a development dependency:

```sh
npm install --save-dev storybook-addon-text-resilience
```

Add it to your Storybook configuration:

```ts
// .storybook/main.ts

const config = {
  addons: ['storybook-addon-text-resilience'],
};

export default config;
```

## Usage

Open a story in the Canvas view and activate the **Text spacing** toolbar control.

The mode remains active while navigating between stories. Disable the control to remove the spacing
overrides and restore the original presentation.

The addon applies the following values:

| Property          | Applied value |
| ----------------- | ------------: |
| Line height       |         `1.5` |
| Paragraph spacing |         `2em` |
| Letter spacing    |      `0.12em` |
| Word spacing      |      `0.16em` |

Inspect the rendered component for text that becomes clipped, hidden, or overlapping and verify that
all content and controls remain readable and operable.

This is a manual stress-test mode. It helps expose text-spacing problems but does not automatically
determine WCAG conformance.

### Enable the mode for a story

The mode can also be enabled through Storybook globals:

```ts
export const TextSpacingPreview = {
  globals: {
    textResilience: true,
  },
};
```

A story-level value takes precedence over the toolbar control for that story.

## Current scope

- Applies spacing inside the story preview document
- Works independently of the component renderer
- Remains active across story navigation
- Cleans up its injected styles when disabled
- Supports Canvas stories; Docs view is not modified
- Does not produce an automated accessibility verdict

## Development

Install dependencies:

```sh
npm install
```

Start the local development environment:

```sh
npm run start
```

Run the project checks:

```sh
npm run test
npm run lint
npm run typecheck
npm run build
npm run build-storybook
```

## License

MIT
