const dataBase = []
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ['A beautiful, smart, and loving person will be coming into your life.', 'A dubious friend may be an enemy in camouflage.', 'A faithful friend is a strong defense.', 'A pleasant surprise is waiting for you.', 'Advice, when most needed, is least heeded.']

        let randomIdx = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIdx]

        res.status(200).send(randomFortune)
    },
    createGoal: (req, res) => {
        const { goal, time } = req.body
        
        let nextId = 0
        for (let i = 0; i < dataBase.length; i++) {
            if (dataBase[i].id > nextId) {
                nextId = dataBase[i].id
            }
        }
        nextId++

        let newGoal = {
            goal: goal,
            time: time,
            id: nextId,
        }

        dataBase.push(newGoal)
        console.log(dataBase)
        res.status(200).send(dataBase)

    },
    deleteGoal: (req, res) => {
        let id = +req.params.id

        for (let i = 0; i < dataBase.length; i++) {
            if (id === dataBase[i].id) {
                dataBase.splice(i, 1)
            }
        }
        console.log(dataBase)
        res.status(200).send(dataBase)
    }

}