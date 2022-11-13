const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d') 

canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576

const player = new Player()

const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
}

function animate() {
    window.requestAnimationFrame(animate)
    //console.log('go') //shows that the function is runninng in console
    
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    

    player.velocity.x = 0 //starts the player with x axis movement =0
    if (keys.d.pressed) player.velocity.x = 5
    else if (keys.a.pressed) player.velocity.x = -5
      
    player.draw()
    player.update()
} 

animate()

