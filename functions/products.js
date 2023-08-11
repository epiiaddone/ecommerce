const dotenv = require('dotenv');
dotenv.config();

// Netlify functions are not working
// how to debug this stuff??

// const Airtable = require('airtable-node');
// const airtable = new Airtable({apiKey: process.env.AIRTABLE_API_KEY})
// .base(process.env.AIRTABLE_BASE)
// .table(process.env.AIRTABLE_TABLE);


exports.handler = async (event, context, cb) => {
    console.log(process.env.AIRTABLE_API_KEY, process.env.AIRTABLE_BASE, process.env.AIRTABLE_TABLE );
    try{
        const response= await airtable.list({maxRecords:15});

        const products = response.records.map((product) => {
            const {id, fields} = product;
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
            return {id,name,featured,price,colors,company:brand,description,category,shipping,image:url}
        });
        return {
            statusCode:200,
            body: JSON.stringify(products),
        };
    } catch (error) {
        console.log(error)
        return {
            statusCode:500,
            body: 'There was an error',
        };
    }
};