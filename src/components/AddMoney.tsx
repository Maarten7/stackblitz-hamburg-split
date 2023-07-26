import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';


export function AddMoney() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { bedrag: 0, betaler: 'Mike', omschrijving: '' },
  });

  const names: string[] = ['Mike', 'Sebastiaan', 'Maarten'];
  return (
    <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
      <label className="label">Bedrag</label>
      <input
        {...register('bedrag')}
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
        {...register("omschrijving")}
        type="text"
        placeholder="Biertjes"
        className="input input-bordered w-full max-w-xs"
      ></input>
      <br />
      <br />
      <button className="btn btn-primary">GO</button>
    </form>
  );
}
