import ConfigPoint from 'config-point';

const ohif = {
  layout: 'org.ohif.default.layoutTemplateModule.viewerLayout',
  sopClassHandler: 'org.ohif.default.sopClassHandlerModule.stack',
  hangingProtocols: 'org.ohif.default.hangingProtocolModule.default',
};

const tracked = {
  measurements: 'org.ohif.measurement-tracking.panelModule.trackedMeasurements',
  thumbnailList: 'org.ohif.measurement-tracking.panelModule.seriesList',
  viewport: 'org.ohif.measurement-tracking.viewportModule.cornerstone-tracked',
};

const dicomsr = {
  sopClassHandler: 'org.ohif.dicom-sr.sopClassHandlerModule.dicom-sr',
  viewport: 'org.ohif.dicom-sr.viewportModule.dicom-sr',
};

/**
 * Define a default modeConfig that can be extended independently by inheritting
 * from this using the configBase: "modeConfig" to get the defaults here.
 */
const { modeConfig } = ConfigPoint.register({
  modeConfig: {
    panels: {
      leftPanels: [tracked.thumbnailList],
      rightPanels: [tracked.measurements],
      viewports: [
        {
          id: 'images',
          namespace: tracked.viewport,
          displaySetsToDisplay: [ohif.sopClassHandler],
        },
        {
          namespace: dicomsr.viewport,
          displaySetsToDisplay: [dicomsr.sopClassHandler],
        },
      ],
    },
    sopClassHandlers: {
      configOperation: 'sort',
      sortKey: 'priority',
      valueReference: 'id',
      value: [
        { id: ohif.sopClassHandler, priority: 10000 },
        { id: dicomsr.sopClassHandler, priority: 1000 },
      ],
    },
    hangingProtocols: [ohif.hangingProtocols],
    layout: ohif.layout,
    extensions: [
      'org.ohif.default',
      'org.ohif.cornerstone',
      'org.ohif.measurement-tracking',
      'org.ohif.dicom-sr',
    ],
  },
});

export default modeConfig;
