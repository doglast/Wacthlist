import axios from "axios";


  export async function login(email, senha){
    const response = await axios.post("http://localhost:3006/usuarios/cadastro",{
      email: email,
      senha: senha
    }
    );
    console.log(response);
    if(response.status === 200){
      navigation.navigate("Homepage");
    }else{
      return response.data
    }
  }

  export async function filmes(){
    const response = await axios.get("http://localhost:3006/filmes");
    console.log(response);
    //if(response.status === 200){
    //  console.log(response);
    //}else{
    //  coresponse.data
    //}
  }

const api = { login, filmes };

export default api ;