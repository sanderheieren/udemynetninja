const users = [
  {
    name: 'sander', premium: true
  },
  {
    name: 'einar', premium: true
  },
  {
    name: 'thomas', premium: true
  },
  {
    name: 'darren', premium: false
  },
  {
    name: 'milos', premium: false
  }
]

const getPremiumUsers = users => {
  return users.filter(user => user.premium === true)
}

export { getPremiumUsers, users as default }