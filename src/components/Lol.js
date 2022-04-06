let summonerName = "Moudjanitosaurus";
let apiKey = process.env.REACT_APP_API_KEY;
const Lol = () => {
        fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`)

            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.name, result.profileIconId)
                },
                (error) => {
        console.log(error);
                }
            )
    };

export default Lol;

//yo