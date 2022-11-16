Array.prototype.parse2D = function () {
    const rows = []
        for (let i = 0; i < this.length; i +=16 ) {
            rows.push(this.slice(i, i + 16))
        }
        return rows
    }

Array.prototype.createObjectsFrom2D = function () {  //All JavaScript objects inherit properties and methods from a prototype.
    const objects = []
        this.forEach((row, y) => {
            row.forEach ((symbol, x) => {            
                if (symbol === 292) {
                    objects.push(
                        new CollisionBlock({                                                       
                            position: {
                                x: x * 64,
                                y: y * 64,    
                            },
                        })
                    )
                }
            })            
        })
        
        return objects
    }