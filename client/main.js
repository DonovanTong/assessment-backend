const goalsContainer = document.querySelector('#goals-container')

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const createBtn = document.querySelector('#createButton')
const form = document.querySelector('form')
const baseURL = "http://localhost:4000/api/compliment"

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/compliment/fortune")
        .then(res => {
            const data = res.data
            alert(data)
        })
        .catch((error) => {
            console.log(error)
        })
}
const createGoal = body => {
    console.log('create goal?')
    axios.post(baseURL, body).then((res) => {createGoalCard(goals)})
        .catch((error) => {
            console.log(error)
        })
}
function submitHandler(e) {
    e.preventDefault()

    let goal = document.querySelector('#goal')

    let bodyObj = {
        goal: goal.value
    }

    createGoal(bodyObj)

    goal.value = ''
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit', submitHandler)
// createBtn.addEventListener('click', createGoal)

function createGoalCard(goals) {
    goalsContainer.innerHTML=``
    const goalCard = document.createElement('div')
    goalCard.classList.add('new-goal')

    goalCard.innerHTML = `<p class="goal">${goals.goal}</p>`

    goalsContainer.appendChild(goalCard)

}