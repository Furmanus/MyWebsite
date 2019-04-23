import './styles/entry.less';
import {
    attachEvents,
    setYearInFooter,
    initVideo,
} from './scripts/pages';

(() => {
    attachEvents();
    // setYearInFooter();
    initVideo();
})();