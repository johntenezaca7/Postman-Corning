var newman = require('newman');

newman.run(
  {
    collection: 'https://www.getpostman.com/collections/07f9c25f7df2188715bb',
    reporters: 'cli',
    color: 'on'
  }, 
  function (err) {
	  if (err) { 
      throw err; 
    }
    console.log('collection run complete!');  
  }
);