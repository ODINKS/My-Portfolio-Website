
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

            document.querySelector('body').style.backgroundColor = 'black'
            document.querySelector('body').style.color = 'white';
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

            document.querySelector('body').style.backgroundColor = 'white'
            document.querySelector('body').style.color = 'black'
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


document.getElementById('resumebtn').addEventListener('click', function () {
    // Create a dummy anchor element
    let downloadLink = document.createElement('a');

    downloadLink.setAttribute('target', '_blank')

    // Set the download link attributes
    downloadLink.href = 'https://drive.google.com/file/d/15iD9l23fwShjFfBKdxi03F-lV-bFLMPr/view?usp=drive_link'; // Replace with the actual path to your CV file
    downloadLink.download = 'CV(Nicholas Okeke).pdf';

    // Append the link to the body
    document.body.appendChild(downloadLink);

    // Trigger a click on the link to initiate the download
    downloadLink.click();

    // Remove the link from the DOM
    document.body.removeChild(downloadLink);
});
