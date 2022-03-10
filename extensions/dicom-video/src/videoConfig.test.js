// Import the modeConfig to ensure the test requirements are loaded
import '../../../platform/viewer/src/routes/Mode/modeConfig.js';
import videoConfig from './videoConfig';
import id, { SOPClassHandlerId } from './id';

const { sopClassHandlers, panels } = videoConfig;
const { viewports } = panels;

describe('videoConfig', () => {
  // This assertion will be modified later, but for now just checking the basic order
  it('dicom-video must be the first sop class handler', () => {
    expect(sopClassHandlers[0]).toBe(SOPClassHandlerId);
  });

  it('adds a viewport for video', () => {
    expect(viewports.find(key => { return key.id == id })).toMatchObject({
      displaySetsToDisplay: [SOPClassHandlerId],
    });
  });
})
