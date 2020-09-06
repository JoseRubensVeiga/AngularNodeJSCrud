import * as express from 'express';
import * as cors from 'cors';
import { Project } from '../models/Project';

const routes = express();
routes.use(express.json());
routes.use(cors());

let lastId = 1;

const projects: Project[] = [];

routes.get('/projects', (req, res) => {
  res.json({ projects });
});

routes.get('/projects/:id', (req, res) => {
  const { id } = req.params;

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return res.status(400).json({
      message: 'Projeto não encontrado.',
    });
  }

  return res.status(200).json({
    project,
  });
});

routes.post('/projects', (req, res) => {
  const { budget, finalDate, initialDate, text, title } = req.body as Project;

  const newProject = {
    id: ++lastId,
    title,
    text,
    budget,
    finalDate,
    initialDate,
  };

  projects.push(newProject);

  return res.status(200).json({
    message: 'Projeto adicionado com sucesso!',
  });
});

routes.put('/projects/:id', (req, res) => {
  const { budget, finalDate, initialDate, text, title } = req.body as Project;
  const { id } = req.params;

  const projectIndex = projects.findIndex((p) => p.id === Number(id));
  const project = projects[projectIndex];

  projects[projectIndex] = {
    ...project,
    budget,
    finalDate,
    initialDate,
    text,
    title,
  };

  return res.status(200).json({
    message: 'Projeto atualizado com sucesso!',
  });
});

routes.delete('/projects/:id', (req, res) => {
  const { id } = req.params;
  const projectIndex = projects.findIndex((p) => p.id === Number(id));

  if (projectIndex < 0) {
    return res.status(400).json({
      message: 'Projeto não encontrado.',
    });
  }

  projects.splice(projectIndex, 1);

  return res.status(200).json({
    message: 'Projeto excluído com sucesso!',
  });
});

export default routes;
