import numeral from 'numeral';
import './index.css';

const courseValue = numeral(1000).format('$0,0.00');
// backticks are used below (`` not ''). This tells javascript to parse
//any variable placeholders which it finds
console.log(`I would pay ${courseValue} for this course`); // eslint-disable-line no-console
