import Popup from "reactjs-popup";

import 'reactjs-popup/dist/index.css';

import FormProduto from "../formproduto/FormProduto";


function ModalProduto() {
  return (
    <>
      <Popup
      trigger={
       <button className="border rounded px-4 py-2 text-white bg-indigo-800 hover:bg-indigo-900 hover:cursor-pointer">Novo Produto</button> 
      }
      modal
      contentStyle={{
        borderRadius: '1rem',
        paddingBottom: '2rem'
      }}
      >
        <FormProduto />
      </Popup>
    </>
  )
}

export default ModalProduto