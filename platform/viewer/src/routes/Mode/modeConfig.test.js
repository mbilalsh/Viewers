import { iteratee } from 'lodash';
import modeConfig from './modeConfig';

const { sopClassHandlers } = modeConfig;

describe('modeConfig', () => {
  it('sop class handlers must be an array', () => {
    expect(Array.isArray(sopClassHandlers)).toBe(true);
  })

  // This assertion will be modified later, but for now just checking the basic order
  it('dicom-sr must be the first item', () => {
    expect(sopClassHandlers[0]).toBe('org.ohif.dicom-sr.sopClassHandlerModule.dicom-sr');
  });
})
