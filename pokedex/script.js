const img = document.querySelector('#imgPokemon')
const setaEsquerda = document.querySelector('.seta-esquerda-div')
const setaDireita = document.querySelector('.seta-direita-div')
const tipo = document.querySelector('#tipo')
const stats = document.querySelector('.div-stats')
const nomePokemon = document.querySelector('#nome-pokemon')
const idPokemon = document.querySelector('#id-pokemon')
let = idNumber = 1

const Url = id => {return `https://pokeapi.co/api/v2/pokemon/${id}`}

const fetchPokemon = () => {
    fetch(Url(idNumber))
    .then(res => {return res.json()})
    .then(data => {
        let imgPoke = data.sprites.other.dream_world.front_default
        
        img.setAttribute('src', imgPoke)
        img.setAttribute('alt', data.name)

        nomePokemon.innerHTML = data.name.toUpperCase()
        idPokemon.innerHTML = '#' + data.id
        
    let tipoPoke = data.types
    let TipoRen = tipoPoke.reduce((acc, type) => {
            acc += `
            <div class="tipo-bloco" id="${type.type.name}">
                <p>${type.type.name}</p>
            </div>
            `

            return acc
        }, '')
        tipo.innerHTML = TipoRen

        let hp = {name: data.stats[0].stat.name,local: data.stats[0].base_stat}
        let attack = {name: data.stats[1].stat.name,local: data.stats[1].base_stat}
        let defense = {name: data.stats[2].stat.name,local: data.stats[2].base_stat}
        let special_attack = {name: data.stats[3].stat.name,local: data.stats[3].base_stat}
        let special_defense = {name: data.stats[4].stat.name,local: data.stats[4].base_stat}
        let speed = {name: data.stats[5].stat.name,local: data.stats[5].base_stat}

        let Stats = data
       
    stats.innerHTML = `
    <div>
        <h2 class="status">
         ${hp.name}: ${hp.local}
        </h2>
        <div class="progress-bar" style="--progress: ${hp.local}px"></div>
    </div>
         
    <div>
        <h2 class="status">
            ${special_attack.name}: ${special_attack.local}
        </h2>
        <div class="progress-bar" style="--progress: ${special_attack.local}px"></div>
    </div>

    <div>
        <h2 class="status">
         ${attack.name}: ${attack.local}
        </h2>
        <div class="progress-bar" style="--progress: ${attack.local}px"></div>
    </div>

    <div>
        <h2 class="status">
         ${special_defense.name}: ${special_defense.local}
        </h2>
        <div class="progress-bar" style="--progress: ${special_defense.local}px"></div>
    </div>

    <div>
        <h2 class="status">
         ${defense.name}: ${defense.local}
        </h2>
        <div class="progress-bar" style="--progress: ${defense.local}px"></div>
    </div>



    <div>
        <h2 class="status">
         ${speed.name}: ${speed.local}
        </h2>
        <div class="progress-bar" style="--progress: ${speed.local}px"></div>
    </div>
    `
    
})
}
fetchPokemon()
        
        
        setaEsquerda.addEventListener('click', () =>{
            if (idNumber == 1) return
            idNumber -= 1
            fetchPokemon()
        })
        
        setaDireita.addEventListener('click', () =>{
            if (idNumber == 649) return
            idNumber += 1
            fetchPokemon()
        })
