import { NotasResponse } from "./notas-response.type"

interface Conferencia {
    id:number
    dataConfencia:Date
    conferente:string
    notasFiscais:NotasResponse[]
}