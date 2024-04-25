
 async function fetchProfileData(){
    const url = 'https://github.com/Cristian-Mathias/Criando-e-Estilizando-uma-Pagina-de-Portfolio-Profissional-com-CSS-e-JavaScript-DIO.me/blob/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}