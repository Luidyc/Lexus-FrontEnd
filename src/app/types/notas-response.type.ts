interface Transporte {
    id:number
}

export type NotasResponse = {
    transporte:Transporte
    numeroNota:string
    itens:[]
}