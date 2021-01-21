function antMoves(num){
    let grid = [[0]];
    let x = 0;
    let y = 0;
    let facing = 0;

    for(let i = 1; i<=num;i++){
        if(grid[y][x] ==0){
            grid[y][x] = 1;
            switch(facing){
                case 0:
                    facing +=1
                    y += 1
                    if(grid[y]){
                        break
                    }
                    else{
                        grid.push([0])
                        for(let j = 1; j<grid[0].length;j++){
                            grid[y].push(0)
                        }
                    }
                    break
                case 1:
                    facing += 1
                    x -=1
                    if(grid[y][x] != undefined){
                        break
                    }
                    else{
                        for(let j = 0; j<grid.length;j++){
                            grid[j].unshift(0)
                        }
                        x = 0;
                        break;
                    }
                case 2:
                    facing += 1
                    y -= 1
                    if(grid[y]){
                        break
                    }
                    else{
                        grid.unshift([0])
                        for(let j = 1; j<grid[1].length;j++){
                            grid[0].push(0)
                        }
                        y = 0;
                        break;
                    }
                case 3:
                    facing = 0
                    x +=1
                    if(grid[y][x] != undefined){
                        break
                    }
                    else{
                        for(let j = 0; j<grid.length;j++){
                            grid[j].push(0)
                        }
                        break;
                    }
            }
        }
        else if(grid[y][x] ==1){
            grid[y][x] = 0;
            switch(facing){
                case 0:
                    facing =3
                    y -= 1
                    if(grid[y]){
                        break
                    }
                    else{
                        grid.unshift([0])
                        for(let j = 1; j<grid[1].length;j++){
                            grid[0].push(0)
                        }
                        y = 0;
                        break;
                    }
                case 1:
                    facing -= 1
                    x +=1
                    if(grid[y][x] != undefined){
                        break
                    }
                    else{
                        for(let j = 0; j<grid.length;j++){
                            grid[j].push(0)
                        }
                        break;
                    }
                case 2:
                    facing -= 1
                    y += 1
                    if(grid[y]){
                        break
                    }
                    else{
                        grid.push([0])
                        for(let j = 1; j<grid[0].length;j++){
                            grid[y].push(0)
                        }
                    }
                    break
                case 3:
                    facing -= 1
                    x -=1
                    if(grid[y][x] != undefined){
                        break
                    }
                    else{
                        for(let j = 0; j<grid.length;j++){
                            grid[j].unshift(0)
                        }
                        x = 0;
                        break;
                    }
            }
        }
    }
    for(let i = 0;i<grid.length;i++){
        console.log(grid[i])
    }
    console.log(`(${x},${y})`)
    console.log(facing)
    return null
}

antMoves(22);