import { hasConsole, hasCollapsedConsole } from '../config/environment';
import { config } from '../config/defaults';

const logger =  {};

logger.debug = function () { if( hasConsole && config.debug ) console.debug.apply(console, arguments); };

logger.log   = function () { if( hasConsole && config.debug ) console.log.apply(console, arguments); };

logger.warn  = function () { if( hasConsole && config.debug ) console.warn.apply(console, arguments); };


let intro = [`Picky-highlight <@version@> in debug mode.`];
let message = `
Hello, you are running Picky-highlight <@version@> in debug mode.
This will help you to identify any problems in your application.
'debug mode' is a global option which will disable debug mode for each
instance. You can disable it when declaring a new instance. For example,
new Highlighter({debug: false});
For documentation head to the wiki:
  https://github.com/danjford/picky-highlight/wiki
If you have found any bugs, create an issue for us:
  https://github.com/danjford/picky-highlight/issues
`;

/**
 * The welcome function gives a message to the user letting the know
 * some key things about the Highlighter.
 * @return {Void}, nothing returned
 */
function welcome () {

  if (hasConsole && config.debug ) {

    console[ hasCollapsedConsole ? 'groupCollapsed' : 'log' ].apply( console, intro );

    console.log( message );

    if ( hasCollapsedConsole ) {
      console.groupEnd( intro );
    }

  }

}

export { logger, welcome};