import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Grid, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import Form from "../../Components/form";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ErrorIcon from '@mui/icons-material/Error';
import useStyles from "./Styles";
import { format } from "date-fns";

const schema = yup.object().shape({
  nome: yup.string().required("Campo obrigatório").min(3, 'Mínimo 3 caracteres'),
  descricao: yup.string().required("Campo obrigatório").min(3, 'Mínimo 3 caracteres'),
  dataConclusao: yup.string().required("A data é obrigatória"),
});

const Home = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const classes = useStyles();
  const [tarefas, setTarefas] = useState([]);
  const [editTarefas, setEditTarefas] = useState(null);

  useEffect(() => {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    setTarefas(tarefasSalvas);
  }, []);

  const onSubmit = (data) => {
    if (editTarefas !== null) {
      const novasTarefas = [...tarefas];
      novasTarefas[editTarefas] = data;
      setTarefas(novasTarefas);
      localStorage.setItem("tarefas", JSON.stringify(novasTarefas));
      setEditTarefas(null);
    } else {
      setTarefas((prevTarefas) => [...prevTarefas, data]);
      localStorage.setItem("tarefas", JSON.stringify([...tarefas, data]));
    }
    reset();
  };

  const handleEdit = (indice) => {
    const tarefaSelecionada = tarefas[indice];
    setValue("nome", tarefaSelecionada.nome);
    setValue("descricao", tarefaSelecionada.descricao);
    setValue("dataConclusao", tarefaSelecionada.dataConclusao);
    setValue("importante", tarefaSelecionada.importante || false);
    setEditTarefas(indice);
  };

  const handleDelete = (indice) => {
    const novasTarefas = tarefas.filter((_, i) => i !== indice);
    setTarefas(novasTarefas);
    localStorage.setItem("tarefas", JSON.stringify(novasTarefas));
  };

  return (
    <Grid container className={classes.container}>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        errors={errors}
        register={register}
        editTarefas={editTarefas}
      />
      <Grid item xs={12}>
      <List className={classes.list}>
          {tarefas.map((tarefa, indice) => (
            <ListItem key={indice} className={classes.cardContainer}>
              <ListItemText
                className={classes.listaItem}
                primary={tarefa && tarefa.nome ? tarefa.nome : ""}
                secondary={`Data: ${
                  tarefa && tarefa.dataConclusao
                    ? format(new Date(tarefa.dataConclusao), "dd/MM/yyyy")
                    : ""
                } | Descrição: ${tarefa ? tarefa.descricao : ""}`}
              />
              <ListItemSecondaryAction>
                {tarefa.importante && (
                  <IconButton>
                    <ErrorIcon color="error" />
                  </IconButton>
                )}
                <IconButton onClick={() => handleEdit(indice)}>
                  <EditIcon  className={classes.editIcon}/>
                </IconButton>
                <IconButton onClick={() => handleDelete(indice)}>
                  <DeleteIcon className={classes.deleteIcon}/>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Home;