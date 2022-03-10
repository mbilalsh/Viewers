import id, { ViewportModuleId, SOPClassHandlerId } from './id.js';
import ConfigPoint from 'config-point';

// Register the handlers with the default mode settings
const { modeConfig } = ConfigPoint.register({
  modeConfig: {
    panels: {
      viewports: {
        pdf: {
          id,
          namespace: ViewportModuleId,
          displaySetsToDisplay: [SOPClassHandlerId],
        },
      },
    },
    sopClassHandlers: {
      pdf: { id: SOPClassHandlerId, priority: 5000 },
    },
    extensions: { pdf: id },
  },
});

export default modeConfig;
