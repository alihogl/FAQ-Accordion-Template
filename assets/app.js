
window.addEventListener('resize', e => {
    const bgImg = document.querySelector('.top-bg img')
    if(e.target.innerWidth<=760) {
        bgImg.src = 'assets/images/background-pattern-mobile.svg'
    }

    else {
        bgImg.src = 'assets/images/background-pattern-desktop.svg'
    }
    
})

const titles = document.querySelectorAll('p[class="title"]')
const buttons = document.querySelectorAll('.click')
const contents = document.querySelectorAll('p.content')
for(let i = 0; i<4; i++) {
    titles[i].setAttribute('id',`${i+1}`)
}


titles.forEach(title =>{
    title.setAttribute('style','cursor:pointer;')
    title.addEventListener('mouseover', () => {
        title.setAttribute('style','color : #AD28EB;')
    })
    title.addEventListener('mouseout', () => {
        title.setAttribute('style','color : black;')
    })

    title.addEventListener('click', () => {
        const id = title.id
        const btn = document.querySelector(`img[id='${id}']`)
        btn.classList.toggle("check")
        changeContent(btn,id)
    

    })
})

for(let i = 0; i<4; i++) {
    contents[i].setAttribute('id',`q${i+1}`)
}


buttons.forEach(button => {
    button.addEventListener('click',e => {
      button.classList.toggle("check")
      changeContent(button,button.id)
    })
})


const changeContent = (button,id) => {

  const content = document.getElementById("q"+id)



    if(button.classList.contains('check')) {
        button.src = 'assets/images/icon-minus.svg'
        content.classList.remove('disabled')
        content.classList.add('active')
    }

    else {
        button.src = 'assets/images/icon-plus.svg'
        content.classList.remove('active')
        content.classList.add('disabled')
    }
}