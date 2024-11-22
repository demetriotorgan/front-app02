import axios from 'axios'

const getProdutos = async (setProdutos)=>{
    axios
        .get('https://api-app02.vercel.app/produtos')
        .then(({data})=>{
            console.log('data-->', data)
            setProdutos(data)            
        })
}

const addForm = async(formData,notifySucesso,notifyErro)=>{
    try {
        const response = await axios.post('https://api-app02.vercel.app/produtos', formData,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        console.log('Cadastro enviado com sucesso', response.data);
        notifySucesso();        
    } catch (error) {
        console.error('Erro ao cadastrar produto', error)
        if(error.status === 500){
            notifyErro()
        }        
    }
}

export {addForm, getProdutos}