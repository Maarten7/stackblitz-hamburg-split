import * as React from 'react';

export function StatusPayPerson({ name }) {
  return <th>{name}</th>;
}

export function ExpanseRow({ amount }) {
  const splitted: number = amount / 3;
  return (
    <tr>
      <td>{amount}</td>
      <td>{splitted}</td>
      <td>{splitted}</td>
      <td>{splitted}</td>
    </tr>
  );
}

export function Overview() {
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs table-zebra">
        <tbody>
        <tr>
          <th>Uitgave</th>
          <StatusPayPerson name="Mike" />
          <StatusPayPerson name="Sebastiaan" />
          <StatusPayPerson name="Maarten" />
        </tr>
        <ExpanseRow amount={60} />
        <ExpanseRow amount={51} />
        <ExpanseRow amount={33} />
        </tbody>
      </table>
    </div>
  );
}
