import { welcome } from './utils/logger';
import { hasRactive } from './config/environment';
import { config} from './config/defaults';
import { fullExtend } from './utils/object';
import { createInstance} from './component/highlighter';

function Highlight( options ) {

  const conf = options ? fullExtend({}, [config, options], true) : config;

  if ( !hasRactive ) {
    throw new Error('You must have Ractive in order to use Picky-highlighter.');
  }

  if ( conf.debug === false ) {
    Ractive.DEBUG = false;
  } else {
    welcome();
  }

  // Creates the Ractive instance with the config and returns it.
  return createInstance( conf );

}

export default Highlight;

