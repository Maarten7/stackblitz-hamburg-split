import * as React from "react"

export function PayPerson ({name}) {
  return <div className="form-control">
      <label className="label cursor-pointed">
        <input type="radio" name="person" className="radio-primary"></input>
        <span className="label-text">{name}</span>
      </label>
    </div>
}

export function ChoosePayPerson () {
  return <>
  <label className="label">Kies Betaler</label>
    <PayPerson name={"Mike"} />
    <PayPerson name={"Maarten"} />
    <PayPerson name={"Sebastiaan"} />
  </>
}

export function AddAmount () {
  return  <>
  <label className="label">Bedrag</label>
  <input type="number" className="input input-bordered w-full max-w-xs"></input>
  </>
}

export function AddDescription () {
  return <>
  <label className="label">Omschrijving</label>
  <input type="text" placeholder="Biertjes" className="input input-bordered w-full max-w-xs"></input>
  </>
}


export function AddMoney () {
  return <form>
  <AddAmount />
  <ChoosePayPerson />
  <AddDescription />
  <br/>
  <br/>
  <button className="btn btn-primary">GO</button>
  </form>
}
