//The Game of Master Mind is played as follows:  The computer has four slots, and each slot will contain a ball that is red (R), yellow (Y), green (G) or blue (B).  For example, the comp0uter might have RGGB.  You, the user are trying to guess the solution.  You might for example guess YRGB.  When you guess the correct color for the correct slot you get a "hit." If you guess a color that exists but is in the wrong slot, you get a pseudo-hit.  Note that a slot that is a hit can never count as a pseudo-hit.  For example, if the actual solution is RGBY and you guess GGRR, you have one hit and one pseudo-hit.

//Write a method that, given a guess and a solution, returns the number of hits and pseudo-hits

function MasterMind(guess,solution){
    let hit = 0;
    let pseudo = 0;
    let gfreq = {'R':0,'Y':0,'G':0,'B':0}
    let sfreq = {'R':0,'Y':0,'G':0,'B':0}
    for(let place in solution){
        if(guess[place]===solution[place]){
            hit++
        }
        else{
            gfreq[guess[place]]++
            sfreq[solution[place]]++
        }
    }
    console.log(gfreq)
    console.log(sfreq)
    for(let i in gfreq){
        if(gfreq[i]>0 && sfreq[i]>0){
            if(gfreq[i]>sfreq[i]){
                pseudo += sfreq[i]
            }
            else{
                pseudo += gfreq[i]
            }
        }
    }

    return `Hits: ${hit} \nPseudo-Hits: ${pseudo}`
}

console.log(MasterMind("RGGY","YGYG"))
console.log(MasterMind("BBYY","YRBG"))

