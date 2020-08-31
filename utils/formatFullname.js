module.exports = (fullName) => {
  if (typeof(fullName) !== 'string' || fullName.split(' ').length !== 2 || !(/^[a-z A-Z]+$/.test(fullName))) return 'Error';
  const [ firstName, lastName ] = fullName.split(' ');
  return firstName[0].toUpperCase + firstName.slice(1).toLowerCase() + lastName[0].toUpperCase + lastName.slice(1).toLowerCase() ;
};
