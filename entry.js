import {popup, removePopup} from './popup';

var p = popup();

setTimeout(() => removePopup(p), 3 * 1000);
