// @vitest-environment happy-dom

import { afterEach, describe, expect, it } from 'vitest';

import { setTextSpacingStyles, STYLE_ID } from './withTextSpacing';

describe('setTextSpacingStyles', () => {
  afterEach(() => {
    document.head.innerHTML = '';
  });

  it('adds the WCAG text spacing styles when enabled', () => {
    const cleanup = setTextSpacingStyles(document, true);
    const styleElement = document.getElementById(STYLE_ID);

    expect(styleElement).not.toBeNull();
    expect(styleElement?.textContent).toContain('line-height: 1.5');
    expect(styleElement?.textContent).toContain('letter-spacing: 0.12em');
    expect(styleElement?.textContent).toContain('word-spacing: 0.16em');
    expect(styleElement?.textContent).toContain('margin-bottom: 2em');

    cleanup?.();

    expect(document.getElementById(STYLE_ID)).toBeNull();
  });

  it('removes its styles when disabled without affecting other styles', () => {
    const unrelatedStyle = document.createElement('style');
    unrelatedStyle.id = 'application-styles';
    document.head.appendChild(unrelatedStyle);

    setTextSpacingStyles(document, true);
    setTextSpacingStyles(document, false);

    expect(document.getElementById(STYLE_ID)).toBeNull();
    expect(document.getElementById('application-styles')).toBe(unrelatedStyle);
  });

  it('keeps only one text spacing style element', () => {
    const firstCleanup = setTextSpacingStyles(document, true);
    const secondCleanup = setTextSpacingStyles(document, true);

    expect(document.querySelectorAll(`#${STYLE_ID}`)).toHaveLength(1);

    firstCleanup?.();

    expect(document.querySelectorAll(`#${STYLE_ID}`)).toHaveLength(1);

    secondCleanup?.();

    expect(document.querySelectorAll(`#${STYLE_ID}`)).toHaveLength(0);
  });
});
