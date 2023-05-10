
/*Ex 1*/
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/*Ex 2*/
const numeros = [2, 4, 6, 8];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log(`Soma: ${soma}`);

/*Ex 3*/
function removerNegativos(array) {
  return array.filter(numero => numero >= 0);
}

const numeros = [-1, 1, -2, 2, -3, 3];
const numerosSemNegativos = removerNegativos(numeros);

console.log(numerosSemNegativos);

/*Ex 4*/
git remote add origin https://github.com/TrenAcetCoder/TDE0805.git
git branch -M main
git push -u origin main




/*TDE 09/05/2023*/

const express = require('express');

const app = express();

app.get('/health', (req, res) => {
  res.send('server is running');
});

// Configurar a porta de escuta
const PORT = process.env.PORT || 3000;

// Iniciar a aplicação em modo de desenvolvimento usando o Nodemon
if (process.env.NODE_ENV !== 'production') {
  const nodemon = require('nodemon');
  nodemon({
    script: 'index.js',
    ignore: ['node_modules/**'],
  });
}

// Iniciar a aplicação em modo de produção
app.listen(PORT, () => {
  console.log(`Aplicação escutando na porta ${PORT}`);
});




/* TDE 10/05/2023*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const tasks = [
  {
    id: 1,
    name: 'Comprar leite',
    description: 'Ir no mercado da esquina e comprar leite',
    isDone: false,
  },
  {
    id: 2,
    name: 'Fazer exercícios',
    description: 'Fazer exercícios físicos por 30 minutos',
    isDone: true,
  },
  {
    id: 3,
    name: 'Estudar programação',
    description: 'Estudar programação por 1 hora',
    isDone: false,
  },
];

let nextTaskId = 4;

// GET /tasks: exibe a lista de tarefas cadastradas.
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks: cria uma nova tarefa.
app.post('/tasks', (req, res) => {
  const newTask = req.body;
  newTask.id = nextTaskId;
  nextTaskId++;
  tasks.push(newTask);
  res.json(newTask);
});

// PUT /tasks/:id: atualiza uma tarefa existente.
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index !== -1) {
    tasks[index] = {
      id: taskId,
      name: updatedTask.name,
      description: updatedTask.description,
      isDone: updatedTask.isDone,
    };
    res.json(tasks[index]);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// DELETE /tasks/:id: exclui uma tarefa existente.
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index !== -1) {
    tasks.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});