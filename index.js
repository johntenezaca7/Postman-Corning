const newman = require('newman');
const NAME = 'CORNING ENDPOINT';

newman.run({
    collection: 'https://www.getpostman.com/collections/07f9c25f7df2188715bb',
    reporters: ['cli', 'htmlextra']
  })
  .on('start', 
    function (err, args) { 
      console.log(`Running a collection for ${ NAME }.`);
    }
  )
  .on('done', 
    function (err, summary) {
      if (err || summary.error) {
        console.error(`Collection run encountered an ERROR: ${ err || summary.error }.`);
      }
      else {
        console.log(`Collection for ${ NAME } run completed.`);
      }
    }
  );
