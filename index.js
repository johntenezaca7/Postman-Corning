const newman = require('newman');
const NAME = 'CORNING ENDPOINT';

newman.run({
    collection: 'https://www.getpostman.com/collections/07f9c25f7df2188715bb',
    reporters: ['cli', 'htmlextra'],
  })
  .on('start', function (err, args) { 
    console.log(`Running a collection for ${ NAME }.`);
    })
  .on('done', function (err, summary) {
    const executions = summary.run.executions[0];
    const failures = summary.run.failures[0];
    
    const collatedErrors = [err, summary.error, executions.requestError, failures].filter(error => error);

    if ( err ) {
      collatedErrors.forEach(err => {
        console.error(`Collection run encountered ERRORs: ${ JSON.stringify(err) }.`);
      })
    }
    else {
      console.log(`Collection for ${ NAME } run completed.`);
    }
  });
