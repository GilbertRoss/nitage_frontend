const Card = (props) => {
    return(
        <>
        <div className="card w-96 bg-base-100 shadow-xl mr-4 mt-4">
               <div className="card-body">
               <span className={props.invoice.status =='not_paid' ? "indicator-item badge badge-error" : "indicator-item badge badge-success gap-8" }>{props.invoice.status}</span> 
               <h2 className="card-title">{props.invoice.company_name}</h2>
               <div>ID azienda: {props.invoice.company_id}</div>
               <div>Fattura nr: {props.invoice.number}</div>
               <div>Data: {props.invoice.date}</div>
               <div>P.Iva: {props.invoice.vat_number}</div>
               <div className="font-bold">Scadenza: {props.invoice.next_due_date}</div>
               <td> Totale: &euro; {props.invoice.amount}</td>
                                   
               <div className="flex justify-end mt-4">
                 <button onClick={() => {window.open(props.invoice.url, '_blank').focus();}} className="mb-2 mr-2 py-2 px-2 border-4 border-black font-bold bg-nitage-green text-black roundedborder-4 border-black font-bold bg-nitage-green text-black rounded-lg uppercase">Link Fattura</button>
                 <label onClick={() => setId(props.invoice.id)} htmlFor="edit-modal" className="cursor-pointer mb-2 py-2 px-2 border-4 border-black font-bold bg-nitage-green text-black roundedborder-4 border-black font-bold bg-nitage-green text-black rounded-lg uppercase">Modifica data</label>
               </div>
             </div>
           </div>
        </>
    )
}

export default Card;