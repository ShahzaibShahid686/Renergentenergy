import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
// import sanityConfig from '@sanity/config';


export default defineConfig({
  name: 'default',
  title: 'Sanity1',

  projectId: 'isitcwd8',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
