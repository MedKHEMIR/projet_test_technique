var getdetailsbyname = require('./lib/getdetailsbyname');
var recherche = require('./lib/recherche');
var DATA = require('./constants/data');

const args = {
    filterArgument: getdetailsbyname.getdatabybame(process.argv, 'filter'),
    countArgument: getdetailsbyname.getdatabybame(process.argv, 'count')
}


const filterdetails = {
    animalName: (args.filterArgument.found && args.filterArgument.value ) ? args.filterArgument.value : null,
    count: args.countArgument.found
}
const datafilter = recherche.recherchecountry(DATA.data,filterdetails.animalName,filterdetails.count);

console.log(JSON.stringify(datafilter));