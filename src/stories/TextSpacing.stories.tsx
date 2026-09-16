import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import './text-spacing.css';

const TextSpacingFixture = () => (
  <main className="text-resilience-fixture">
    <header>
      <h1>Text spacing resilience</h1>
      <p>Toggle Text spacing in the toolbar and inspect the examples for clipped, overlapping, or hidden content.</p>
    </header>

    <div className="text-resilience-grid">
      <section className="text-resilience-card">
        <h2>Wrapping text</h2>
        <p>
          This paragraph is intentionally placed inside a narrow container so that increased letter and word spacing
          produces additional line breaks.
        </p>
        <p>All content should remain visible and readable.</p>
      </section>

      <section className="text-resilience-card text-resilience-controls">
        <h2>Controls</h2>

        <button className="text-resilience-adaptive-control" type="button">
          Confirm changes
        </button>

        <button className="text-resilience-icon-control" type="button">
          <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" width="16" height="16">
            <path fill="currentColor" d="M7 1h2v8.2l2.6-2.6L13 8l-5 5-5-5 1.4-1.4L7 9.2V1ZM2 14h12v2H2v-2Z" />
          </svg>
          <span>Download report</span>
        </button>
      </section>

      <section className="text-resilience-card text-resilience-form">
        <h2>Editable content</h2>

        <label htmlFor="text-resilience-name">Project name</label>
        <input id="text-resilience-name" type="text" placeholder="Enter a descriptive project name" />

        <label htmlFor="text-resilience-description">Description</label>
        <textarea
          id="text-resilience-description"
          placeholder="Add a multiline description of this component"
          rows={3}
        />

        <span id="text-resilience-editor-label">Editable notes</span>
        <div
          className="text-resilience-editor"
          contentEditable
          role="textbox"
          aria-labelledby="text-resilience-editor-label"
          aria-multiline="true"
          suppressContentEditableWarning
        >
          This content can be edited directly. Its text should remain readable when spacing is increased.
        </div>
      </section>
    </div>
  </main>
);

const meta = {
  title: 'Text Resilience/Text Spacing',
  component: TextSpacingFixture,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TextSpacingFixture>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Examples: Story = {};
