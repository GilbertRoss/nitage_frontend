import { setRevalidateHeaders } from "next/dist/server/send-payload";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

export default function Home() {
  const [invoices, setInvoices] = useState(null);
  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  const filterDate = (invoices,month, startDate, endDate) => {
    let i = 0;
    let invoice = invoices.filter(invoice => new Date(invoice.next_due_date).getMonth() == month && new Date(invoice.next_due_date).getDate() <= endDate && new Date(invoice.next_due_date).getDate() >= startDate)
    
    return invoice
  }

  useEffect(() => {
    async function getData() {
      try{
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('auth')
      })
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/invoices`, {
        method: "GET",
        headers: headers,
      })
      if(response.status == 403){
        window.location.replace('/login');
        sessionStorage.clear();   
      }
      else if (!response.ok){
        throw new Error(
          `HTTP ERROR -> The status is: ${response.status}`
        )
        
      }
      let actualData = await response.json();
      console.log(actualData["invoices"])
      const board = {
        columns: [
          {
            id: new Date().getMonth()-1+"-0",
            title: <div className="font-bold text-4xl mb-8 mr-16">{months[new Date().getMonth()-1]}</div>,
            cards: filterDate(actualData["invoices"],new Date().getMonth()-1, 0,15)
          },
          {
            id: new Date().getMonth()-1 + "-15",
            title: <div className="font-bold text-4xl mb-8 mr-16">{months[new Date().getMonth()-1]}</div>,
            cards: filterDate(actualData["invoices"],new Date().getMonth()-1, 16,31)
          },
          {
            id: new Date().getMonth() + "-0",
            title: <div className="font-bold text-4xl mb-8">{months[new Date().getMonth()]}</div>,
            cards: filterDate(actualData["invoices"],new Date().getMonth(), 0,15)
          },
          {
            id: new Date().getMonth() + "-15",
            title: <div className="font-bold text-4xl mb-8">{months[new Date().getMonth()]}</div>,
            cards: filterDate(actualData["invoices"],new Date().getMonth(), 16,31)
          },
          {
            id: new Date().getMonth()+1 +"-0",
            title: <div className="font-bold text-4xl mb-8">{months[new Date().getMonth()+1]}</div>,
            cards: filterDate(actualData["invoices"],new Date().getMonth()+1, 0,15)
          },
          {
            id: new Date().getMonth()+1 +"-15",
            title: <div className="font-bold text-4xl mb-8">{months[new Date().getMonth()+1]}</div>,
            cards: filterDate(actualData["invoices"],new Date().getMonth()+1, 16,31)
          },
        ]
      }
      console.log(board)
      setInvoices(actualData);
      setBoard(board);
      setError(null);
    }catch(err){
      setError(err.message);
      setInvoices(null);
    } finally{
      setLoading(false);
    };
    }
    getData();
  }, [])

  return (
    <>
      {loading && <div>A moment please...</div>}
      {error && (
        <div className="toast toast-top toast-end">
        <div className="alert alert-error">
          <div>
            <span>{`There is a problem fetching the post data - ${error}`}</span>
          </div>
        </div>
      </div>
      )}
      {invoices &&
      <>
        <Navbar />
        <div className="px-64 mx-auto">
          <Carousel board={board} />
        <div className="divider"></div> 
        <div className="font-bold text-4xl mb-8">Fatture degli anni precedenti</div>
        <Table invoices={invoices}></Table>
      </div>
      </>
      }
    </>
  );
}
