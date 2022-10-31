const goalsContainer = document.querySelector('#goals-container')

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")

const createForm = document.querySelector('form')
const goalInput = document.querySelector('#goalInput')
const timeInput = document.querySelector('#timeInput')

const deleteForm = document.querySelector('#deleteForm')
const deleteInput = document.querySelector('#deleteInput')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then(res => {
            const data = res.data
            alert(data)
        })
        .catch((error) => {
            console.log(error)
        })
}

function createGoal(e) {
    e.preventDefault()

    const bodyObj = {
        goal: goalInput.value,
        time: timeInput.value
    }

    // goalInput.value = ''
    // timeInput.value = ''

    axios.post("http://localhost:4000/api/create/", bodyObj)
        .then((response) => {
            let db = response.data
            console.log(db)
        })
        .catch((error) => {
        console.log(error)
        })
}
function deleteGoal(e) {
    e.preventDefault()

    let deleteId = deleteInput.value

    axios.delete('http://localhost:4000/api/delete/' + deleteId)
    .then((res) => {
        let db = res.data
        console.log(db)
    })
    .catch((err) => {
        console.log(err)
    })

    deleteInput.value = ''
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
createForm.addEventListener('submit', createGoal)
deleteForm.addEventListener('submit', deleteGoal)