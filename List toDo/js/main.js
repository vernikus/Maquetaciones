const body = document.getElementsByTagName('body')[0];
const main = document.createElement('main');
body.insertAdjacentElement('afterbegin', main);

const formContainer = document.createElement('form');
main.appendChild(formContainer);

const box = document.createElement('input');
box.setAttribute('type', 'text',);
box.setAttribute('placeholder', 'write a task',);
formContainer.appendChild(box);

const list = document.createElement('ul');
main.appendChild(list);;

class ButtonDelete {
    static accountantID = -1;
    constructor(element, type, typeValue, value, valueValue) {
        this.element = element,
            this.type = type,
            this.typeValue = typeValue,
            this.value = value,
            this.valueValue = valueValue,
            this.id = ButtonDelete.accountantID++;
    }
    createButton() {
        let buttonDeleteTask = document.createElement(this.element);
        buttonDeleteTask.setAttribute(this.type, this.typeValue);
        buttonDeleteTask.setAttribute(this.value, this.valueValue);
        this.delete(buttonDeleteTask)
        return buttonDeleteTask;
    }
    add() {
        formContainer.children[1].addEventListener('click', (event) => {
            event.preventDefault();
            getData();
            getData() === '' ? console.error('impossible, the task is empty') : printData(getData());
        });
    }
    delete(buttonDeleteTask) {
        if (this.id >= 0 && buttonDeleteTask != undefined) {
            buttonDeleteTask.addEventListener('click', (event) => {
                event.preventDefault()
                eventDelete(buttonDeleteTask)
            })
        }

    };
};

const addDo = new ButtonDelete('input', 'type', 'button', 'value', 'ADD');
formContainer.appendChild(addDo.createButton());
addDo.add();

const getData = () => {
    const data = box.value;
    return data;
}

const createButtonDeleteTask = () => {
    const instanceButton = new ButtonDelete('input', 'type', 'button', 'value', 'DELETE');
    instanceButton.delete()
    // console.log(instanceButton.id)
    return instanceButton.createButton();
}
const li = 'li'
const printData = (data) => {
    const homework = document.createElement(li);
    const text = document.createElement('p');
    text.innerHTML = data;
    homework.appendChild(text);
    list.appendChild(homework);
    homework.appendChild(createButtonDeleteTask());
    // console.log(homework)
}

const eventDelete = (buttonDeleteTask) =>{
    buttonDeleteTask.parentElement.classList.add('animationDelete')
    setTimeout(() => {
        list.childElementCount === 0 ? console.error('there are no task to delete') : list.removeChild(buttonDeleteTask.parentElement)
    }, 1500)
}

// main.addEventListener('keypress', (event)=>{
//     event.preventDefault()
//     getData()
//     //event.key === 'Enter' ? console.log(event) : console.error('erros')
//     if(getData() !== ''){
//         printData(getData())
//     }else{
//         console.error('impossible, the task is empty')
//     }
// })
