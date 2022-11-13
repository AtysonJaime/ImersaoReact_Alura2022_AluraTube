# Lembretes (Estudos)

- React sempre carregar as informações de cima para baixo, ou seja, sempre vira o pai, por exemplo a Home, e logo em seguida seus componentes, por exemplo Menu, e em seguida os componente do Menu, por exemplo o Search.

- Variaveis podem ser criadas antes do return;

- Passar promps:

```js
<Timeline playlists={propriedade} />
```

- Caso esteja em um arquivo global, so importar o arquivo e chamar os dados.

- State em React dado da seguinda maneira:

```js
React.useState("");
```

- Necessario utilizar no Pai maior e passar para os demais filhos via Prop Drilling.

- Sempre utilizar Array, ou seja, .map o tempo todo; Para filtar, utilizar .filter é uma otima solução para fazer buscas e etc!

- é Melhor ter varios provides que resolvar pequenas coisas especificas, do que apenas um que resolva tudo.

- Contexto deve ser importado com {}

- Hooks(React.useState(), React.useContext())
