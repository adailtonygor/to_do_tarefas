import React from "react";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import useStyles from "./Styles";

const Form = ({ onSubmit, errors, register, editTarefas }) => {
  const classes = useStyles();
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <Typography className={classes.titulo} variant="h5">
        Tarefas
      </Typography>
      <TextField
        label="Nome da Tarefa"
        {...register("nome")}
        helperText={errors.nome?.message}
        error={!!errors.nome}
        InputLabelProps={{ shrink: true }}
        className={classes.nomeTarefa}
      />
      <TextField
        label="Descrição"
        {...register("descricao")}
        helperText={errors.descricao?.message}
        error={!!errors.descricao}
        InputLabelProps={{ shrink: true }}
        className={classes.nomeTarefa}
      />
      <TextField
        type="date"
        {...register("dataConclusao")}
        helperText={errors.dataConclusao?.message}
        error={!!errors.dataConclusao}
        className={classes.dataConclusao}
      />
      <FormControlLabel
        control={<Checkbox {...register("importante")} color="error" />}
        label="Importante"
        className={classes.labelImportante}
      />
      <Button type="submit" variant="contained" color="success">
        {editTarefas !== null ? "Salvar" : "Adicionar"}
      </Button>
    </form>
  );
};

export default Form;
