const INITIAL_STATE = {
  logo: '',
  cart: '',
  nav: [
    {name: 'Fotolivros', link: 'fotolivros'},
    {name: 'Fotos', link: 'fotos'},
    {name: 'Foto Quadros', link: 'foto-quadros'},
    {name: 'Foto Presentes', link: 'foto-presentes'},
    {name: 'Calendários', link: 'calendarios'},
    {name: 'Promoções', link: 'promocoes'}
  ]
}

const header = ( state = INITIAL_STATE, action) => {

  switch(action.type) {
    case 'x':
      return { ... state}

    default:
      return state;
  }

  return state
}

export default header;