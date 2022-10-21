const goals = []
globalId = 10
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
        const {goal, term} = req.body
        // let greatestId = -1
        // for(let i=0;i<goals.length; i++) {
        //     if (goals[i].id > greatestId) {
        //         greatestId = goals[i].id
        //     }
        // }
        // let nextId = greatestId + 1
        let newGoal = {
            id: globalId,
            goal,
            term
        }
        goals.push(newGoal)
        res.status(200).send(goals)

    }

}