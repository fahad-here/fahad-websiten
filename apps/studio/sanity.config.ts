import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Fahad Hussain Portfolio',

  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
