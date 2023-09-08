
//Toggle event listener
const toggleState = () => {
    const toggleCheckbox = document.querySelectorAll('.toggle');
    toggleCheckbox.forEach(EachToggle => {
        if (!EachToggle.classList.contains('active')) {
            //Light to Dark mode
            EachToggle.classList.toggle('active')
            console.log('Passed!!2');

            const titleText = document.querySelectorAll('.title-texts')
            titleText.forEach((text) => {
                text.style.color = 'black'
            })

            document.getElementById('body').style.backgroundColor = 'black'
            document.getElementById('body').style.color = 'white';
            document.getElementById('resumebtn').style.color = 'white'
            document.getElementById('sidebar').style.backgroundColor = 'black'
            document.getElementById('sidebar').style.color = 'white'
            document.getElementById('footer').style.backgroundColor = 'black'
            document.getElementById('footer').style.color = 'white'
            document.getElementById('about').style.backgroundColor = 'black'
            document.getElementById('about').style.color = 'white'


        } else {
            //Dark mode to light mode
            EachToggle.classList.remove('active')

            document.getElementById('body').style.backgroundColor = 'white'
            document.getElementById('body').style.color = 'black'
            document.getElementById('resumebtn').style.color = 'black'
            document.getElementById('sidebar').style.backgroundColor = 'white'
            document.getElementById('sidebar').style.color = 'black'
            document.getElementById('footer').style.backgroundColor = 'white'
            document.getElementById('footer').style.color = 'black'
            document.getElementById('about').style.backgroundColor = 'white'
            document.getElementById('about').style.color = 'black'


        }

    })


}

//Open side bar
const openSidebar = (event) => {
    // event.preventDefault()
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'block'
}
const closeSidebar = (event) => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}