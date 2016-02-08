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

const removeClass = ( name ) => {

  const elems = document.querySelectorAll( name );

  [].forEach.call(elems, function( el ) {
    el.classList.remove( name.replace(/\./, '') );
  });

};

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

export function showCollapsible( el, show ) {

  if ( el.original.type === 'mouseover') {

    closest(el, '.parent').className += ' active-collapse';

  } else {

    removeClass('.active-collapse');

  }

}

export function onRender( config ) {

  // Unless localStorage is disabled, retrieve localStorage data
  if ( localStorage.highlighter && config.localStorage ) {
    this.set({loading: true, loadingMessage: config.messages.localStorage});

    this.set(JSON.parse(localStorage.getItem('highlighter')));
    this.set('loading', false);
  }

}