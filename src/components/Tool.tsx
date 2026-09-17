import React, { memo, useCallback } from 'react';
import { useGlobals } from 'storybook/manager-api';
import { ToggleButton } from 'storybook/internal/components';
import { KEY } from '../constants';
import { AccessibilityIcon } from '@storybook/icons';

export const Tool = memo(function TextSpacingTool() {
  const [globals, updateGlobals, storyGlobals] = useGlobals();

  const isLocked = KEY in storyGlobals;
  const isActive = !!globals[KEY];

  const toggle = useCallback(() => {
    updateGlobals({
      [KEY]: !isActive,
    });
  }, [isActive, updateGlobals]);

  return (
    <ToggleButton
      pressed={isActive}
      ariaLabel="Text spacing"
      disabled={isLocked}
      tooltip={isActive ? 'Disable text spacing' : 'Enable text spacing'}
      onClick={toggle}
    >
      <AccessibilityIcon />
    </ToggleButton>
  );
});
