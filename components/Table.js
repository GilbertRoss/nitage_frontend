import { useEffect } from "react";

const Table = (props) => {
    useEffect(() => {
        window.location.replace('#8')
    },[])
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>Data</th>
                        <th>Nome</th>
                        <th>P.IVA</th>
                        <th>Scadenza</th>
                        <th>Totale</th>
                        <th>Status</th>
                        <th>Link Fattura</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        [...props.invoices.invoices].map((invoice, k) => {
                            if (new Date(invoice.next_due_date).getFullYear() != new Date().getFullYear()) {
                                return (


                                    <tr>
                                        <th>{invoice.number}</th>
                                        <td>{invoice.date}</td>
                                        <td>{invoice.company_name}</td>
                                        <td>{invoice.vat_number}</td>
                                        <td className="font-bold">{invoice.next_due_date}</td>
                                        <td> &euro; {invoice.amount}</td>
                                        <td><div className="badge badge-error gap-2">
                                            {invoice.status}
                                        </div></td>
                                        <td><button onClick={() => { window.open(invoice.url, '_blank').focus(); }} className="btn btn-primary">Link Fattura</button></td>
                                    </tr>
                                )
                            }
                        })
                    }

                </tbody>
            </table>
        </div>
    )


}

export default Table;