import { config, spinner } from '../config/defaults';
import { hasWindow } from '../config/environment';
import { collapse, showPath, showCollapsible, onRender } from './events.js';
import templates from '../builtTemplates.js';

/**
 * Creates and returns the Ractive instance of the highlighter.
 * @param  {Object} config, The configuration object inserted from initialisation
 * @return {Object}, the created Ractive object.
 */
export function createInstance( config ) {

  // The default data for the Ractive object
  const data = { data: config.data || null, collapsed: [], isSelected: '', loading: config.loading };

  if ( config.theme ) {
    data.theme = config.theme;
  }

  if ( !config.spinner ) {
    data.spinner = spinner;
  }

  // The Ractive object
  const main = new Ractive({
    el: config.el || 'body',
    template: templates.main,
    partials: {
      array: templates.array,
      object: templates['object'],
      attr: templates.attr,
      recurse: templates.recurse,
      collapse: templates.collapse
    },
    onrender: function() { onRender.call(this, config); },
    data
  });

  // Add the events to the Ractive object
  main.on({
    collapse,
    showPath,
    showCollapsible
  });

  if ( hasWindow && config.localStorage ) {

    window.addEventListener('beforeunload', () => {

      localStorage.setItem('highlighter', JSON.stringify( main.get() || data ));

    });

  }

  return main;

}