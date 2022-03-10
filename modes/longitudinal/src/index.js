import toolbarButtons from './toolbarButtons.js';
import { hotkeys } from '@ohif/core';
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


const { longitudinalMode } = ConfigPoint.register({
  longitudinalMode: {
    configBase: "modeConfig",
    // Add custom settings for tracked measurements
    panels: {
      leftPanels: [tracked.thumbnailList],
      rightPanels: [tracked.measurements],
      viewports: {
        images: {
          namespace: tracked.viewport,
          displaySetsToDisplay: [ohif.sopClassHandler],
        },
      },
      // Can customize sopClassHandlers here if desired
    },
  },
});

const { longitudinalMode: updatedLongitudinalMode } = ConfigPoint.register({
  longitudinalMode: {
    // id is used as a path route, shouldn't be
    id: 'viewer',
    displayName: 'Basic Viewer',
    // Lifecycle hooks
    onModeEnter: ({ servicesManager, extensionManager }) => {
      // Note: If tool's aren't initialized, this doesn't have viewport/tools
      // to "set active". This is mostly for the toolbar UI state?
      // Could update tool manager to be always persistent, and to set state
      // on load?
      const { ToolBarService } = servicesManager.services;
      const interaction = {
        groupId: 'primary',
        itemId: 'Wwwc',
        interactionType: 'tool',
        commandOptions: undefined,
      };

      ToolBarService.recordInteraction(interaction);

      ToolBarService.init(extensionManager);
      ToolBarService.addButtons(toolbarButtons);
      ToolBarService.createButtonSection('primary', [
        'MeasurementTools',
        'Zoom',
        'WindowLevel',
        'Pan',
        'Capture',
        'Layout',
        'MoreTools',
      ]);
    },
    onModeExit: () => { },
    validationTags: {
      study: [],
      series: [],
    },
    isValidMode: ({ modalities }) => {
      const modalities_list = modalities.split('\\');

      // Slide Microscopy modality not supported by basic mode yet
      return !modalities_list.includes('SM')
    },
    routes: [
      {
        path: 'longitudinal',
        /*init: ({ servicesManager, extensionManager }) => {
          //defaultViewerRouteInit
        },*/
        layoutTemplate: ({ location, servicesManager }) => {
          return {
            id: longitudinalMode.layout,
            props: longitudinalMode.panels,
          };
        },
      },
    ],
    hotkeys: [...hotkeys.defaults.hotkeyBindings],
  },

  // Add the longitudinal mode as a default
  defaultConfig: {
    modes: {
      longitudinal: longitudinalMode,
    },
  },
});

export default longitudinalMode;
