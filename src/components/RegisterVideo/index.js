import { useRouter } from "next/router";
import React from "react";
import { videoService } from "../../services/videoService";
import { StyledRegisterVideo } from "./styles";

// Criando um Hook proprio
function useForm({ validate, ...propsDoForm }) {
  const [values, setValues] = React.useState(propsDoForm.initialValues);
  const [thumb, setThumb] = React.useState("");
  const [errors, setErros] = React.useState({});
  const [touched, setTouched] = React.useState({});

  // Roda quando um estado é alterado
  React.useEffect(() => {
    validadeFieldInput(values);
  }, [values]);

  function validadeFieldInput(values) {
    setErros(validate(values));
  }

  return {
    values,
    thumb,
    errors,
    setErros,
    touched,
    handleChange: (event) => {
      const value = event.target.value;
      const name = event.target.name;
      if (name === "url") {
        const regex =
          /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;

        regex.test(value)
          ? setThumb(
              `https://img.youtube.com/vi/${value.split("v=")[1]}/hqdefault.jpg`
            )
          : setThumb("");
      }
      setValues({
        //  ...values, Espalha os dados para os outros
        ...values,
        [name]: value,
      });
    },
    handlerBlue: (event) => {
      const name = event.target.name;
      setTouched({
        ...touched,
        [name]: true,
      });
    },
    clearForm() {
      setThumb("");
      setValues({});
      setErros({});
      setTouched({});
    },
  };
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: { titulo: "", url: "", playlist: "" },
    validate: (values) => {
      const errors = {};
      const regex =
        /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
      if (values.titulo === "") {
        errors.titulo = "Esse campo é obrigatório";
      }
      if (values.url === "") {
        errors.url = "Esse campo é obrigatório";
      } else if (!regex.test(values.url)) {
        errors.url = "Adicione uma url do youtube valida";
      }
      if (values.playlist === "") {
        errors.playlist = "Esse campo é obrigatorio";
      }
      return errors;
    },
  });
  const [formVisivel, setFormVisivel] = React.useState(false);
  const service = videoService();

  /*
    # Sempre se preocupar com o que vai fazer!
    # Escrever o passso a passo do que é preciso ser feito
    ## O Que precisams para o form funcionar ?
    - x pegar os dados, que precisam vir do state
      - x titulo
      - x url do video
    - x precisamos ter um onSubmit do nosso form
    - x Limpar o formulário após o submit
  */
  return (
    <StyledRegisterVideo>
      <button
        type="button"
        className="add-video"
        onClick={() => {
          setFormVisivel(true);
        }}
      >
        +
      </button>
      {/* Ternário */}
      {/* Operador de curto circuito (&& -> Ele so continua o que vem depois, se for true) */}
      {formVisivel ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            service.postVideo({
              values: formCadastro.values,
              thumb: formCadastro.thumb,
            });
            setFormVisivel(false);
            formCadastro.clearForm();
            formCadastro.setErros({});
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => {
                setFormVisivel(false);
              }}
            >
              X
            </button>
            <input
              type="text"
              name="titulo"
              placeholder="Titulo do vídeo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
              onBlur={formCadastro.handlerBlue}
            />
            {formCadastro.touched.titulo && formCadastro.errors.titulo && (
              <span className="error-input">{formCadastro.errors.titulo}</span>
            )}
            <input
              type="text"
              name="url"
              placeholder="URL"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
              onBlur={formCadastro.handlerBlue}
            />
            {formCadastro.touched.url && formCadastro.errors.url && (
              <span className="error-input">{formCadastro.errors.url}</span>
            )}
            <input
              type="text"
              name="playlist"
              placeholder="Digite o nome da playlist (nova ou já existente)"
              value={formCadastro.values.playlist}
              onChange={formCadastro.handleChange}
              onBlur={formCadastro.handlerBlue}
            />
            {formCadastro.touched.playlist && formCadastro.errors.playlist && (
              <span className="error-input">
                {formCadastro.errors.playlist}
              </span>
            )}
            <button type="submit">Cadastrar</button>
            {formCadastro.thumb !== "" ? (
              <img src={formCadastro.thumb} />
            ) : (
              false
            )}
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}
