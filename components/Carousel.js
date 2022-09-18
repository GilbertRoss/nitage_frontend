import { useEffect, useState } from "react";

const Card = (props) => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState();
  const [id, setId] = useState();
  const months = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre'
  ]

  const onChangeDate = (event) => {
    setDate(event.target.value)
  }

  const changeDate = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/invoices`, {
      method: 'PATCH',
      body: JSON.stringify({
        id: id,
        date: date,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => {response.json()}).then(response => {console.log(response); window.location.reload()}).catch((err) => console.log(err.message))
  }


  const buttonClass = "py-2 px-4 border-4 border-black font-bold bg-nitage-green text-black roundedborder-4 border-black font-bold bg-nitage-green text-black rounded-lg uppercase";
  return (
    <>
    <input type="checkbox" id="edit-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
  <label htmlFor="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div className="font-bold text-2xl mt-4 mb-4">Modifica data di pagamento</div>
    <input type="date" value={date} onChange={onChangeDate}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"></input>
    <div className="modal-action">
      <label onClick={changeDate} htmlFor="edit-modal" className="cursor-pointer mb-2 py-2 px-2 border-4 border-black font-bold bg-nitage-green text-black roundedborder-4 border-black font-bold bg-nitage-green text-black rounded-lg uppercase">Salva</label>
    </div>
  </div>
</div>
      <div className="flex justify-center w-full py-8 gap-2">
        <button onClick={() => setMonth(0)} className={buttonClass}>Gennaio</button>
        <button onClick={() => {setMonth(1)}} className={buttonClass}>Febbraio</button>
        <button onClick={() => {setMonth(2)}} className={buttonClass}>Marzo</button>
        <button onClick={() => {setMonth(3)}} className={buttonClass}>Aprile</button>
        <button onClick={() => {setMonth(4)}} className={buttonClass}>Maggio</button>
        <button onClick={() => {setMonth(5)}} className={buttonClass}>Giugno</button>
        <button onClick={() => {setMonth(6)}} className={buttonClass}>Luglio</button>
        <button onClick={() => {setMonth(7)}} className={buttonClass}>Agosto</button>
        <button onClick={() => {setMonth(8)}} className={buttonClass}>Settembre</button>
        <button onClick={() => {setMonth(9)}} className={buttonClass}>Ottobre</button>
        <button onClick={() => {setMonth(10)}} className={buttonClass}>Novembre</button>
        <button onClick={() => {setMonth(11)}} className={buttonClass}>Dicembre</button>

      </div>
      <div className="font-bold text-4xl mb-8">{months[month]}</div>
      <div className="flex flex-wrap">
      {
           [...props.invoices.invoices].map((invoice, k) => {
             if(new Date(invoice.next_due_date).getMonth() == month && new Date(invoice.next_due_date).getFullYear() == new Date().getFullYear() ){
             return (
            <>
               <div key={k} className="card w-96 bg-base-100 shadow-xl mr-4 mt-4">
               <div className="card-body">
               <span className={invoice.status =='not_paid' ? "indicator-item badge badge-error" : "indicator-item badge badge-success gap-8" }>{invoice.status}</span> 
               <h2 className="card-title">{invoice.company_name}</h2>
               <div>ID azienda: {invoice.company_id}</div>
               <div>Fattura nr: {invoice.number}</div>
               <div>Data: {invoice.date}</div>
               <div>P.Iva: {invoice.vat_number}</div>
               <div className="font-bold">Scadenza: {invoice.next_due_date}</div>
               <td> Totale: &euro; {invoice.amount}</td>
                                   
               <div className="flex justify-end mt-4">
                 <button onClick={() => {window.open(invoice.url, '_blank').focus();}} className="mb-2 mr-2 py-2 px-2 border-4 border-black font-bold bg-nitage-green text-black roundedborder-4 border-black font-bold bg-nitage-green text-black rounded-lg uppercase">Link Fattura</button>
                 <label onClick={() => setId(invoice.id)} htmlFor="edit-modal" className="cursor-pointer mb-2 py-2 px-2 border-4 border-black font-bold bg-nitage-green text-black roundedborder-4 border-black font-bold bg-nitage-green text-black rounded-lg uppercase">Modifica data</label>
               </div>
             </div>
           </div>
           </>
             )
           }
           })
         }
    </div>
    </>
  );
};

export default Card;
