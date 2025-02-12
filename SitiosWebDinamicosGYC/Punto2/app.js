const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const agendaController = require('./controllers/agendaController');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', agendaController.getAllAgendas);
app.get('/add', (req, res) => res.render('add'));
app.post('/add', agendaController.createAgenda);
app.get('/edit/:id', agendaController.editAgenda);
app.post('/edit/:id', agendaController.updateAgenda);
app.get('/delete/:id', agendaController.deleteAgenda);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
