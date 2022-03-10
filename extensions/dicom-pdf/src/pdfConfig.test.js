// Import the modeConfig to ensure the test requirements are loaded
import '../../../platform/viewer/src/routes/Mode/modeConfig.js';
import pdfConfig from './pdfConfig';
import id, { SOPClassHandlerId } from './id';

const { sopClassHandlers, panels } = pdfConfig;
const { viewports } = panels;

describe('videoConfig', () => {
  // This assertion will be modified later, but for now just checking the basic order
  it('dicom-pdf sop class handler must be loaded', () => {
    expect(sopClassHandlers.find(id => id === SOPClassHandlerId)).toBe(SOPClassHandlerId);
  });

  it('adds a viewport for pdf', () => {
    expect(viewports.find(key => { return key.id == id })).toMatchObject({
      displaySetsToDisplay: [SOPClassHandlerId],
    });
  });
})
