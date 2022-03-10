import id, { ViewportModuleId, SOPClassHandlerId } from './id.js';
import ConfigPoint from 'config-point';

// Register the handlers with the default mode settings
const { modeConfig } = ConfigPoint.register({
  modeConfig: {
    panels: {
      viewports: {
        video: {
          id,
          namespace: ViewportModuleId,
          displaySetsToDisplay: [SOPClassHandlerId],
        },
      },
    },
    sopClassHandlers: {
      video: { id: SOPClassHandlerId, priority: 0 },
    },
    extensions: { video: id },

  },
});

export default modeConfig;
