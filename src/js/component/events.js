/**
 * On click of collapse button, collapses the array or object display and stores it in collapsed: []
 * @param  {Object} el, returns the Ractive element
 * @return {Void}, Doesn't return anything.
 */
export function collapse( el ) {

  if (!this.get('collapsed')) this.set('collapsed', []);

  if (this.get('collapsed').indexOf(el.keypath) > -1) {
    this.splice('collapsed', this.get('collapsed').indexOf(el.keypath), 1);
  } else {
    this.push('collapsed', el.keypath);
  }

}

/**
 * Sets the currently clicked / selected value
 * @param  {String} path, the current JSON path
 * @return {Void}, doesn't return anything
 */
export function showPath( path ) {

  this.set('isSelected', path.keypath);

}

/**
 * Removes all classes of the given className
 * @param  {String} name, the class that you want to remove
 * @return {Void}, doesn't return anything
 */
const removeClass = ( name ) => {

  const elems = document.querySelectorAll( name );

  [].forEach.call(elems, function( el ) {
    el.classList.remove( name.replace(/\./, '') );
  });

};

/**
 * Returns you the closest parent with a given className
 * @param  {HTMLElement} element, The element you want to find the parent of
 * @param  {String} name, the class name you want the found parent to have.
 * @return {HTMLElement}, The parent with the class Name of the element you want.
 */
const closest = ( element, name ) => {

  const base = element.node;

  const recurse = ( el ) => {

    if ( el.className && el.className.indexOf( name.replace(/\./, '' ) ) > -1 ) {
      return el;
    } else {
      return recurse( el.parentNode );
    }

  };

  return recurse( base );

};

/**
 * The Ractive mouseover / mouseleave event to show the collapsible button
 * @param  {Object} el, The Ractive representation of a node
 * @return {Void}, returns nothing
 */
export function showCollapsible( el ) {

  if ( el.original.type === 'mouseover') {

    closest(el, '.parent').className += ' active-collapse';

  } else {

    removeClass('.active-collapse');

  }

}

/**
 * What happens on render in the amin component i.e. retrieving from localStorage
 * @param  {Config} config, the main config object
 * @return {Void}, doesn't return anything
 */
export function onRender( config ) {

  // Unless localStorage is disabled, retrieve localStorage data
  if ( localStorage.highlighter && config.localStorage ) {
    this.set({loading: true, loadingMessage: config.messages.localStorage});

    this.set(JSON.parse(localStorage.getItem('highlighter')));
    this.set('loading', false);
  }

}