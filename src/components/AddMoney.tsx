import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Payment, Betaler } from '../payment';

export function AddMoney() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Payment>({
    defaultValues: { bedrag: 0, betaler: 'Maarten', omschrijving: '' },
  });

  const [payments, setPayments] = React.useState<Payment[]>([]);

  function submitHandle(data: Payment) {
    setPayments((currentPayments) => [...currentPayments, data]);
  }

  const names: string[] = ['Mike', 'Sebastiaan', 'Maarten'];
  return (
    <>
      <form onSubmit={handleSubmit(submitHandle)}>
        <label className="label">Bedrag</label>
        <input
          {...register('bedrag', { valueAsNumber: true })}
          type="number"
          className="input input-bordered w-full max-w-xs"
        ></input>

        <label className="label" htmlFor="betaler">
          Kies Betaler
        </label>
        {names.map((name) => (
          <div className="form-control">
            <label className="label cursor-pointed">
              <input
                {...register('betaler')}
                type="radio"
                value={name}
                className="radio-primary"
                id="betaler"
              ></input>
              <span className="label-text">{name}</span>
            </label>
          </div>
        ))}

        <label className="label">Omschrijving</label>
        <input
          {...register('omschrijving')}
          type="text"
          placeholder="Biertjes"
          className="input input-bordered w-full max-w-xs"
        ></input>
        <br />
        <br />
        <button className="btn btn-primary">GO</button>
      </form>

      <div className="overflow-x-auto">
        <table className="table table-xs table-zebra">
          <tbody>
            <tr>
              <th>Uitgave</th>
              <th>Betaler</th>
              <th>Omschrijving</th>
              <th>Totaal</th>
              <th />
              <th>Saldo</th>
              <th />
            </tr>
            <tr>
              <th />
              <th />
              <th />
              <th />
              {names.map((name) => (
                <th>{name}</th>
              ))}
            </tr>

            {payments.map((p) => (
              <tr>
                <th>{p.bedrag}</th>
                <th>{p.betaler}</th>
                <th>{p.omschrijving}</th>
                <th>
                  {payments
                    .slice(0, payments.indexOf(p) + 1)
                    .reduce<number>(
                      (acc: number, p: Payment) => acc + p.bedrag,
                      0
                    )}
                </th>

                {names.map((name) => (
                  <th>
                    {payments
                      .slice(0, payments.indexOf(p) + 1)
                      .reduce<number>(
                        (acc: number, p: Payment) => acc + p.bedrag,
                        0
                      ) /
                      3 -
                      payments
                        .slice(0, payments.indexOf(p) + 1)
                        .filter((p) => p.betaler === name)
                        .reduce((acc, p) => acc + p.bedrag, 0)}
                  </th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
