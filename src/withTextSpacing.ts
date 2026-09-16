import type { PartialStoryFn as StoryFunction, Renderer, StoryContext } from 'storybook/internal/types';
import { useEffect, useGlobals } from 'storybook/preview-api';

import { KEY } from './constants';

export const STYLE_ID = 'storybook-addon-text-resilience-text-spacing';

const TEXT_SPACING_STYLES = `
  * {
    line-height: 1.5 !important;
    letter-spacing: 0.12em !important;
    word-spacing: 0.16em !important;
  }

  p {
    margin-bottom: 2em !important;
  }
`;

export const setTextSpacingStyles = (previewDocument: Document, isActive: boolean): (() => void) | undefined => {
  previewDocument.getElementById(STYLE_ID)?.remove();

  if (!isActive) {
    return;
  }

  const styleElement = previewDocument.createElement('style');
  styleElement.id = STYLE_ID;
  styleElement.textContent = TEXT_SPACING_STYLES;
  previewDocument.head.appendChild(styleElement);

  return () => {
    styleElement.remove();
  };
};

export const withTextSpacing = (StoryFn: StoryFunction<Renderer>, context: StoryContext<Renderer>) => {
  const [globals] = useGlobals();
  const isActive = Boolean(globals[KEY]);

  useEffect(() => {
    if (context.viewMode === 'docs') {
      return;
    }

    return setTextSpacingStyles(context.canvasElement.ownerDocument, isActive);
  }, [isActive, context.canvasElement, context.viewMode]);

  return StoryFn();
};
