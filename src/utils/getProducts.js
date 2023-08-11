

const getProducts = ()=>{

    let results = [];
    
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keypmwv06rjUX1e3Y'}).base('app7ovt7FzIEqvR2e');
  
  base('Products').select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 15,
      view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
  
      records.forEach(function(record) {
          //console.log('Retrieved', record.get('name'));
          const {id, fields} = record;
            const {
                name,
                featured,
                price,
                colors,
                brand,
                description,
                category,
                shipping,
                images
            } = fields;
            const url = images[0].url;
            results.push({id,name,featured,price,colors,company:brand,description,category,shipping,image:url});
      });
  
      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
  
  }, function done(err) {
      if (err) { console.error(err); return; }
  });
  console.log(results);
  return results;
}

export default getProducts;