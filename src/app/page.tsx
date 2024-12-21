
'use cliente'

export default function Page() {
  return (
    <>
      <div className="flex items-center justify=center flex-col">
        <h1 className="text-4x1 font-bold mb-4 ">AP1 Servidor</h1>
        <h3 className="text-2x1 text-gray-200 mb-20">Daniel da Silva Gonçalves</h3>
        <label htmlFor="" className="mb-2">Enviar para o servidor:</label>
        <input type="text" placeholder="Digite aqui..." className="mb-2" />
        <button className="border-2 border-blue-600 p-1 bg-blue-500 rounded-md">Enviar</button>
      </div>
    </>
  )
}

