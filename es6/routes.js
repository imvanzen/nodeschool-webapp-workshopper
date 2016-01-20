'use strict';

export default (app) => {
  app.get('/', (req, res) => res.render('index'));
};
