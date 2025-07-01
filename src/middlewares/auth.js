const authAdmin = (req, res, next) => {
  const token = 'xyz';
  const isAdminAuthenticated = token === 'xyz';
  if (!isAdminAuthenticated) {
    res.status(401).send('Error');
  }
  next();
};

const authUser = (req, res, next) => {
  const token = 'xyz';
  console.log('Validating the token for /user ...');
  const isAdminAuthenticated = token === 'xyz';
  if (!isAdminAuthenticated) {
    res.status(401).send('Error');
  }
  next();
};

module.exports = { authAdmin, authUser };
