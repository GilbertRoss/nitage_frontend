import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
import '@asseinfo/react-kanban/dist/styles.css'

const Board = dynamic(() => import('@asseinfo/react-kanban'), {
  ssr: false,
})

const Carousel = (props) => {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [id, setId] = useState("");
  const id_modal = null;
  const modal_flag = false;
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

  const formatDate = (source) =>{
    console.log()
    if((parseInt(source.toColumnId.split('-')[0])+1)<10){
      console.log(`${new Date().getFullYear()}-0${parseInt(source.toColumnId.split('-')[0])+1}-01`)
      return `${new Date().getFullYear()}-0${parseInt(source.toColumnId.split('-')[0])+1}-01`
    }else{
      console.log(`${new Date().getFullYear()}-${parseInt(source.toColumnId.split('-')[0])+1}-01`)
      return `${new Date().getFullYear()}-${parseInt(source.toColumnId.split('-')[0])+1}-01` 
    }
  }

  const onCardEnd = (card,destination, source) =>{
    setDate(formatDate(source))
    console.log(card)
    setId(card.id)
    console.log(id_modal)
    modal_flag= true;
    window.location = '#modify-date';
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
    }).then((response) => {response.json()}).then(response => {console.log(response);window.location = ""}).catch((err) => console.log(err.message))
  }


  const buttonClass = "py-2 px-4 border-4 border-black font-bold bg-nitage-green text-black roundedborder-4 border-black font-bold bg-nitage-green text-black rounded-lg uppercase";
  return (
    <>

  <div className="modal" id="modify-date">
  <div className="modal-box">
  <label  onClick={() => {window.location = ""}} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div className="font-bold text-2xl mt-4 mb-4">Modifica data di pagamento</div>
    <input type="date" value={date} onChange={onChangeDate}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"></input>
    <div className="modal-action">
      <label onClick={changeDate} htmlFor="modify-date" className="cursor-pointer mb-2 py-2 px-2 border-4 border-black font-bold bg-nitage-green text-black roundedborder-4 border-black font-bold bg-nitage-green text-black rounded-lg uppercase">Salva</label>
    </div>
  </div>
</div>




      
      <div className="flex flex-wrap">

<Board onCardDragEnd={onCardEnd}
  renderCard={({amount, company_id, company_name, date, id, id_fatture_cloud, next_due_date, number, status, url, vat_number}, {}) => (
    
    <div className="card w-64 bg-base-100 shadow-xl mt-4" dragging="true">
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
      <label onClick={() =>  window.location = '#modify-date'} htmlFor="edit-modal" className="cursor-pointer mb-2 py-2 px-2 border-4 border-black font-bold bg-nitage-green text-black roundedborder-4 border-black font-bold bg-nitage-green text-black rounded-lg uppercase">Modifica data</label>
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
