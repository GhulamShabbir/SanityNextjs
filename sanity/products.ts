


const Product = {
    name: 'product',
    type: 'document',
      title: 'product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price'
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category'
      },
      {
        name: 'picture',
        type: 'string',
        title: 'Picture'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      
      {
        title: 'Names',
        name: 'names',
        type: 'array',
        of: [{type: 'string'}]
      },  

      {
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [{type: 'block'}]
      },  

      {
        title: 'movie',
        name: 'movie',
        type: 'boolean'
      },

      {
        title: `Person in another dataset"`,
        name: 'personReference',
        type: 'crossDatasetReference',
        dataset: 'production',
        to: [
          {
            type: 'person',
            preview: {
              select: {
                title: 'name',
                media: 'image',
              },
            },
          },
        ],
      },

      {
        title: 'Release date',
        name: 'releaseDate',
        type: 'date'
      },

      {
        title: 'Launch Scheduled At',
        name: 'launchAt',
        type: 'datetime'
      }

     
      

    ]
  }
  export default Product