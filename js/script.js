const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d') 

canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576

const player = new Player()

function animate() {
    window.requestAnimationFrame(animate)
    //console.log('go') //shows that the function is runninng in console
    
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    
    player.draw()
    player.update()
} 

animate()

window.addEventListener('keydown', (event) => { 
    console.log(event)
    switch (event.key) {
        case 'w':
            console.log('i pressed w')
    }
})

