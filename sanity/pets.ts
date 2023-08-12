

export default {
    name: 'pet',
    type: 'document',
      title: 'Pet',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'color',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'age',
        type: 'number',
        title: 'age'
      },
      
      {
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },


      fields: [
       
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
        
      ]
    }
  ]
  }