var googleTrends = require('google-trends-api');
var util = require('util');
 
// var options = {
//     geo: 'country code or name',
//     date: 'yyyymm',
//     keywords: ['some', 'list', 'of', 'keywords'],
//     category: 'some category',
//     timePeriod: {
//         type: enumerated string 'hour', 'day', 'month', or 'year'
//         value: number
//     }
// }
 
// googleTrends.apiMethod(options)
// .then(function(results){
//     console.log("Here are your google trend results!", results);
// })
// .catch(function(err){
//     console.log("there was an error :(", err);
// });

// googleTrends.top30in30()
// .then(function(results){
//     console.log('here are the results', util.inspect(results, {showHidden: false, depth: null}));
// })
// .catch(function(err){
//     console.log("there was an error", err);
// });

googleTrends.relatedQueries({keyword: 'sexual assault', startTime: new Date('2011-11-01'), endTime: new Date('2011-12-01')})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})