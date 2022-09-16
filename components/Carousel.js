const Card = (props) => {
  return (
    <>
      <div className="flex justify-center w-full py-8 gap-2">
        <a href="#0" className="btn btn-md">Gennaio</a>
        <a href="#1" className="btn btn-md">Febbraio</a>
        <a href="#2" className="btn btn-md">Marzo</a>
        <a href="#3" className="btn btn-md">Aprile</a>
        <a href="#4" className="btn btn-md">Maggio</a>
        <a href="#5" className="btn btn-md">Giugno</a>
        <a href="#6" className="btn btn-md">Luglio</a>
        <a href="#7" className="btn btn-md">Agosto</a>
        <a href="#8" className="btn btn-md">Settembre</a>
        <a href="#9" className="btn btn-md">Ottobre</a>
        <a href="#10" className="btn btn-md">Novembre</a>
        <a href="#11" className="btn btn-md">Dicembre</a>

      </div>
      <div className="flex flex-wrap">
        {() =>  {
          if(window.location.hash == '0'){
            console.log(window.location.hash)
            return (
              <div id="0" className= "w-1/4">
         
         {
           [...props.invoices.invoices].map((invoice, k) => {
             if(new Date(invoice.next_due_date).getMonth() == 0 && new Date(invoice.next_due_date).getFullYear() == new Date().getFullYear() ){
             return (
               <div key={k} className="card w-96 bg-base-100 shadow-xl mr-4">
               <div className="card-body">
               <h2 className="card-title">{invoice.company_name}</h2>
               <div>ID azienda: {invoice.company_id}</div>
               <div>Fattura nr: {invoice.number}</div>
               <div>Data: {invoice.date}</div>
               <div>P.Iva: {invoice.vat_number}</div>
               <div className="font-bold">Scadenza: {invoice.next_due_date}</div>
               <td> Totale: &euro; {invoice.amount}</td>
                                   <td><div className="badge badge-error gap-8">
                                       {invoice.status}
                                   </div></td>
               <div className="card-actions justify-end">
                 <button onClick={() => {window.open(invoice.url, '_blank').focus();}} className="btn btn-primary">Link Fattura</button>
               </div>
             </div>
           </div>
             )
           }
           })
         }
         
   </div>  
            )
          }
        } 
         
      }
       
        <div id="1" className= "w-1/4">
         
              {
                [...props.invoices.invoices].map((invoice, k) => {
                  if(new Date(invoice.next_due_date).getMonth() == 1 && new Date(invoice.next_due_date).getFullYear() == new Date().getFullYear() ){
                  return (
                    <div className="card w-96 bg-base-100 shadow-xl mr-4">
                    <div className="card-body">
                    <h2 className="card-title">{invoice.company_name}</h2>
                    <div>ID azienda: {invoice.company_id}</div>
                    <div>Fattura nr: {invoice.number}</div>
                    <div>Data: {invoice.date}</div>
                    <div>P.Iva: {invoice.vat_number}</div>
                    <div className="font-bold">Scadenza: {invoice.next_due_date}</div>
                    <td> Totale: &euro; {invoice.amount}</td>
                                        <td><div className="badge badge-error gap-2">
                                            {invoice.status}
                                        </div></td>
                    <div className="card-actions justify-end">
                      <button onClick={() => {window.open(invoice.url, '_blank').focus();}} className="btn btn-primary">Link Fattura</button>
                    </div>
                  </div>
                </div>
                  )
                }
                })
              }
              
        </div>
        <div id="2" className= "w-1/4">
         
              {
                [...props.invoices.invoices].map((invoice, k) => {
                  if(new Date(invoice.next_due_date).getMonth() == 2 && new Date(invoice.next_due_date).getFullYear() == new Date().getFullYear() ){
                  return (
                    <div className="card w-96 bg-base-100 shadow-xl mr-4">
                    <div className="card-body">
                    <h2 className="card-title">{invoice.company_name}</h2>
                    <div>ID azienda: {invoice.company_id}</div>
                    <div>Fattura nr: {invoice.number}</div>
                    <div>Data: {invoice.date}</div>
                    <div>P.Iva: {invoice.vat_number}</div>
                    <div className="font-bold">Scadenza: {invoice.next_due_date}</div>
                    <td> Totale: &euro; {invoice.amount}</td>
                                        <td><div className="badge badge-error gap-2">
                                            {invoice.status}
                                        </div></td>
                    <div className="card-actions justify-end">
                      <button onClick={() => {window.open(invoice.url, '_blank').focus();}} className="btn btn-primary">Link Fattura</button>
                    </div>
                  </div>
                </div>
                  )
                }
                })
              }
              
        </div>
        <div id="3" className= "w-1/4">
         
              {
                [...props.invoices.invoices].map((invoice, k) => {
                  if(new Date(invoice.next_due_date).getMonth() == 3 && new Date(invoice.next_due_date).getFullYear() == new Date().getFullYear() ){
                  return (
                    <div className="card w-96 bg-base-100 shadow-xl mr-4">
                    <div className="card-body">
                    <h2 className="card-title">{invoice.company_name}</h2>
                    <div>ID azienda: {invoice.company_id}</div>
                    <div>Fattura nr: {invoice.number}</div>
                    <div>Data: {invoice.date}</div>
                    <div>P.Iva: {invoice.vat_number}</div>
                    <div className="font-bold">Scadenza: {invoice.next_due_date}</div>
                    <td> Totale: &euro; {invoice.amount}</td>
                                        <td><div className="badge badge-error gap-2">
                                            {invoice.status}
                                        </div></td>
                    <div className="card-actions justify-end">
                      <button onClick={() => {window.open(invoice.url, '_blank').focus();}} className="btn btn-primary">Link Fattura</button>
                    </div>
                  </div>
                </div>
                  )
                }
                })
              }
              
        </div>
        <div id="4" className= "w-1/4">
         
              {
                [...props.invoices.invoices].map((invoice, k) => {
                  if(new Date(invoice.next_due_date).getMonth() == 4 && new Date(invoice.next_due_date).getFullYear() == new Date().getFullYear() ){
                  return (
                    <div className="card w-96 bg-base-100 shadow-xl mr-4">
                    <div className="card-body">
                    <h2 className="card-title">{invoice.company_name}</h2>
                    <div>ID azienda: {invoice.company_id}</div>
                    <div>Fattura nr: {invoice.number}</div>
                    <div>Data: {invoice.date}</div>
                    <div>P.Iva: {invoice.vat_number}</div>
                    <div className="font-bold">Scadenza: {invoice.next_due_date}</div>
                    <td> Totale: &euro; {invoice.amount}</td>
                                        <td><div className="badge badge-error gap-2">
                                            {invoice.status}
                                        </div></td>
                    <div className="card-actions justify-end">
                      <button onClick={() => {window.open(invoice.url, '_blank').focus();}} className="btn btn-primary">Link Fattura</button>
                    </div>
                  </div>
                </div>
                  )
                }
                })
              }
              
        </div><div id="5" className= "w-1/4">
         
         {
           [...props.invoices.invoices].map((invoice, k) => {
             if(new Date(invoice.next_due_date).getMonth() == 5 && new Date(invoice.next_due_date).getFullYear() == new Date().getFullYear() ){
             return (
               <div className="card w-96 bg-base-100 shadow-xl mr-4">
               <div className="card-body">
               <h2 className="card-title">{invoice.company_name}</h2>
               <div>ID azienda: {invoice.company_id}</div>
               <div>Fattura nr: {invoice.number}</div>
               <div>Data: {invoice.date}</div>
               <div>P.Iva: {invoice.vat_number}</div>
               <div className="font-bold">Scadenza: {invoice.next_due_date}</div>
               <td> Totale: &euro; {invoice.amount}</td>
                                        <td><div className="badge badge-error gap-2">
                                            {invoice.status}
                                        </div></td>
               <div className="card-actions justify-end">
               <button onClick={() => {window.open(invoice.url, '_blank').focus();}} className="btn btn-primary">Link Fattura</button>
               </div>
             </div>
           </div>
             )
           }
           })
         }
         
   </div><div id="6" className= "w-1/4">
         
         {
           [...props.invoices.invoices].map((invoice, k) => {
             if(new Date(invoice.next_due_date).getMonth() == 6 && new Date(invoice.next_due_date).getFullYear() == new Date().getFullYear() ){
             return (
               <div className="card w-96 bg-base-100 shadow-xl mr-4">
               <div className="card-body">
               <h2 className="card-title">{invoice.company_name}</h2>
               <div>ID azienda: {invoice.company_id}</div>
               <div>Fattura nr: {invoice.number}</div>
               <div>Data: {invoice.date}</div>
               <div>P.Iva: {invoice.vat_number}</div>
               <div className="font-bold">Scadenza: {invoice.next_due_date}</div>
               <td> Totale: &euro; {invoice.amount}</td>
                                        <td><div className="badge badge-error gap-2">
                                            {invoice.status}
                                        </div></td>
               <div className="card-actions justify-end">
               <button onClick={() => {window.open(invoice.url, '_blank').focus();}} className="btn btn-primary">Link Fattura</button>
               </div>
             </div>
           </div>
             )
           }
           })
         }
         
   </div><div id="7" className= "w-1/4">
         
         {
           [...props.invoices.invoices].map((invoice, k) => {
             if(new Date(invoice.next_due_date).getMonth() == 7 && new Date(invoice.next_due_date).getFullYear() == new Date().getFullYear() ){
             return (
               <div className="card w-96 bg-base-100 shadow-xl mr-4">
               <div className="card-body">
               <h2 className="card-title">{invoice.company_name}</h2>
               <div>ID azienda: {invoice.company_id}</div>
               <div>Fattura nr: {invoice.number}</div>
               <div>Data: {invoice.date}</div>
               <div>P.Iva: {invoice.vat_number}</div>
               <div className="font-bold">Scadenza: {invoice.next_due_date}</div>
               <td> Totale: &euro; {invoice.amount}</td>
                                        <td><div className="badge badge-error gap-2">
                                            {invoice.status}
                                        </div></td>
               <div className="card-actions justify-end">
               <button onClick={() => {window.open(invoice.url, '_blank').focus();}} className="btn btn-primary">Link Fattura</button>
               </div>
             </div>
           </div>
             )
           }
           })
         }
         
   </div><div id="8" className="  h-96 grid-cols-8">
         
         {
           [...props.invoices.invoices].map((invoice, k) => {
             if(new Date(invoice.next_due_date).getMonth() == 8 && new Date(invoice.next_due_date).getFullYear() == new Date().getFullYear() ){
             return (
               <div className="card min-w-min w-96 h-96 bg-base-100 shadow-xl mr-4">
               <div className="card-body">
               <h2 className="card-title">{invoice.company_name}</h2>
               <div>ID azienda: {invoice.company_id}</div>
               <div>Fattura nr: {invoice.number}</div>
               <div>Data: {invoice.date}</div>
               <div>P.Iva: {invoice.vat_number}</div>
               <div className="font-bold">Scadenza: {invoice.next_due_date}</div>
               <td> Totale: &euro; {invoice.amount}</td>
                                        <td><div className="badge badge-error gap-2">
                                            {invoice.status}
                                        </div></td>
               <div className="card-actions justify-end">
               <button onClick={() => {window.open(invoice.url, '_blank').focus();}} className="btn btn-primary">Link Fattura</button>
               </div>
             </div>
           </div>
             )
           }
           })
         }
         
   </div>
   <div id="9" className= "w-1/4">
         
              {
                [...props.invoices.invoices].map((invoice, k) => {
                  if(new Date(invoice.next_due_date).getMonth() == 9 && new Date(invoice.next_due_date).getFullYear() == new Date().getFullYear() ){
                  return (
                    <div className="card w-96 bg-base-100 shadow-xl mr-4">
                    <div className="card-body">
                    <h2 className="card-title">{invoice.company_name}</h2>
                    <div>ID azienda: {invoice.company_id}</div>
                    <div>Fattura nr: {invoice.number}</div>
                    <div>Data: {invoice.date}</div>
                    <div>P.Iva: {invoice.vat_number}</div>
                    <div className="font-bold">Scadenza: {invoice.next_due_date}</div>
                    <td> Totale: &euro; {invoice.amount}</td>
                                        <td><div className="badge badge-error gap-2">
                                            {invoice.status}
                                        </div></td>                    <div className="card-actions justify-end">
                      <button onClick={() => {window.open(invoice.url, '_blank').focus();}} className="btn btn-primary">Link Fattura</button>
                    </div>
                  </div>
                </div>
                  )
                }
                })
              }
              
        </div>
        <div id="10" className= "w-1/4">
         
              {
                [...props.invoices.invoices].map((invoice, k) => {
                  if(new Date(invoice.next_due_date).getMonth() == 10 && new Date(invoice.next_due_date).getFullYear() == new Date().getFullYear() ){
                  return (
                    <div className="card w-96 bg-base-100 shadow-xl mr-4">
                    <div className="card-body">
                    <h2 className="card-title">{invoice.company_name}</h2>
                    <div>ID azienda: {invoice.company_id}</div>
                    <div>Fattura nr: {invoice.number}</div>
                    <div>Data: {invoice.date}</div>
                    <div>P.Iva: {invoice.vat_number}</div>
                    <div className="font-bold">Scadenza: {invoice.next_due_date}</div>
                    <td> Totale: &euro; {invoice.amount}</td>
                                        <td><div className="badge badge-error gap-2">
                                            {invoice.status}
                                        </div></td>
                    <div className="card-actions justify-end">
                    <button onClick={() => {window.open(invoice.url, '_blank').focus();}} className="btn btn-primary">Link Fattura</button>
                    </div>
                  </div>
                </div>
                  )
                }
                })
              }
              
        </div>
        <div id="11" className= "w-1/4">
         
              {
                [...props.invoices.invoices].map((invoice, k) => {
                  if(new Date(invoice.next_due_date).getMonth() == 11 && new Date(invoice.next_due_date).getFullYear() == new Date().getFullYear() ){
                  return (
                    <div className="card w-96 bg-base-100 shadow-xl mr-4">
                    <div className="card-body">
                    <h2 className="card-title">{invoice.company_name}</h2>
                    <div>ID azienda: {invoice.company_id}</div>
                    <div>Fattura nr: {invoice.number}</div>
                    <div>Data: {invoice.date}</div>
                    <div>P.Iva: {invoice.vat_number}</div>
                    <div className="font-bold">Scadenza: {invoice.next_due_date}</div>
                    <td> Totale: &euro; {invoice.amount}</td>
                                        <td><div className="badge badge-error gap-2">
                                            {invoice.status}
                                        </div></td>
                    <div className="card-actions justify-end">
                      <button onClick={() => {window.open(invoice.url, '_blank').focus();}} className="btn btn-primary">Link Fattura</button>
                    </div>
                  </div>
                </div>
                  )
                }
                })
              }
              
        </div>
      </div>

    </>
  );
};

export default Card;
