/// <reference types="cypress" />
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { initWidgets } from '../../src/widgets';

describe('widgets', () => {
  it('initializes widgets in view', () => {
    const widgets: unknown[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const view: any = {
      ui: {
        add(w: unknown) {
          widgets.push(w);
        },
      },
    };

    const layer = new FeatureLayer();

    initWidgets({ view, layer });
    expect(widgets).to.have.length(2);
  });
});
