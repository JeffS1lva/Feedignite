# Ensinos React

## Props 
- Props são propriedades imutaveis, que não podem ser mudadas. Diferente do useState que podem ser diferentemente encapsulados em variaveis. Props também é utilizada para reaproveitar components com valores de entradas de dados diferentes através das props.
- Para reutilizar o component mas com valores diferentes através das props é necessário que as propriedades que foram colocadas no component, sejam iguais quando o component for reutilizado e for reatribuido um novo valor:

#### App.JSX

- Exemplo: 
- Post <ins>author</ins>="Jefferson Silva" <ins>content</ins>="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit optio reprehenderit, vero iure rerum corporis! Adipisci quae fuga quibusdam cupiditate aliquid, recusandae odit doloribus tenetur? Corporis quo impedit aut tenetur!" />
- Post <ins>author</ins>="Gabriel Roger" <ins>content</ins>="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />

#### Post.JSX

- (h1 <ins>{props.author}</ins> h1)
- (p <ins>{props.content}</ins> p)
________________________________________________________________________________________________
- ##### Imagens são importadas com base na rota do arquivo, porém na tag da img o "src" não pode ser feito com aspas mas com chaves json exemplo (img src={}).
