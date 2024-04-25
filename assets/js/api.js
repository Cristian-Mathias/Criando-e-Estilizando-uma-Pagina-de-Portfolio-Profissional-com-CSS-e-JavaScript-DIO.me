
 async function fetchProfileData(){
    const url = 'https://github.com/Cristian-Mathias/Criando-e-Estilizando-uma-Pagina-de-Portfolio-Profissional-com-CSS-e-JavaScript-DIO.me/blob/main/data/profile.json'
    const response =await fetch(url)
    const profileData = await response.json()
    return profileData
}