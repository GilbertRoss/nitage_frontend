import { useEffect, useState } from "react";
import Card from './Card';
import dynamic from 'next/dynamic'
import '@asseinfo/react-kanban/dist/styles.css'

const Board = dynamic(() => import('@asseinfo/react-kanban'), {
  ssr: false,
})

const Carousel = (props) => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState();
  const [id, setId] = useState();
  const [modal, setModal] = useState(false);
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

  const onCardEnd = (card,destination, source) =>{
    console.log(card)
    console.log(source)
    console.log(destination)
    setId(card.id);
    console.log(id)
    setModal(true);
    console.log(modal)
    window.location = '#my-modal-2';

  }

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
        'Authorization': sessionStorage.getItem('auth'),
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
{modal && <>
  <div className="modal" id="my-modal-2">
  <div className="modal-box">
  <label htmlFor="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div className="font-bold text-2xl mt-4 mb-4">Modifica data di pagamento</div>
    <input type="date" value={date} onChange={onChangeDate}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"></input>
    <div className="modal-action">
      <label onClick={changeDate} htmlFor="edit-modal" className="cursor-pointer mb-2 py-2 px-2 border-4 border-black font-bold bg-nitage-green text-black roundedborder-4 border-black font-bold bg-nitage-green text-black rounded-lg uppercase">Salva</label>
    </div>
  </div>
</div>
</>
}


      
      <div className="flex flex-wrap">

<Board onCardDragEnd={onCardEnd}
  renderCard={({amount, company_id, company_name, date, id, id_fatture_cloud, next_due_date, number, status, url, vat_number}, {}) => (
    
    <div className="card w-96 bg-base-100 shadow-xl mr-4 mt-4" dragging="true">
    <div className="card-body">
    <span className={status =='not_paid' ? "indicator-item badge badge-error" : "indicator-item badge badge-success gap-8" }>{status}</span> 
    <h2 className="card-title">{company_name}</h2>
    <div>ID azienda: {company_id}</div>
    <div>Fattura nr: {number}</div>
    <div>Data: {date}</div>
    <div>P.Iva: {vat_number}</div>
    <div className="font-bold">Scadenza: {next_due_date}</div>
    <td> Totale: &euro; {amount}</td>
                        
    <div className="mt-4">
      <button onClick={() => {window.open(url, '_blank').focus();}} className="mb-6 mr-2 py-2 px-2 border-4 border-black font-bold bg-nitage-green text-black roundedborder-4 border-black font-bold bg-nitage-green text-black rounded-lg uppercase">Link Fattura</button>
      <label onClick={() => setId(id)} htmlFor="edit-modal" className="cursor-pointer mb-2 py-2 px-2 border-4 border-black font-bold bg-nitage-green text-black roundedborder-4 border-black font-bold bg-nitage-green text-black rounded-lg uppercase">Modifica data</label>
    </div>
  </div>
</div>
   
  )}
>
{props.board}
</Board>
    </div>
    </>
  );
};

export default Carousel;
