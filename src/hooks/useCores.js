import { useState, useEffect } from 'react'
import { carregaCores } from '../services/carregaDados'

export default function useCores() {
    const [cores, setCores] = useState([])

    useEffect(() => {
        const retorno = carregaCores()
        setCores(retorno)
    }, [])

    return cores
}