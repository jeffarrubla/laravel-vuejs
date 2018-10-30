/*import fontawersome from '@fortawesome/fontawesome';
import faCaretUp from 'fortawesome/fontawesome-free-solid/faCaretUp';
import faCaretDown from 'fortawesome/fontawesome-free-solid/faCaretDown';
import faStar from 'fortawesome/fontawesome-free-solid/faStar';
import faCheck from 'fortawesome/fontawesome-free-solid/faCheck';

fontawesome.library.add([faCaretUp,faCaretDown,faStar,faCheck])*/
    import {library, dom} from '@fortawesome/fontawesome-svg-core';
    import {faCaretUp} from '@fortawesome/free-solid-svg-icons';
    import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
    import {faStar} from '@fortawesome/free-solid-svg-icons';
    import {faCheck} from '@fortawesome/free-solid-svg-icons';

    library.add([faCaretDown, faCaretUp, faCheck, faStar]);

    dom.watch();