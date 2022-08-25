
let about = document.querySelector('.about')
let skills = document.querySelector('.skills')
let projects = document.querySelector('.projects')
let contact = document.querySelector('.contact')

about.addEventListener('click', aboutMe)
skills.addEventListener('click', mySkills)
projects.addEventListener('click', myProjects)
contact.addEventListener('click', myContact)

function aboutMe() {
    document.querySelector('.aboutme').style.display = 'block'
    document.querySelector('.myskills').style.display = 'none'
    document.querySelector('.myprojects').style.display = 'none'
    document.querySelector('.mycontact').style.display = 'none'
}

function mySkills() {
    document.querySelector('.myskills').style.display = 'block'
    document.querySelector('.aboutme').style.display = 'none'
    document.querySelector('.mycontact').style.display = 'none'
    document.querySelector('.myprojects').style.display = 'none'
}

function myProjects() {
    document.querySelector('.myprojects').style.display = 'block'
    document.querySelector('.aboutme').style.display = 'none'
    document.querySelector('.myskills').style.display = 'none'
    document.querySelector('.mycontact').style.display = 'none'
}

function myContact () {
    document.querySelector('.mycontact').style.display = 'block'
    document.querySelector('.aboutme').style.display = 'none'
    document.querySelector('.myskills').style.display = 'none'
    document.querySelector('.myprojects').style.display = 'none'


}


