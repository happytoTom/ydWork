require('../styles/index.less');
import {data} from './data.es';
import ('./async.es').then(function(res){
  console.log(res);
});
console.log(data);