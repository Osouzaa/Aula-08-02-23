import React from "react";

interface Props {}

interface State {
  a: number;
  b: number;
  add?: number | null
}

class Ex1 extends React.Component<Props, State> {
  state = {
    a: 0,
    b: 0,
    add: null
  };

  render() {
    const { a, b, add } = this.state;
    return (
      <form action="#">
        <div>
          <label htmlFor="number1"> Valor 1</label>
          <input
            type="number"
            id="number1"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              this.setState({
                a: Number(event.target.value),
              });
            }}
          />
        </div>

        <div>
          <label htmlFor="number2"> Valor 2</label>
          <input
            type="number"
            id="number2"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              this.setState({
                b: Number(event.target.value),
              });
            }}
          />
        </div>

        <button onClick={() => {
            this.setState({
                add: a + b
            })
        }}>Soma Valores</button>

        {!!add && <h1>A soma de A + B = {add} </h1> }
      </form>
    );
  }
}

export default Ex1;
