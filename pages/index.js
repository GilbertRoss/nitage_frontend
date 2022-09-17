import { setRevalidateHeaders } from "next/dist/server/send-payload";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

export default function Home() {
  const [invoices, setInvoices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try{
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('auth')
      })
      const response = await fetch('http://localhost:8080/invoices', {
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
      setInvoices(actualData);
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
        <div className="container mx-auto h-1/2">
          <Carousel invoices={invoices} />
        <div className="divider"></div> 
        <div className="font-bold text-4xl mb-8">Fatture degli anni precedenti</div>
        <Table invoices={invoices}></Table>
      </div>
      </>
      }
    </>
  );
}
